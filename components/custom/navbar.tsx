"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactBanner from "./contact-banner";

const Navbar = () => {
    return (
        <header className="absolute left-0 right-0 top-0 h-auto gap-4 border-b bg-background z-10">
            <ContactBanner />
            <HorizontalNavigation />
        </header>
    )
}

export default Navbar;

const HorizontalNavigation = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    return (
        <nav className="hidden md:flex justify-between items-center w-full gap-6 lg:gap-8 text-sm font-semibold px-24 py-2 h-auto">
            <Link href={'/'} className="w-12 overflow-hidden">
                <Image
                    src={'https://suncerenewable.com/wp-content/uploads/2023/11/Sunce-Logo-60x63.png'}
                    width={64}
                    height={64}
                    className={`w-full aspect-square object-contain dark:invert`}
                    alt={'sunce logo'}
                />
            </Link>
            <div className="flex gap-6 lg:gap-8">
                <Link
                    href={'/'}
                    className={` transition-colors hover:text-foreground whitespace-nowrap ${isActive('/') ? 'text-foreground' : 'text-muted-foreground/70'}`}
                >
                    Home
                </Link>
                <Link
                    href={'/company'}
                    className={` transition-colors hover:text-foreground whitespace-nowrap ${isActive('/company') ? 'text-foreground' : 'text-muted-foreground/70'}`}
                >
                    Company
                </Link>
                <Link
                    href={'/products'}
                    className={` transition-colors hover:text-foreground whitespace-nowrap ${isActive('/products') ? 'text-foreground' : 'text-muted-foreground/70'}`}
                >
                    Products
                </Link>
                <Link
                    href={'/services'}
                    className={` transition-colors hover:text-foreground whitespace-nowrap ${isActive('/services') ? 'text-foreground' : 'text-muted-foreground/70'}`}
                >
                    Our Services
                </Link>
                <Link
                    href={'/news'}
                    className={` transition-colors hover:text-foreground whitespace-nowrap ${isActive('/news') ? 'text-foreground' : 'text-muted-foreground/70'}`}
                >
                    News & Articles
                </Link>
                <Link
                    href={'/contact'}
                    className={` transition-colors hover:text-foreground whitespace-nowrap ${isActive('/contact') ? 'text-foreground' : 'text-muted-foreground/70'}`}
                >
                    Contact Us
                </Link>
            </div>
        </nav>
    )
}
