"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import ZoomInView from "../ui/zoom-in-view"
import { products } from "@/public/product-data"
import { ProductType } from "@/public/product-data"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export default function ProductShowcase() {
    const isMobile = useIsMobile()
    const showcaseProducts = [1,2,4]

    return (
        <section className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-center mb-10"
                >
                    <h2 className="text-3xl font-bold text-indigo-800">Our Products</h2>
                    <Link href="/products">
                        <Button variant="outline">
                            <Link href="/products">
                                View All Products
                                <ArrowRight className="ml-2 h-4 w-4 inline" />
                            </Link>
                        </Button>
                    </Link>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {products.filter(product => showcaseProducts.includes(product.id)).map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                        >
                            <ZoomInView>
                                <ProductCard product={product} isMobile={isMobile} />
                            </ZoomInView>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

function ProductCard({ product, isMobile }: { product: ProductType; isMobile: boolean }) {
    return (
        <motion.div
            whileHover={isMobile ? {} : { y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="overflow-hidden h-full">
                {isMobile ? (
                    // Mobile Layout - Content below image
                    <div>
                        <div className="relative aspect-square">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-4 bg-white"
                            />
                        </div>
                        <div className="p-4 bg-white">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                            <p className="text-sm mb-4 text-gray-600">{product.description}</p>
                            <Link href={product.link}>
                                <Button className="w-full" variant="default">
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    // Desktop Layout - Hover overlay
                    <div className="relative group">
                        <div className="relative aspect-square">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-4 bg-white"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-sm mb-4">{product.description}</p>
                            <Link href={product.link}>
                                <Button className="w-full" variant="secondary">
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </Card>
        </motion.div>
    )
} 