import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <h1>Hello, world!</h1>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Product</Link>
            <Link href="/articles/breaking-news-123?lang=en">Read In English</Link>
            <Link href="/articles/breaking-news-123?lang=fr">Read In French</Link>


        </main>
    );
}
