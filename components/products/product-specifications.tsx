'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CircleDot } from 'lucide-react'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
}

export default function ProductSpecifications({ specifications }: { specifications: string[] }) {
    if (!specifications.length) return null;

    return (
        <Card className="backdrop-blur-sm bg-background/30">
            <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {specifications.map((spec, index) => (
                        <motion.li
                            key={index}
                            variants={item}
                            className="flex items-start gap-3"
                        >
                            <CircleDot className="size-5 text-indigo-800 mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{spec}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            </CardContent>
        </Card>
    )
} 