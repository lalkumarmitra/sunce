'use client'

import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarContent, useSidebar } from "./ui/sidebar";
import { Building, Home, Tractor, Handshake, Newspaper, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useEffect } from "react";

const AppSidebar = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    const { setOpen, setOpenMobile } = useSidebar();
    
    // Close sidebar when pathname changes
    useEffect(() => {
        setOpen(false);
        setOpenMobile(false);
    }, [pathname, setOpen, setOpenMobile]);
    return (
        <Sidebar className="block lg:hidden">
            <SidebarHeader className="p-4 flex flex-row items-center justify-center gap-4">
                <Image
                    src={'https://suncerenewable.com/wp-content/uploads/2023/11/Sunce-Logo-60x63.png'}
                    width={48}
                    height={48}
                    className={` aspect-square object-contain dark:invert`}
                    alt={'sunce logo'}
                />
                <span className="text-lg text-muted-foreground font-semibold">Sunce Renewables</span>
            </SidebarHeader>
            <SidebarContent className="mt-8 px-8">
                <SidebarMenu className="grid gap-8 font-semibold">
                    <SidebarMenuItem >
                        <Link href="/" className={`${isActive('/') ? 'text-foreground' : 'text-muted-foreground/70'}`}> <Home className="size-6 inline me-4 " /> Home</Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <span
                                    className={`${(isActive('/company') || isActive('/company/management') || isActive('/company/careers'))
                                        ? 'text-foreground' : 'text-muted-foreground/70'}`
                                    }
                                > <Building className="size-6 inline me-4 " /> Company <ChevronDown className="size-4 inline ms-[2px]" /> </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full">
                                <DropdownMenuItem>
                                    <Link className={`${isActive('/company') ? 'text-foreground' : 'text-muted-foreground/70'}`} href={'/company'}>About Us</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className={`${isActive('/company/management') ? 'text-foreground' : 'text-muted-foreground/70'}`} href={'/company/management'}>Management</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className={`${isActive('/company/careers') ? 'text-foreground' : 'text-muted-foreground/70'}`} href={'/company/careers'}>Careers</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/products" className={`${isActive('/products') ? 'text-foreground' : 'text-muted-foreground/70'}`}> <Tractor className="size-6 inline me-4 " /> Products</Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <span
                                    className={`${(isActive('/services') || isActive('/services/inverter-servicing'))
                                        ? 'text-foreground' : 'text-muted-foreground/70'}`
                                    }
                                > <Handshake className="size-6 inline me-4 " /> Our Services <ChevronDown className="size-4 inline ms-[2px]" /> </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link className={`${isActive('/services/inverter-servicing') ? 'text-foreground' : 'text-muted-foreground/70'}`} href={'/services/inverter-servicing'}>Inverter servicing</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/news" className={`${isActive('/news') ? 'text-foreground' : 'text-muted-foreground/70'}`}> <Newspaper className="size-6 inline me-4 " /> News & Articles</Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/contact" className={`${isActive('/contact') ? 'text-foreground' : 'text-muted-foreground/70'}`}> <Mail className="size-6 inline me-4 " /> Contact Us</Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>

    )
}

export default AppSidebar;
