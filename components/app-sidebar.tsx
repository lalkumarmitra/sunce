import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarContent } from "./ui/sidebar";
import { Building, Home, Tractor, Handshake, Newspaper, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const AppSidebar = () => {
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
                    <SidebarMenuItem>
                        <Link href="/"> <Home className="size-6 inline me-4 " /> Home</Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/company"> <Building  className="size-6 inline me-4 " /> Company</Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/products"> <Tractor className="size-6 inline me-4 " /> Products</Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/services"> <Handshake className="size-6 inline me-4 " /> Our Services</Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/news"> <Newspaper className="size-6 inline me-4 " /> News & Articles</Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/contact"> <Mail className="size-6 inline me-4 " /> Contact Us</Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>

    )
}

export default AppSidebar;

export const getStaticProps = async () => {
    return {
        props: {
            data: 'data'
        }
    }
}   