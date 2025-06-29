"use client";

import { useRouter } from "next/navigation";


export default function OrderProductPage() {
    const router = useRouter();

    const handlePlaceOrder = () => {
        console.log("Order placed successfully!");
        router.push("/");
    }
    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
}
