export const dynamicParams = false;


export async function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ];
}

export default async function ProductPage({ params }:{params:Promise<{id:string}>}) {
    const { id } = await params;

    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    );
} 