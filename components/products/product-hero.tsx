'use client'

import { motion } from 'framer-motion'
import { ProductType } from '@/public/product-data'
import { BlurReveal } from '../animations/blur-reveal'


export default function ProductHero({ product }: { product: ProductType }) {
    return (
        <div className="relative px-6 py-8 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid lg:grid-flow-col gap-8 lg:gap-12 items-start"
                >
                    {/* Image */}
                    <motion.div
                        className="md:w-96 relative aspect-square overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-contain p-8"
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="flex flex-col gap-6 items-start">
                        <BlurReveal>
                            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-indigo-800">
                                {product.name}
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                {product.description}
                            </p>
                            {product.about && (
                                <p className="mt-4 text-muted-foreground">
                                    {product.about}
                                </p>
                            )}
                        </BlurReveal>
                    </div>
                </motion.div>
            </div>
        </div>
    )
} 