import { Counter } from "@/components/Counter";
import HeroSection from "@/components/custom/hero-section";
import OurClientInfinite from "@/components/custom/our-client-infinite";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ZoomInView from "@/components/ui/zoom-in-view";
import { ArrowRightIcon, AwardIcon, CheckIcon } from "lucide-react";
import Image from "next/image";
import ProductShowcase from "@/components/custom/product-showcase";
import Link from "next/link";




export default function Home() {
	return (
		<>
			<HeroSection />
			<section className="lg:text-center pt-28 pb-16 px-4 lg:px-16 bg-gray-200">
				<div className="container lg:max-w-4xl grid gap-8 mx-auto">
					<ZoomInView >
						<div className="grid gap-8">
							<h3 className="text-2xl text-indigo-800 font-semibold">
								Sunce provides innovative product and service solutions for human life and the Industries.
							</h3>
						<p className="text-muted-foreground">
							One of Sunce&apos;s competitive advantages is our persistent commitment to innovation and technology. We are industry leader in providing innovative, value-add products and services. To achieve this, we have a team of brightest people, gathered deep market insights and developed a full spectrum of commercialization capability to help us build the future.
							</p>
						</div>
					</ZoomInView>
				</div>
			</section>
			<section className="lg:px-16 px-6 pb-20">
				<h3 className="text-center my-8 lg:my-20 text-3xl font-semibold text-indigo-800">About Us</h3>
				<div className="container grid lg:grid-flow-col gap-16 mx-auto">
					<div className="grid gap-3">
						<ZoomInView>
							<h4 className="text-xl font-semibold text-indigo-800">Find Out More About Us</h4>
							<p className="text-sm max-w-4xl text-muted-foreground">
								Sunce was formed in 2016 by three experienced technocrats who knew there was a better way to develop products and grow businesses. Our approach involves a &apos;market-pull&apos; orientation rather than &apos;technology-push&apos;. By gathering deep market insight before building the technology solutions, we ensure there is both a customer and a market willingness to embrace the products and businesses we develop.
								Our strong commercial mindset is a key aspect of Sunce&apos;s approach to build products and build businesses. It all starts with associating entrepreneurial thinkers who possess both technical expertise and business acumen.
								We have selected over 350 of the brightest people, gathered deep market insights and developed a full spectrum of commercialization capabilities to help us build the future.
							</p>
						</ZoomInView>
						<ZoomInView>
							<h4 className="text-xl font-semibold text-indigo-800">Our origins taught us the value of market insight</h4>
							<p className="text-sm max-w-4xl text-muted-foreground">
								Sunce Renewables was formed in 2009 by four globally experienced biomedical executives who knew there was a better way to develop products and grow businesses. Our approach involves a &apos;market-pull&apos; orientation rather than &apos;technology-push&apos;. By gathering deep market insight before building the technology solutions, we ensure there is both a customer and a market willingness to embrace the products and businesses we develop.
								</p>
						</ZoomInView>
						<ZoomInView>
							<h4 className="text-xl font-semibold text-indigo-800">We are commercial thinkers</h4>
							<p className="text-sm max-w-4xl text-muted-foreground">
								Our strong commercial mindset is a key aspect of Sunce Renewables&apos; approach to building products and building businesses, and it all starts with hiring entrepreneurial thinkers who possess both technical expertise and commercial acumen.
							</p>
						</ZoomInView>
						<div className="flex justify-between items-center">
							<h5 className="flex items-center text-indigo-800"><AwardIcon className="w-6 h-6 inline me-2" />Certified Company</h5>
							<Button variant="outline">
								<Link href="/about">
									Read More 
									<ArrowRightIcon className="w-4 h-4 inline ms-2" />
								</Link>
							</Button>
						</div>
					</div>
					<ZoomInView>
						<Card className="p-2">
							<Image 
							src="/assets/misc/inverter_repair_service.png"
							alt="Sunce Team" 
							width={1000} 
							height={1000}
							className="w-auto aspect-square object-cover"
							/>
						</Card>
					</ZoomInView>
				</div>
			</section>
			
			<ProductShowcase />	
			<Counter />
			<OurClientInfinite />
			<section className="lg:px-16 px-6 pb-20">
				<h3 className="text-center my-8 lg:my-12 text-3xl font-semibold text-indigo-800 capitalize">SOLAR INVERTER REPAIR SERVICE</h3>
				<div className="container grid md:grid-flow-col gap-16 mx-auto ">
					<div className="grid gap-3">
						<ZoomInView>
							<h4 className="text-base font-semibold text-indigo-800 capitalize">WE DO ALL MAKE & OUT OF WARRANTY</h4>
						</ZoomInView>
						<ZoomInView>
							<p className="text-muted-foreground text-sm mt-4">
								<b>WHY CHOOSE US : </b>
								Masterful inverter repairs for all brands, ensuring peak performance and longevity. Customized solutions, prompt support, and unwavering quality assurance.
							</p>
						</ZoomInView>
						<ZoomInView className="grid gap-4">
							<b>Package Include: </b>
							<ul className="list-none">
								<li><CheckIcon className="size-5 text-green-500	 inline me-2" /> All kind of string Inverter</li>
								<li><CheckIcon className="size-5 text-green-500 inline me-2" /> Central Inverter</li>
								<li><CheckIcon className="size-5 text-green-500 inline me-2" /> SCADA System</li>
								<li><CheckIcon className="size-5 text-green-500 inline me-2" /> Expert Guidance</li>
							</ul>
							<Button className="w-fit" variant="outline">Know More <ArrowRightIcon className="w-4 h-4 inline ms-2" /></Button>
						</ZoomInView>
					</div>
					<ZoomInView>
						<Card className="p-2">
							<Image 
							src="/assets/misc/inv-rep-min.png"
							alt="Sunce Team" 
							width={1000} 
							height={1000}
							className="md:w-80 w-full md:aspect-square object-cover"
							/>
						</Card>
					</ZoomInView>
				</div>
			</section>
		</>
	);
}



