export default async function ProductReview({
    params,
}: {
    params: Promise<{ productid: string; review: string }>;
}) {
    const { productid, review } = await params;
    return (
        <h1>review {review} for product {productid}</h1>
    );
}