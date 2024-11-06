'use client'

import { motion } from 'framer-motion'
import { Building2, Phone, Mail } from 'lucide-react'

const contactInfo = [
  {
    icon: Building2,
    title: 'Office Address',
    content: 'B-203, Sector 63A, Noida (U.P.) 201307',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91-9540263987, +91-9354299513',
  },
  {
    icon: Mail,
    title: 'Email',
    content: ['info@suncerenewable.com', 'ajeet.mishra@suncerenewable.com'],
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {contactInfo.map((info, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-4"
        >
          <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <info.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{info.title}</h3>
            {Array.isArray(info.content) ? (
              <div className="mt-1 space-y-1">
                {info.content.map((item, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {item}
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-1 text-sm text-muted-foreground">
                {info.content}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
} 