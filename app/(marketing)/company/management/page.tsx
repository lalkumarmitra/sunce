"use client"

import ContactFooter from "@/components/custom/contact-footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import ZoomInView from "@/components/ui/zoom-in-view";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import AnimatedGridBg from "@/components/animated-grid-bg";


export default function Management() {
    const teamMembers = [
        {
            name: "AJEET MISHRA",
            position: "Founder & CEO",
            image: "/assets/management/Ajeet-Mishra-min.png",
            description: "More than 10 years experience In Solar Industry. Leading multiple business ventures successfully in Solar and human Resourcing. Worked with Hero Future Energies & Azure Power. Has executed projects of more than 100MW in rooftop and 1GW in Ground mount solar. Expertise in Design, Engineering and Construction. Graduate in Electrical Engineering."
        },
        {
            name: "DIVY TIWARI",
            position: "Founder & COO",
            image: "/assets/management/DIVY-TIWARI-min.png",
            description: "More than 8 Years of experience in Solar Industry. Have Executed more than 100MW. Expertise In Project Execution and Site management. Worked with TCS, Suryaday and Suntrap. Graduate in Electrical Engineering."
        },
        {
            name: "VEDANSH SHRIVASTAVA",
            position: "Founder & CTO",
            image: "/assets/management/VEDANSH-SHRIVASTAVA-min.png",
            description: "More than 18 Years of Experience In Solar Industry. Has Executed more than 500MW. Expertise In technology and O&M of Solar Project. Worked with Moser-baer, Indosolar, RPG. Leadership experience of handling more team of more than 100 at site and Office. Graduate in Electrical Engineering."
        },
        // Add other team members here
    ];

    return (
        <>
            <div className="relative min-h-screen overflow-hidden">
                {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <AnimatedGridBg 
                    className="opacity-80 dark:opacity-80"
                    duration={4}
                    maxOpacity={0.3}
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white/40 to-violet-50/40 dark:from-gray-900/40 dark:via-gray-900/40 dark:to-violet-950/40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
            </div>

            {/* Content */}
            <section className="relative z-10 py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-center text-5xl font-bold text-indigo-800 mb-16">
                        Our Leadership
                    </h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <ZoomInView key={index} delay={index * 0.2}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <Card className="group relative overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        
                                        {/* Blur Effect Background */}
                                        <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        
                                        <CardHeader className="relative z-10 pb-0">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="flex items-center gap-4"
                                            >
                                                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-indigo-500/20 group-hover:ring-indigo-500/40 transition-all duration-300">
                                                    <Image
                                                        src={member.image}
                                                        alt={member.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-2xl font-bold text-indigo-800">
                                                        {member.name}
                                                    </CardTitle>
                                                    <CardDescription className="text-lg font-medium text-indigo-600/80 dark:text-indigo-400/80">
                                                        {member.position}
                                                    </CardDescription>
                                                </div>
                                            </motion.div>
                                        </CardHeader>

                                        <CardContent className="relative z-10 mt-6">
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                                                {member.description}
                                            </p>
                                            
                                            {/* Social Links */}
                                            <div className="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400"
                                                >
                                                    <LinkedinIcon className="w-5 h-5" />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400"
                                                >
                                                    <TwitterIcon className="w-5 h-5" />
                                                </motion.button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </ZoomInView>
                        ))}
                    </div>
                </div>
            </section>
            </div>
            <ContactFooter />
        </>
    );
}

