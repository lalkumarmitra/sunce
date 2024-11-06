import { Metadata } from 'next'
import { articles } from '@/public/articles'
import ArticlesList from './components/ArticlesList'
import GridPattern from '@/components/animated-grid-bg'

export const metadata: Metadata = {
    title: 'News & Articles | Your Company',
    description: 'Stay updated with the latest news, insights and articles about solar technology and renewable energy solutions.',
    openGraph: {
        title: 'News & Articles | Your Company',
        description: 'Stay updated with the latest news, insights and articles about solar technology and renewable energy solutions.',
        type: 'website',
    },
}

export default function NewsPage() {
    return (
        <div className="relative min-h-screen">
            <GridPattern
                className="absolute inset-0 -z-10 opacity-20 dark:opacity-30"
                width={32}
                height={32}
                strokeDasharray={2}
                numSquares={35}
                maxOpacity={0.3}
            />
            <div className="container mx-auto px-4 py-8 relative">
                <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                    Latest News & Articles
                </h1>
                <ArticlesList articles={articles} />
            </div>
        </div>
    )
}
