'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { products } from '@/public/product-data';

export default function ProductGrid() {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    return <div>
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (

                    <motion.div
                        key={product.id}
                        variants={item}
                        className="group relative rounded-xl border border-border/40 p-6 backdrop-blur-sm bg-background/30 hover:bg-background/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
                    >
                        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            <Link className='cursor-pointer' href={`/products/${product.id}`} key={product.id}>
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center transform transition-transform duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </Link>
                        </div>

                        <div className="flex-1 flex flex-col">
                            <div className="mt-6">
                                <Link className='cursor-pointer' href={`/products/${product.id}`} key={product.id}>
                                    <h3 className="text-xl font-semibold text-indigo-800">
                                        {product.name}
                                    </h3>
                                </Link>
                                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                                    {product.description}
                                </p>
                            </div>

                            <motion.div
                                className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <button className="w-full rounded-lg bg-gradient-to-r from-primary to-primary/80 px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300">
                                    <Link href={`/products/${product.id}`}>
                                        Learn More <ArrowRight className="size-4 ms-2 inline" />
                                    </Link>
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>

                ))}
            </div>
        </motion.div>
    </div>
}
