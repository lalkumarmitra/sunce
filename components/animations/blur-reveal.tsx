'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
const variants = {
  hidden: { filter: 'blur(10px)', y: 20, opacity: 0 },
  visible: { filter: 'blur(0)', y: 0, opacity: 1 },
}

export function BlurReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={transition}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
} 