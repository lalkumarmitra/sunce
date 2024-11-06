'use client'

import { motion } from "framer-motion";


export default function ProductPageHero() {
    return <div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-center text-indigo-800">
                Our Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Discover our carefully curated collection of premium products
            </p>
        </motion.div>
    </div>
}
