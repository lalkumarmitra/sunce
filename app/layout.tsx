

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sunce Renewable - Inverter Repair & Maintenance",
  description: "Sunce Renewable is a company that provides inverter repair and maintenance services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body  className={`${geistSans.variable} ${geistMono.variable} antialiased w-svw h-svh overflow-x-hidden`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider className="block md:hidden">
              <AppSidebar />
              <Navbar />
              {children}
            </SidebarProvider>
            <SidebarProvider className="hidden md:block">
              <Navbar />
              {children}
            </SidebarProvider>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
