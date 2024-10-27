
import { Counter } from "@/components/Counter";
import HeroSection from "@/components/custom/hero-section";
import OurClientInfinite from "@/components/custom/our-client-infinite";



export default function Home() {
	return (
		<>
			<HeroSection />
			<section className="flex items-center justify-center h-svh">
				<h1 className="text-4xl font-bold">Hello</h1>
			</section>
			<Counter />
			<OurClientInfinite />
		</>
	);
}


