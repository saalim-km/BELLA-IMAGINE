import Image from "next/image"
import Link from "next/link"
import { Bell, Bookmark } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PhotographyPortfolio() {
  const tags = Array(12).fill("guests")

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2 font-semibold text-[#655b52]">
              <Image
                src="/placeholder.svg?height=32&width=32"
                width={32}
                height={32}
                alt="Bella Imagine Logo"
                className="w-8 h-8"
              />
              Bella Imagine
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-[#655b52] hover:text-[#333333]">
                Home
              </Link>
              <Link href="/photographers" className="text-[#7a767c] hover:text-[#333333]">
                Photographers
              </Link>
              <Link href="/photos" className="text-[#7a767c] hover:text-[#333333]">
                Photos
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-[#7a767c]" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-[#ef4444] text-white p-0">
                2
              </Badge>
            </Button>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5 text-[#7a767c]" />
            </Button>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designs-EiU0wP9apd3D1dJqzAu6UqDMXymItb.png"
                  alt="User"
                />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <div className="text-sm font-medium">Salim K M</div>
                <div className="text-xs text-[#7a767c]">Client</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`${i === 3 || i === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt={`Photography ${i + 1}`}
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-[#655b52]">
            And thousands more of splendid{" "}
            <Link href="/photos" className="text-[#157efb] hover:underline">
              photos
            </Link>{" "}
            by topics:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-[#e5e7eb] hover:bg-[#cdc4bc] text-[#655b52]">
              #frozen
            </Badge>
            <Badge variant="secondary" className="bg-[#e5e7eb] hover:bg-[#cdc4bc] text-[#655b52]">
              #detail
            </Badge>
            <Badge variant="secondary" className="bg-[#e5e7eb] hover:bg-[#cdc4bc] text-[#655b52]">
              #eyelash
            </Badge>
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-[#e5e7eb] hover:bg-[#cdc4bc] text-[#655b52]">
                #{tag}
              </Badge>
            ))}
          </div>
          <p className="text-[#7a767c] text-sm">Search by tags</p>
        </div>
      </main>
    </div>
  )
}

