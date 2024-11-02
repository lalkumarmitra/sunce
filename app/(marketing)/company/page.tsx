import ContactFooter from "@/components/custom/contact-footer";
import { MultilayerCard } from "@/components/designer-card";
import Particles from "@/components/particle-bg";
import { Button } from "@/components/ui/button";
import ZoomInView from "@/components/ui/zoom-in-view";
import Image from "next/image";
import Link from "next/link";


export default function CompanyPage() {
    return <div className="">
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 lg:px-20">
                <h1 className="text-4xl mb-8 font-bold text-center text-indigo-800">Why Sunce?</h1>
                <div className="grid gap-6 md:gap-24 md:grid-flow-col">
                    <ZoomInView className="flex items-center">
                        <p className="text-base md:text-lg text-muted-foreground">Sunce, was formed in 2016 by Three experienced Technocrats who knew there was a better way to develop products and grow businesses. <b> Our approach involves a &apos;market-pull&apos; orientation rather than &apos;technology-push&apos;.</b> By gathering deep market insight before building the technology solutions, we ensure there is both a customer and a market willingness to embrace the products and businesses we develop.
                            Our strong commercial mindset is a key aspect of Sunce&apos;s approach to build products and build businesses. It all starts with associating entrepreneurial thinkers who possess both technical expertise and business acumen.</p>
                    </ZoomInView>
                    <ZoomInView>
                        <Image
                            src="/assets/misc/about-2-min.png"
                            alt="About Circle"
                            width={1000}
                            height={1000}
                            className="w-full md:w-72 ml-auto aspect-square object-cover rounded"
                        />
                    </ZoomInView>
                </div>
            </div>
        </section>
        <section className="relative">
            <div className="container px-4 pt-12 pb-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <ZoomInView>
                    <div className="grid gap-4">
                        <Image
                            src="/assets/misc/about-circle.png"
                            alt="About Circle"
                            width={1000}
                            height={1000}
                            className="w-full md:w-96 mx-auto aspect-square object-cover"
                        />
                    </div>
                </ZoomInView>
                <div className="grid gap-4">
                    <ZoomInView>
                        <div className="grid gap-2">
                            <h2 className="text-2xl lg:text-xl font-bold text-indigo-800">Our Why</h2>
                            <p className="text-base md:text-sm text-muted-foreground">We know the old saying &quot;do what you love and you&apos;ll never work a day in your life&quot; but we truly believe it and live it. Our firm with its team of consultants genuinely loves helping clients solve some of their toughest challenges. We L-O-V-E tackling businesses that need to re-imagine how they will compete in the future. We enjoy getting in the trenches with our clients to take on tough problems like improving culture, enhancing the customer experience or redesigning process.</p>
                        </div>
                    </ZoomInView>
                    <ZoomInView>
                        <div className="grid gap-2">
                            <h2 className="text-2xl lg:text-xl font-bold text-indigo-800">What&apos;s it like working at Sunce?</h2>
                            <p className="text-base md:text-sm text-muted-foreground">Our team is passionate about personal and professional development, this is why we made Capacity and Resource Building core to our business model. We believe everyone can become a stronger leader, just as important, we believe that teamwork makes the dream work. Building capabilities within our client&apos;s own team is how to create sustainable organizations.</p>
                        </div>
                    </ZoomInView>
                    <ZoomInView>
                        <div className="grid gap-2">
                            <h2 className="text-2xl lg:text-xl font-bold text-indigo-800">Our Mission</h2>
                            <p className="text-base md:text-sm text-muted-foreground">To be a responsible leader in providing clean energy solutions for sustaining the Earth.</p>
                        </div>
                    </ZoomInView>
                    <button className={`
                        lg:w-fit mt-4
                        inline-flex h-12 
                        animate-shimmer items-center justify-center rounded-md 
                        border border-slate-500 dark:border-slate-800 
                        bg-[linear-gradient(110deg,#fff,45%,#f1f1f1,55%,#fff)] 
                        dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                        bg-[length:200%_100%] px-6 font-medium text-slate-600 dark:text-slate-400 
                        transition-colors focus:outline-none focus-visible:ring-2 focus:ring-slate-700 
                        focus:ring-offset-2 focus:ring-offset-slate-400 dark:focus:ring-slate-300
                    `}>
                        Meet Our Leaders
                    </button>
                </div>
            </div>
            <Particles className="absolute inset-0 -z-10" color="#FF69B4" quantity={100} />
        </section>
        <section className="container mx-auto px-4 py-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <ZoomInView>
                <MultilayerCard className="relative overflow-hidden">
                    <div className="relative z-10 text-white h-full flex flex-col justify-between px-8 py-4">
                        <h1 className="text-3xl lg:text-2xl font-bold mb-2">Collaboration</h1>
                        <p className="text-lg md:text-sm">Team up, down & across; Be a trustworthy partner</p>
                    </div>
                    <div className="absolute inset-0 bg-black/60 z-[1]" />
                    <Image
                        src="/assets/misc/collaboration-min.png"
                        alt="Collaboration"
                        fill
                        className="absolute inset-0 object-cover z-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </MultilayerCard>
            </ZoomInView>
            <ZoomInView>
                <MultilayerCard className="relative overflow-hidden">
                    <div className="relative z-10 text-white h-full flex flex-col justify-between px-8 py-4">
                        <h1 className="text-3xl lg:text-2xl font-bold mb-2">Commitment</h1>
                        <p className="text-lg md:text-sm">Continually give your best; Drive excellence</p>
                    </div>
                    <div className="absolute inset-0 bg-black/60 z-[1]" />
                    <Image
                        src="/assets/misc/commitment-min.png"
                        alt="Commitment"
                        fill
                        className="absolute inset-0 object-cover z-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </MultilayerCard>
            </ZoomInView>
            <ZoomInView>
                <MultilayerCard className="relative overflow-hidden">
                    <div className="relative z-10 text-white h-full flex flex-col justify-between px-8 py-4">
                        <h1 className="text-3xl lg:text-2xl font-bold mb-2">Effectiveness</h1>
                        <p className="text-lg md:text-sm">Get things done; Achieve results</p>
                    </div>
                    <div className="absolute inset-0 bg-black/60 z-[1]" />
                    <Image
                        src="/assets/misc/effectiveness-min.png"
                        alt="Effectiveness"
                        fill
                        className="absolute inset-0 object-cover z-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </MultilayerCard>
            </ZoomInView>
            <ZoomInView>
                <MultilayerCard className="relative overflow-hidden">
                    <div className="relative z-10 text-white h-full flex flex-col justify-between px-8 py-4">
                        <h1 className="text-3xl lg:text-2xl font-bold mb-2">Integrity</h1>
                        <p className="text-lg md:text-sm">Be ethical; Be accountable</p>
                    </div>
                    <div className="absolute inset-0 bg-black/60 z-[1]" />
                    <Image
                        src="/assets/misc/integrity-min.png"
                        alt="Integrity"
                        fill
                        className="absolute inset-0 object-cover z-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </MultilayerCard>
            </ZoomInView>
        </section>
        <ContactFooter />
    </div>
}


