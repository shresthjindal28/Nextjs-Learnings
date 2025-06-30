import Link from "next/link";

export default function F1Page() {
    return (
        <div>
            <h1>F1 Page</h1>
            <Link href="/f1/f2">Go to F2 Page</Link>
            <p>This is the F1 page.</p>
        </div>
    );
}