import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-[#2f2f2f]">
            <span className="text-xl font-semibold">Bella Imagine</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#655b52] hover:text-[#2f2f2f]">
              Home
            </Link>
            <Link href="/about" className="text-[#655b52] hover:text-[#2f2f2f]">
              About
            </Link>
            <Link href="/vendors" className="text-[#655b52] hover:text-[#2f2f2f]">
              Vendors
            </Link>
            <Link href="/contact" className="text-[#655b52] hover:text-[#2f2f2f]">
              Contact
            </Link>
            <Button variant="default" className="bg-[#2f2f2f] text-white hover:bg-[#655b52]">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designs.png-p2ovNA2Msxwkrnq4U9mu0QiCzb8DBe.jpeg"
          alt="Wedding couple on mountain"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-sm uppercase tracking-wider mb-4">Discover the Beauty of Bella Imagine</p>
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Timeless Moments</h1>
          <p className="max-w-2xl text-lg mb-8">
            Bella Imagine is a premier wedding photography studio dedicated to capturing the essence of your special day
          </p>
          <Button className="bg-[#2f2f2f] text-white hover:bg-[#655b52]">Book Your Session</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Wedding ceremony setup"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <span className="text-[#655b52] text-sm uppercase tracking-wider">About Bella Imagine</span>
            <h2 className="text-4xl font-semibold text-[#2f2f2f]">A Passion for Capturing Your Love Story</h2>
            <p className="text-[#655b52] leading-relaxed">
              At Bella Imagine, we believe that every wedding is a unique and special celebration, and our mission is to
              help you preserve those cherished moments in the most beautiful and artistic way possible
            </p>
            <Button variant="outline" className="border-[#2f2f2f] text-[#2f2f2f] hover:bg-[#2f2f2f] hover:text-white">
              Join us
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 bg-[#cdc4bc]/10">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-[#2f2f2f]">Why Choose Bella Imagine?</h2>
            <p className="text-sm uppercase tracking-wider text-[#655b52]">
              Empowering Photographers, Connecting Clients
            </p>
            <p className="text-[#655b52] leading-relaxed">
              Bella Imagine helps photographers connect with clients, manage bookings, and get paid securely—all with
              just a 2% commission. Focus on your craft while we handle the rest!
            </p>
            <Button className="bg-[#2f2f2f] text-white hover:bg-[#655b52]">Join as photographer</Button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Romantic beach scene"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2f2f2f] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-white">
                  Home
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white">
                  About
                </Link>
                <Link href="/vendors" className="block text-gray-300 hover:text-white">
                  Vendors
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <Link href="/faqs" className="block text-gray-300 hover:text-white">
                  FAQs
                </Link>
                <Link href="/blog" className="block text-gray-300 hover:text-white">
                  Blog
                </Link>
                <Link href="/testimonials" className="block text-gray-300 hover:text-white">
                  Testimonials
                </Link>
                <Link href="/gallery" className="block text-gray-300 hover:text-white">
                  Gallery
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-300 hover:text-white">
                  Instagram
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white">
                  Facebook
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white">
                  Twitter
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-white">
                  Pinterest
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
            <p>© 2023 Bella Imagine, Inc.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

