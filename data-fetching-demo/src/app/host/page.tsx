type Post = {
    userId:number,
    id: number;
    title: string;
    body: string;
}


export default async function Host() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();

    return (
        <div>
            <h1>Posts</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {posts.map(post => (
                    <div key={post.id} className="bg-white p-4 rounded-lg shadow border">
                        <h3 className="font-semibold text-lg text-gray-800">{post.title}</h3>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}