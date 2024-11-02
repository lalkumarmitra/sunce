"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    duration = 0.1,
    initialDelay = 0.1,
}: {
    words: string;
    className?: string;
    duration?: number;
    initialDelay?: number;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.trim().split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 0,
                filter: "blur(10px)",
            },
            { duration: 0 }
        );

        animate(
            "span",
            {
                opacity: 1,
                filter: "blur(0px)",
            },
            {
                duration: duration,
                delay: stagger(0.1, { startDelay: initialDelay }),
                ease: "easeOut",
            }
        );
    }, [scope.current, animate, duration, initialDelay]);

    return (
        <motion.div ref={scope} className="relative">
            {wordsArray.map((word, idx) => (
                <motion.span
                    key={word + idx}
                    className={cn(
                        "dark:text-white text-black opacity-0 inline-block",
                        className
                    )}
                    style={{
                        filter: "blur(8px)",
                        marginRight: "0.4em",
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};
