import { MoveLeft } from "lucide-react";
import AnimatedGradientText from "./animated-gradient-text";
import RotateBetween from "./rotate-between-words";

export default function HeroSection() {
    return (
        <div className="relative w-svw h-svh lg:h-[calc(100vh-90px)]">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute mt-[0px] top-0 left-0 w-full h-full object-cover -z-[1]"
            >
                <source
                    src="/assets/bgvideo.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-4">
                <h1 className="-mt-32 md:-mt-6 lg:mt-0 mb-12">
                    <RotateBetween 
                        words={["We Imagine", "We Innovate", "We Integrate", "We Implement"]} 
                        className="text-6xl font-bold text-center"
                    />
                </h1>
                <p className="animate-in zoom-in-0 duration-1000 text-lg text-muted md:text-xl lg:text-2xl text-center max-w-3xl mb-8">
                    We Innovate breakthrough products and commercially successful businesses that transform industries and have a positive impact in human life.
                </p>
                <button className="animate-in slide-in-from-bottom duration-1000 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                        <MoveLeft className="size-6 inline me-3" /> Get Started
                    </span>
                </button>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            data: "Hello"
        }
    }
}
