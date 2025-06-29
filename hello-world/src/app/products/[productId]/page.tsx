export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <main>
      <h1>PRODUCT DETAILS</h1>
      <p>Details for product: {productId}</p>
    </main>
  );
}
