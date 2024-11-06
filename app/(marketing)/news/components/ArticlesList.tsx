'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Article } from '@/public/articles'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

interface ArticlesListProps {
    articles: Article[]
}

export default function ArticlesList({ articles }: ArticlesListProps) {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {articles.map((article) => (
                <motion.div
                    key={article.id}
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    className="h-full"
                >
                    <Card className="h-full overflow-hidden backdrop-blur-md bg-white/10 dark:bg-black/10 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <CardHeader className="relative">
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                                    {article.category}
                                </Badge>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <CalendarIcon className="mr-1 h-4 w-4" />
                                    {format(new Date(article.date), 'MMM dd, yyyy')}
                                </div>
                            </div>
                            <CardTitle className="text-xl mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                <Link href={`/news/${article.id}`}>{article.title}</Link>
                            </CardTitle>
                            <CardDescription className="text-muted-foreground/90">
                                {article.subtitle}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground/80 line-clamp-3">
                                {article.description}
                            </p>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Button variant="link" className="underline text-indigo-800">
                                <Link href={`/news/${article.id}`}>Read More ...</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    )
} 