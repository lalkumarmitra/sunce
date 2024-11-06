import { Metadata } from 'next'
import GridPattern from '@/components/animated-grid-bg'
import InverterServiceContent from './components/InverterServiceContent'

export const metadata: Metadata = {
    title: 'Professional Inverter Servicing & Maintenance | SolarCraft Solutions',
    description: 'Expert solar inverter maintenance and repair services. Our certified technicians ensure optimal performance of string, central, and microinverters with professional servicing.',
    openGraph: {
        title: 'Professional Inverter Servicing & Maintenance | SolarCraft Solutions',
        description: 'Expert solar inverter maintenance and repair services. Our certified technicians ensure optimal performance of string, central, and microinverters with professional servicing.',
        type: 'website',
        images: ['/assets/misc/inverter-servicing.png'],
    },
}

export default function InverterServicing() {
    return (
        <div className="relative flex justify-between min-h-screen overflow-hidden bg-gradient-to-b from-background/10 to-background">
            {/* Animated background */}
            <GridPattern
                className="fixed inset-0 -z-10 opacity-20 dark:opacity-30"
                width={32}
                height={32}
                strokeDasharray={2}
                numSquares={35}
                maxOpacity={0.3}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 -z-10" />

            {/* Content */}
            <InverterServiceContent />
        </div>
    )
}
