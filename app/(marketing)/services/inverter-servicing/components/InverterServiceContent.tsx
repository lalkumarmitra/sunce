'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

export default function InverterServiceContent() {
    return (
        <div className="container mx-auto max-w-6xl px-4 py-12">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-8"
            >
                {/* Hero Section */}
                <div className="text-center space-y-4">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                        variants={fadeIn}
                    >
                        Inverter Servicing
                    </motion.h1>
                    <motion.h2
                        className="text-2xl md:text-3xl font-semibold text-muted-foreground"
                        variants={fadeIn}
                    >
                        What we do?
                    </motion.h2>
                </div>

                {/* Main Content */}
                <Card className="backdrop-blur-md bg-background/60 border-muted/30">
                    <CardContent className="p-6 md:p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <motion.div
                                className="space-y-6"
                                variants={fadeIn}
                            >
                                <h3 className="text-xl font-semibold">We provide professional services for the maintenance of solar inverters.</h3>
                                <p className="text-muted-foreground">Our team of highly skilled technicians is dedicated to ensuring the smooth operation and optimal performance of your inverters. We understand the critical role inverters play in efficiently converting solar energy into electricity and injecting it into the power grid.</p>
                            </motion.div>
                            <motion.div
                                variants={fadeIn}
                                className="relative aspect-video rounded-lg overflow-hidden"
                            >
                                <Image
                                    src="/assets/misc/inverter-servicing.png"
                                    alt="Inverter Servicing"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </motion.div>
                        </div>
                    </CardContent>
                </Card>

                {/* Services Accordion */}
                <motion.div variants={fadeIn} className="px-4">
                    <h2 className="text-2xl font-semibold mb-6">When you choose our company for your inverter maintenance and repair needs, you can expect:</h2>
                    <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]} className="w-full">
                        {/* Your existing accordion items with enhanced styling */}
                        <AccordionItem  value="item-1" className="border-muted/30" defaultValue="item-1">
                            <AccordionTrigger className="hover:text-primary">Skilled Technicians:</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Our technicians are highly trained professionals who have extensive experience in working with inverters. They possess in-depth knowledge of different inverter systems and can effectively diagnose and resolve issues.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-muted/30">
                            <AccordionTrigger className="hover:text-primary">Efficient Troubleshooting:</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                We use advanced diagnostic tools and techniques to identify faults and troubleshoot problems quickly. Our goal is to minimize downtime and get your inverters back to their optimal functionality as soon as possible.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-muted/30">
                            <AccordionTrigger className="hover:text-primary">Quality Parts:</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                We use genuine, high-quality replacement parts to ensure the longevity and performance of your inverters. Our partnerships with reputable suppliers allow us to source components that meet or exceed the original equipment manufacturer’s specifications.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-muted/30">
                            <AccordionTrigger className="hover:text-primary">Competitive Pricing:</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                We strive to offer our services at competitive rates without compromising on quality. Our transparent pricing model ensures that you receive reliable services at reasonable costs.    
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className="border-muted/30">
                            <AccordionTrigger className="hover:text-primary">Prompt Response:</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                We understand the importance of timely assistance. Whenever you need our assistance, our team will promptly respond to your inquiries and work diligently to address your requirements.    
                            </AccordionContent>
                        </AccordionItem>
                        {/* ... other accordion items ... */}
                    </Accordion>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    variants={fadeIn}
                    className="py-8 px-4 grid md:flex justify-between items-center gap-4"
                >
                    <p className="text-lg text-muted-foreground">
                        By choosing our company, you can have peace of mind knowing that your inverters are in capable hands. We are dedicated to maximizing their efficiency and reliability, enabling you to make the most out of your solar energy investment.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            Contact Us
                        </Button>
                    </Link>
                </motion.div>

                {/* Enterprise Section */}
                <Card className="backdrop-blur-md bg-background/60 border-muted/30">
                    <CardContent className="p-6 md:p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <motion.div
                                className="space-y-6"
                                variants={fadeIn}
                            >
                                <h2 className="text-2xl font-semibold">SolarCraft Solutions: Elevating Efficiency and Excellence</h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>For those overseeing large-scale solar farms and managing solar plant operations, we extend a distinctive service tailored to your needs.</p>
                                    <p>This unique service not only enables you to defer costly repowering initiatives temporarily but also contributes to a substantial extension of your solar plants&apos; operational lifespan.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={fadeIn}
                                className="relative aspect-video rounded-lg overflow-hidden"
                            >
                                <Image
                                    src="/assets/misc/ABB_Mustard_01_LowRes.png"
                                    alt="Enterprise Inverter Servicing"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </motion.div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
} 