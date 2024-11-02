import { cn } from "@/lib/utils"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"



//======================================
export const SimpleCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const Ellipses = () => {
        const sharedClasses =
            "rounded-full outline outline-8 dark:outline-gray-950 sm:my-6 md:my-8 size-1 my-4 outline-gray-50 bg-green-400"
        return (
            <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
                <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
                    <div className={`${sharedClasses} -mx-[2.5px]`}></div>
                    <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
                    <div className={`${sharedClasses} -mx-[2.5px]`}></div>
                    <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
                </section>
            </div>
        )
    }
    const Container = ({ children }: { children: React.ReactNode }) => (
        <div className="relative mx-auto w-full rounded-lg border border-dashed border-zinc-300 px-4 dark:border-zinc-800 sm:px-6 md:px-8">
            <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:top-6 md:top-8"></div>
            <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:bottom-6 md:bottom-8"></div>
            <div className="relative w-full border-x border-zinc-400 dark:border-zinc-700">
                <Ellipses />
                <div className="relative z-20 mx-auto py-8">{children}</div>
            </div>
        </div>
    )
    return (
        <Card className="relative">
            <CardContent className="p-0">
                <Container>
                    <div className={cn("min-h-[200px] w-full", className)}>
                        {children}
                    </div>
                </Container>
            </CardContent>
        </Card>
    )
}






export const MultilayerCard = ({
    children,
    className
}: { children: React.ReactNode, className?: string }) => {
    return (
        <div className="py-8">
            <div className="relative mx-auto h-48 sm:h-36">
                <div
                    className="dark:bg-zinc-900 bg-zinc-100 absolute size-full rounded-3xl border border-neutral-200 dark:border-zinc-800 scale-y-[1.15] scale-x-90 -top-4"
                    style={{
                        transformOrigin: "top center",
                    }}
                ></div>
                <div
                    className={cn("absolute dark:bg-zinc-950 bg-white size-full rounded-3xl p-2 md:p-4 shadow-[0px_0px_16px_#D4D4D8] border border-neutral-200 dark:border-zinc-800 center dark:shadow-[0px_0px_64px_rgba(39,39,42,0.6)]", className)}
                    style={{
                        transformOrigin: "top center",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}