'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

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

export default function ProductFeatures({ features }: { features: string[] }) {
    return (
        <Card className="backdrop-blur-sm bg-background/30">
            <CardHeader>
                <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
                <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {features.map((feature, index) => (
                        <motion.li
                            key={index}
                            variants={item}
                            className="flex items-start gap-3"
                        >
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            </CardContent>
        </Card>
    )
} 