'use client'

import { Article } from '@/public/articles'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Card, CardContent } from '@/components/ui/card'

interface ArticleViewProps {
  article: Article
}

export default function ArticleView({ article }: ArticleViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <Card className="overflow-hidden backdrop-blur-md bg-white/10 dark:bg-black/10 border-white/20 shadow-xl">
        <CardContent className="p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                {article.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-4 w-4" />
                {format(new Date(article.date), 'MMMM dd, yyyy')}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {article.title}
            </h1>
            
            <p className="text-lg text-muted-foreground/90 mb-8">
              {article.subtitle}
            </p>

            <div className="space-y-6">
              {article.content.map((section, index) => {
                switch (section.type) {
                  case 'heading':
                    return (
                      <motion.h2
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="text-2xl font-bold mt-8 mb-4"
                      >
                        {section.data}
                      </motion.h2>
                    )
                  case 'subheading':
                    return (
                      <motion.h3
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="text-xl font-semibold mt-6 mb-3"
                      >
                        {section.data}
                      </motion.h3>
                    )
                  default:
                    return (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {section.data}
                      </motion.p>
                    )
                }
              })}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 