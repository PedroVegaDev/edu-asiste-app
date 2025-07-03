import { productsTable, usersTable } from "@/schemas";
import { db } from ".";

async function executeSeed() {
  const user: typeof usersTable.$inferInsert = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
  };

  await db.insert(usersTable).values(user);
  console.log("New user created!");

  const product1: typeof productsTable.$inferInsert = {
    name: "Guitarra",
    price: 45.5,
  };

  const product2: typeof productsTable.$inferInsert = {
    name: "raqueta de tennis",
    price: 45.5,
  };

  await db.insert(productsTable).values([product1, product2]);
  console.log("New products created!");
}

executeSeed();
