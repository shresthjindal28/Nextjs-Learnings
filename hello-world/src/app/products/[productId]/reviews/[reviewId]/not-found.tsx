"use client"

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return (
        <main>
            <h1>Review Not Found</h1>
            <p>Requested URL: {pathname}</p>
        </main>
    );
}
