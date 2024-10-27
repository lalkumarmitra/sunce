"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import logo1 from "@/public/assets/clients/Tata-power-1.png"
import logo2 from "@/public/assets/clients/amplus-solar.png"
import logo3 from "@/public/assets/clients/azure-power.png"
import logo5 from "@/public/assets/clients/cleanmax-energy.png"
import logo4 from "@/public/assets/clients/hero-future-energies-1.png"
import logo6 from "@/public/assets/clients/jakson.png"
import logo7 from "@/public/assets/clients/radiance-renewables.png"
import logo8 from "@/public/assets/clients/sunsource-energy.png"
import { Card, CardContent } from "../ui/card"

export default function OurClientInfinite() {
    const [api, setApi] = useState<any>()

    const logos: StaticImageData[] = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]

    useEffect(() => {
        if (!api) return

        // Start auto-scrolling
        const autoScroll = setInterval(() => {
            api.scrollNext()
        }, 2000) // Adjust timing as needed

        return () => clearInterval(autoScroll)
    }, [api])

    return (
        <div className="w-full px-4 py-10 bg-gray-100">
            <h2 className="text-3xl text-indigo-900 text-center mb-6">Our Clients</h2>
            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {/* Duplicate logos array for infinite effect */}
                    {[...logos, ...logos].map((logo, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                        >
                            <Card className="hover:scale-105 transition-all duration-300">
                                <CardContent className="px-4 py-2">
                                    <Image
                                        src={logo}
                                        alt={`Client logo ${index + 1}`}
                                        width={200}
                                        height={100}
                                        className="aspect-video object-contain w-full"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
