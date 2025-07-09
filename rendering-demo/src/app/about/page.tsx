import { cookies } from "next/headers";


export default async function AboutPage() {
    const cookieStore = await cookies()
    const theme = cookieStore.get("theme")
    console.log("Theme from cookies:", theme);
    console.log("About Page Rendered");
    return(
        <div className="">About Page {new Date().toLocaleString()}</div>
    )
}