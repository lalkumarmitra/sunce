import ZoomInView from "@/components/ui/zoom-in-view";
import GridPattern from "../animated-grid-bg";

const ContactFooter: React.FC = () => {
    return (
        <ZoomInView className="relative">
            <div className="grid gap-4 px-4 max-w-3xl mx-auto py-12">
                <h1 className="text-center text-3xl font-bold text-indigo-800">
                    Lets chat about the right fit solutions
                </h1>
                <p className="text-center text-base text-primary font-semibold">
                    If there&apos;s one thing we love, it&apos;s talking to clients about their toughest challenges. Book a free 30-minute discovery meeting to see which solution would work best for you.
                </p>
                <button className={`
                    w-fit 
                    mx-auto inline-flex h-12 
                    animate-shimmer items-center justify-center rounded-md 
                    border border-slate-500 dark:border-slate-800 
                    bg-[linear-gradient(110deg,#fff,45%,#f1f1f1,55%,#fff)] 
                    dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                    bg-[length:200%_100%] px-6 font-medium text-slate-600 dark:text-slate-400 
                    transition-colors focus:outline-none focus-visible:ring-2 focus:ring-slate-700 
                    focus:ring-offset-2 focus:ring-offset-slate-400 dark:focus:ring-slate-300
                `}>
                    Contact Us
                </button>
            </div>
            <GridPattern maxOpacity={0.2} className="absolute inset-0 -z-10" />
        </ZoomInView>
    )
}

export default ContactFooter;