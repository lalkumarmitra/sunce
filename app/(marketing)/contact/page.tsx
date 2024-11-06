import { Metadata } from 'next'
import ContactForm from '@/components/contact/contact-form'
import ContactInfo from '@/components/contact/contact-info'
import Map from '@/components/contact/map'
import Particles from '@/components/particle-bg'

export const metadata: Metadata = {
    title: 'Contact Us | Sunce Renewable',
    description: 'Get in touch with Sunce Renewable. Visit our office in Noida or reach out through phone, email, or our contact form.',
    openGraph: {
        title: 'Contact Us | Sunce Renewable',
        description: 'Get in touch with Sunce Renewable. Visit our office in Noida or reach out through phone, email, or our contact form.',
        type: 'website',
    },
}

export default function ContactPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Particle Background */}
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
                staticity={50}
                ease={50}
                color="#94a3b8"
            />

            {/* Content Container */}
            <div className="relative">
                {/* Hero Section */}
                <div className="relative px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/20 backdrop-blur-[2px]" />
                    </div>

                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-indigo-800">
                            Contact Us
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            We'd love to hear from you. Get in touch with us.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Contact Form Section */}
                        <div className="backdrop-blur-sm bg-background/30 border border-border/50 rounded-2xl p-6 lg:p-8">
                            <ContactForm />
                        </div>

                        {/* Contact Info & Map Section */}
                        <div className="space-y-8">
                            <div className="backdrop-blur-sm bg-background/30 border border-border/50 rounded-2xl p-6 lg:p-8">
                                <ContactInfo />
                            </div>

                            <div className="backdrop-blur-sm bg-background/30 border border-border/50 rounded-2xl p-6 lg:p-8 aspect-square lg:aspect-auto lg:h-[400px]">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
