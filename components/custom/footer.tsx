import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-indigo-950 text-white">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<Image
							src={'/logo.png'}
							width={60}
							height={63}
							className="invert"
							alt={'Sunce logo'}
						/>
						<p className="text-sm">
							Sunce, was formed in 2016 by Three experienced Technocrats who knew there was a better way to develop products and grow businesses.
						</p>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{["Home", "About", "Terms & Conditions", "Privacy policy", "Contact"].map((item) => (
								<li key={item}>
									<Link href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-sm hover:underline">
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Our Service</h3>
						<ul className="space-y-2">
							{["Management", "Careers", "Products", "Our Services", "News & articles", "Brochure"].map((item) => (
								<li key={item}>
									<Link href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-sm hover:underline">
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Contact Us</h3>
						<address className="not-italic text-sm space-y-2">
							<p>Address: B-203, Sector 63A, Noida (U.P.) 201307</p>
							<p>Phone: +91-9540263987, +91-9354299513</p>
							<p>Email: info@suncerenewable.com, ajeet.mishra@suncerenewable.com</p>
						</address>
						<div className="flex space-x-4 mt-4">
							<Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></Link>
							<Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></Link>
							<Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></Link>
							<Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></Link>
						</div>
					</div>
				</div>
			</div>
			<Separator className="bg-primary/20" />
			<div className="bg-gray-900">
				<div className="container mx-auto px-4 py-4 text-sm flex flex-col md:flex-row justify-between items-center">
					<p>&copy; 2024 Sunce Renewable</p>
					<p>Powered By Sunce Renewable</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
