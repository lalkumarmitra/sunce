"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"
import { motion, useMotionValue, useSpring, animate } from "framer-motion"

interface CounterItemProps {
    value: number
    label: string
    suffix?: string
    className?: string
}

function CounterItem({ value, label, suffix = "", className = "" }: CounterItemProps) {
    const countRef = useRef<HTMLDivElement>(null)
    const { ref: inViewRef, inView } = useInView({ threshold: 0.3, triggerOnce: true })

    useEffect(() => {
        if (inView && countRef.current) {
            const controls = animate(0, value, {
                duration: 2,
                onUpdate: (value) => {
                    if (countRef.current) {
                        countRef.current.textContent = `${Math.floor(value)}${suffix}`
                    }
                },
            })
            return () => controls.stop()
        }
    }, [inView, value, suffix])

    return (
        <Card className={`
            w-full shadow-lg  
            bg-[radial-gradient(circle_at_center,theme(colors.pink.500),theme(colors.blue.500),theme(colors.pink.500))]
            animate-gradient-background bg-[length:200%_200%]
            p-[2px] rounded-lg
            ${className}`}
        >
            <CardContent className="p-6 bg-white rounded-md">
                <div className="flex flex-col items-center gap-3" ref={inViewRef}>
                    <div
                        ref={countRef}
                        className="text-3xl lg:text-2xl whitespace-nowrap font-semibold text-muted-foreground"
                    >
                        0
                    </div>
                    <p className="text-sm text-foreground whitespace-nowrap text-center">{label}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export function Counter() {
    const counterData = [
        { value: 15, label: "Team Experience", suffix: " Years+" },
        { value: 500, label: "Utility Size Capacity", suffix: " MW+" },
        { value: 200, label: "Rooftop Capacity", suffix: " MW+" },
        { value: 40, label: "Customer Service Base", suffix: " Base+" },
        { value: 25, label: "Team Size", suffix: " Members+" },
    ]

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                {counterData.map((item, index) => (
                    <CounterItem
                        key={index}
                        value={item.value}
                        label={item.label}
                        suffix={item.suffix}
                        className={`${index === counterData.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`}
                    />
                ))}
            </div>
        </div>
    )
}
