import Link from 'next/link';

export default function ProductsList() {
    return (
        <main>
            <h1>PRODUCTS LIST</h1>
            <h2>Product 1
                <Link href="/products/1">View Details</Link>
            </h2>
            <h2>Product 2
                <Link href="/products/2">View Details</Link>
            </h2>
            <h2>Product 3
                <Link href="/products/3">View Details</Link>
            </h2>
        </main>
    );
}
