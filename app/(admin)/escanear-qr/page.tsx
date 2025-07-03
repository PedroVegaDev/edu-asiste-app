import { productsTable } from "@/schemas";
import { db } from "@/utils/drizzle";

export default async function EscanearQrPage() {
  const products = await db.select().from(productsTable);

  return (
    <div>
      <h1>EscanearQrPage</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
