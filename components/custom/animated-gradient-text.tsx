import { cn } from "@/lib/utils";

export default function AnimatedGradientText({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
      <span 
        className={
            cn(`inline-flex 
                animate-text-gradient 
                bg-gradient-to-r from-white via-blue-400 to-white bg-[200%_auto] 
                bg-clip-text 
                text-3xl 
                text-center text-transparent font-medium 
                transition-colors 
                duration-[3s] ease-in-out`, 
            className)
        }
    >
        {children}
      </span>
    );
}
