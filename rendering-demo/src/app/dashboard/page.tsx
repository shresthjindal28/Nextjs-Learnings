"use client";
import React, { useState } from "react";


export default function DashboardPage() {
    const [name, setName] = useState("");

    return(
        <div className="">
            <h1>Dashboard</h1>
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name"
            />
            <p>Hello, {name}</p>
        </div>
    )
}