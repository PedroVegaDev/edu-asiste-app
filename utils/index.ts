import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { productsTable, usersTable } from '../schema';
import { eq } from 'drizzle-orm';


const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: 'john2@example.com',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)


  const product1: typeof productsTable.$inferInsert = {
    name: "Guitarra",
    price: 45.50
  }

  const product2: typeof productsTable.$inferInsert = {
    name: "raqueta de tennis",
    price: 45.50
  }

  await db.insert(productsTable).values([product1, product2]);



  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

//   await db
//     .update(usersTable)
//     .set({
//       age: 31,
//     })
//     .where(eq(usersTable.email, user.email));
//   console.log('User info updated!')

//   await db.delete(usersTable).where(eq(usersTable.email, user.email));
//   console.log('User deleted!')
}

main();
