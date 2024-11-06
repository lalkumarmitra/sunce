import { Metadata } from 'next'
import { articles } from '@/public/articles'
import { notFound } from 'next/navigation'
import GridPattern from '@/components/animated-grid-bg'
import ArticleView from './components/ArticleView'

interface Props {
    params: { id: string }
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const article = articles.find(article => article.id === parseInt(params.id))

    if (!article) return { title: 'Article Not Found' }

    return {
        title: `${article.title} | Your Company News`,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            type: 'article',
            publishedTime: article.date,
            authors: ['Your Company'],
            tags: [article.category],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.description,
        }
    }
}

export default function ArticlePage({ params }: Props) {
    const article = articles.find(article => article.id === parseInt(params.id))
    if (!article) notFound()

    return (
        <div className="relative min-h-screen">
            <GridPattern
                className="fixed inset-0 -z-10 opacity-20 dark:opacity-30"
                width={32}
                height={32}
                strokeDasharray={2}
                numSquares={35}
                maxOpacity={0.3}
            />
            <ArticleView article={article} />
        </div>
    )
}