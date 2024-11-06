
import ProductGrid from "@/components/custom/product-grid";
import ProductPageHero from "@/components/custom/product-page-hero";

// For SEO
export const metadata = {
    title: 'Our Products | Sunce Renewable',
    description: 'Discover our premium collection of products. Modern solutions for modern needs.',
};

export default function ProductsPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-background">
                {/* Gradient orbs */}
                <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 blur-[100px]" />
                <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-primary/10 to-blue-500/10 blur-[100px]" />
                
                {/* Dot pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#10101012_1px,transparent_1px),linear-gradient(to_bottom,#10101012_1px,transparent_1px)] bg-[size:24px_24px]" />
                
            </div>

            <div className="relative">
                {/* Hero Section */}
                <div className="relative px-6 py-24 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <ProductPageHero />
                    </div>
                </div>

                {/* Products Grid */}
                <div className="relative z-10">
                    <ProductGrid />
                </div>
            </div>
        </div>
    );
}
