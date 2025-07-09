"use client";
import { useState, useEffect } from 'react';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    useEffect(()=>{
        async function fetchUsers() {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError("Failed to fetch users: " + (err instanceof Error ? err.message : String(err)));
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Users</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {users.map(user => (
                    <div key={user.id} className="bg-white p-4 rounded-lg shadow border">
                        <h3 className="font-semibold text-lg text-gray-800">{user.name}</h3>
                        <p className="text-gray-600">@{user.username}</p>
                        <p className="text-blue-600 hover:underline">{user.email}</p>
                        <p className="text-gray-700">{user.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}