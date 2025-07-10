type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function UsersServer() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();
 
    

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