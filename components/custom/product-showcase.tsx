"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import ZoomInView from "../ui/zoom-in-view"

// Product type definition
interface Product {
    id: string
    name: string
    description: string
    image: string
    link: string
}

// Sample products data
const products: Product[] = [
    {
        id: "1",
        name: "SNet Portable String Monitoring Device",
        description: "The SNet Portable String Monitoring Device is a cutting-edge PV string monitoring system designed to precisely detect abnormal conditions within a solar power plant. It monitors all strings within a Combiner Box without disrupting power generation.",
        image: "/assets/products/7-min-removebg-preview.png",
        link: "/products/solar-inverter"
    },
    {
        id: "2",
        name: "SNet - LoRa",
        description: "Advanced LoRa Technology (wireless) for Reliable Data Acquisition and Transmission.",
        image: "/assets/products/1-min-removebg-preview.png",
        link: "/products/battery-system"
    },
    {
        id: "3",
        name: "SNet RS485 to Ethernet Convertor",
        description: "Acts as MODBUS TCP Slave and MODBUS RTU Master. Supports standard MODBUS commands.",
        image: "/assets/products/3-min-removebg-preview.png",
        link: "/products/monitoring-system"
    }
]

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
                            View All Products
                            <ArrowRight className="ml-2 h-4 w-4" />
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
                    {products.map((product) => (
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

function ProductCard({ product, isMobile }: { product: Product; isMobile: boolean }) {
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