import Navbar from "@/components/custom/navbar";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ChevronRight, MoveLeft } from "lucide-react";
import Image from "next/image";
export default function Home() {
	return (
		<>
{/* bg-image-[url('https://suncerenewable.com/wp-content/uploads/2023/10/hero-bg-min.jpg')] */}
			<Navbar />
			<BackgroundLines className="flex items-center justify-center " >
				<Image 
					width={1000} 
					height={2000} 
					className="absolute top-20 left-0 w-full h-[calc(100vh-5rem)] object-cover -z-[1]" 
					src={`https://suncerenewable.com/wp-content/uploads/2023/10/hero-bg-min.jpg`} 
					alt="hero-bg" 
				/>
				<div className="flex gap-8 flex-col items-center text-center px-8 max-w-3xl ">
					<h1 className="text-4xl font-bold">
						We <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 ">Imagine, </span>
						We <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 ">Innovate, </span> 
						We <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 ">Integrate, </span> 
						We <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 ">Implement</span>
					</h1>
					<p className="text-lg">We Innovate breakthrough products and commercially successful businesses that transform industries and have a positive impact in human life.</p>
					<button className="p-[3px] relative w-fit">
						<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
						<div className="px-8 py-2  bg-background rounded-full  relative group transition duration-200 text-foreground hover:text-white hover:bg-transparent">
							<MoveLeft className="w-4 h-4 inline" /> <span className="inline">Get Started</span>
						</div>
					</button>
				</div>
			</BackgroundLines>
		</>
	);
}
