"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactBanner from "./contact-banner";
import { SidebarTrigger } from "../ui/sidebar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";


const Navbar = () => {
    return (
        <header className="sticky left-0 right-0 top-0 h-auto gap-4 border-b bg-background z-20">
            <div className="hidden md:grid gap-0">
                <ContactBanner />
                <HorizontalNavigation />
            </div>
            <div className="md:hidden">
                <MobileNavigation />
            </div>
        </header>
    )
}

export default Navbar;

const MobileNavigation = () => {
    return (
        <div className="flex justify-between items-center w-full gap-6 text-sm font-semibold px-8 py-2 h-auto">
            <Link href={'/'} className="w-12 overflow-hidden">
                <Image
                    src={'/logo.png'}
                    width={64}
                    height={64}
                    className={`w-full aspect-square object-contain dark:invert`}
                    alt={'sunce logo'}
                />
            </Link>
            <SidebarTrigger className="size-12" />
        </div>
    )
}

const HorizontalNavigation = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    return (
        <nav className="flex justify-between items-center w-full gap-6 lg:gap-8 text-sm font-semibold px-24 py-2 h-auto">
            <Link href={'/'} className="w-12 overflow-hidden">
                <Image
                    src={'/logo.png'}
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
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <span className={`cursor-pointer transition-colors hover:text-foreground whitespace-nowrap 
                            ${(isActive('/company') || isActive('/company/management') || isActive('/company/careers')) ? 'text-foreground' : 'text-muted-foreground/70'}`
                        }>
                            Company <ChevronDown className="size-4 inline ms-[2px]" />
                        </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Link href={'/company'}>About Us</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={'/company/management'}>Management</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={'/company/careers'}>Careers</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Link
                    href={'/products'}
                    className={` transition-colors hover:text-foreground whitespace-nowrap ${isActive('/products') ? 'text-foreground' : 'text-muted-foreground/70'}`}
                >
                    Products
                </Link>
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <span className={`cursor-pointer transition-colors hover:text-foreground whitespace-nowrap 
                            ${(isActive('/services') || isActive('/services/inverter-servicing')) ? 'text-foreground' : 'text-muted-foreground/70'}`
                        }>
                            Our Services <ChevronDown className="size-4 inline ms-[2px]" />
                        </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Link href={'/services/inverter-servicing'}>Inverter servicing</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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
