import Link from "next/link"

export default async function NewsArticle({params, searchParams}:{
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang?: 'en' | 'fr' | 'es' }>
}) {
    const { articleId } = await params;
    const { lang = 'en' } = await searchParams;
    return (
        <div className="">
            <h1>Breaking News: Article {articleId}</h1>
            <p>Reading In {lang}</p>

            <div className="">
                <Link href={`/articles/${articleId}?lang=en`}>Read In English</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>Read In French</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Read In Spanish</Link>
            </div>
        </div>
    )
}