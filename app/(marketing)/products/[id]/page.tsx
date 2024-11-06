import { Metadata } from 'next'
import { products } from '@/public/product-data'
import { notFound } from 'next/navigation'
import ProductHero from '@/components/products/product-hero'
import ProductFeatures from '@/components/products/product-features'
import ProductSpecifications from '@/components/products/product-specifications'

type Props = {
    params: { id: string }
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const product = products.find(p => p.id === parseInt(params.id))
    if (!product) return { title: 'Product Not Found' }

    return {
        title: `${product.name} | Sunce Renewable`,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [{ url: product.image }],
        },
    }
}

export default function ProductPage({ params }: Props) {
    const product = products.find(p => p.id === parseInt(params.id))
    if (!product) notFound()

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 blur-[100px]" />
                <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-primary/30 to-blue-500/30 blur-[100px]" />
            </div>

            <div className="relative z-10">
                <ProductHero product={product} />

                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2">
                        {product.features.length > 0 && (
                            <ProductFeatures features={product.features} />
                        )}

                        {product.specifications.length > 0 && (
                            <ProductSpecifications specifications={product.specifications} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
