"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Career() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50/30 via-white to-violet-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950/50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-4 top-0 h-72 w-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
                <div className="absolute -right-4 top-0 h-72 w-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 h-72 w-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
            </div>

            {/* Content Section - Added z-10 to ensure content appears above background */}
            <section className="relative z-10 container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8 container"
                >
                    <Card className="px-2 py-8 md:px-8 backdrop-blur-sm bg-white/40 dark:bg-gray-950/40 border border-white/20 shadow-xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                        >
                            <h1 className="text-3xl font-bold text-center text-indigo-800 dark:text-indigo-200">
                                What makes Sunce Renewables a great place to work?
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-base text-center leading-relaxed text-muted-foreground mt-4"
                        >
                            We re-imagined what &quot;going to work&quot; means.
                        </motion.p>
                        <CardContent className="max-w-5xl mx-auto">
                            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                                We do things a little different at Sunce starting with where we work. Our consultants work remote. We don&apos;t believe in a big office with more overhead. We&apos;ve reimagined how we work. We collaborate using simple tools, not overly complex. We&apos;ve reinvented who is on our team by focusing on a diverse group of talented contract consultants to work on projects they enjoy. We&apos;ve changed up when we work. Burn out stinks. We are flexible and focus on engagements with awesome clients!
                            </p>
                            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                                As a company that believes in visual thinking, we embrace doodling and plan to never stop learning. Learn more about who we are, what to expect when working with us, the core values that define us, and how we help our team members grow personally and professionally…
                            </p>
                        </CardContent>
                    </Card>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src={'/assets/misc/WORK-CULTURE-min.png'}
                            alt="Sunce Renewables"
                            width={1000}
                            height={1000}
                            className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    <Card className="p-8 backdrop-blur-sm bg-white/40 dark:bg-gray-950/40 border border-white/20 shadow-xl">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="space-y-4 px-8">
                                <h2 className="text-3xl font-bold text-indigo-800 dark:text-indigo-200">
                                    Register for future job opportunities
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    We maintain a registry of qualified candidates who may be right for a position at Sunce in the future.
                                </p>
                            </div>
                            <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                                Apply Now
                            </Button>
                        </div>
                    </Card>
                    <Card className="px-2 py-8 md:px-8 backdrop-blur-sm bg-white/40 dark:bg-gray-950/40 border border-white/20 shadow-xl">
                        <CardContent className="max-w-6xl mx-auto">
                            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                                SUNCE is committed to ensuring fair employment practices and equal access to our programs, services, and activities. If you are in need of disability-related accommodations, or you would like to contact our disability compliance coordinator, please email us at info@suncerenewable.com
                            </p>
                            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                                SUNCE is an equal opportunity employer. Every qualified applicant will be considered for employment. SUNCE does not discriminate based on race, color, religion, gender, sexual orientation, gender identity, genetic information, age, national origin, marital status, disability status, political ideology, military or protected veteran status, or any other characteristic protected by applicable federal, state, or local law.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </section>
        </div>
    );
}
