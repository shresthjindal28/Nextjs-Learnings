export default async function ProductReview({params}:{params: Promise<{ productId: string; reviewId: string }>}) {
    const { productId, reviewId } = await params;
    return (
        <main>
            <h1>PRODUCT REVIEW</h1>
            <p>Review for product: {productId}</p>
            <p>Review ID: {reviewId}</p>
        </main>
    );
}
