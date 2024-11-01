"use client"

import { motion } from "framer-motion";
import { useRef } from "react";

interface ZoomOutViewProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function ZoomOutView({ children, className = "", delay = 0 }: ZoomOutViewProps) {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
