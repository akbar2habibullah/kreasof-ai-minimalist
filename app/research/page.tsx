import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// In a real implementation, this would come from a file system or CMS
const posts = [
  {
    slug: "early-self-perturbation-learning",
    title: "Early Study: Self-Perturbation Learning for Verifying Mathematical Reasoning",
    excerpt:
      "Imagine \"2 truth and a lie\", but formalized as ML training objective",
    date: "April 20, 2025",
    author: "Habibullah Akbar, Muhammad Hazim",
  },
]

export default function ResearchPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header with Navigation */}
      <section className="relative w-full overflow-hidden p-2 md:p-4">
        <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:rounded-xl">
          <div className="absolute inset-0 bg-black/50 z-10 rounded"></div>
          <Image
            src="/images/header.webp"
            alt="AI server room"
            fill
            className="object-cover rounded"
            priority
          />

          {/* Navigation integrated in hero */}
          <div className="absolute top-0 left-0 right-0 z-30 p-4 md:px-16">
            <div className="flex items-center justify-between md:h-20">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <div className="w-8 h-8 md:h-12 md:w-12 mr-2"><Image src='/images/logo-white.webp' width={100} height={100} alt='logo' /></div>
                  <span className="text-2xl md:text-3xl font-bold text-white">Kreasof AI</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/research" className="text-gray-200 hover:text-white">
                  Research
                </Link>
                <Link href="#" className="text-gray-200 hover:text-white">
                  Education
                </Link>
                <Link href="https://www.youtube.com/@KreasofAI" className="text-gray-200 hover:text-white">
                  Publications
                </Link>
                <Link href='https://www.linkedin.com/company/kreasof-ai'>
                  <Button variant="outline" className="border-white text-black hover:bg-white hover:text-black">
                    Join the Lab
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero content */}
          <div className="absolute inset-0 z-20 flex items-end">
            <div className="md:mx-10 px-4 md:px-6 my-4 md:my-12">
              <div className="max-w-4xl">
                <h1 className="text-3xl md:text-6xl md:text-6xl font-bold text-white">
                  Our Research Project
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Posts Grid */}
      <section className="py-4 min-h-[50vh]">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <Link href={`/research/${post.slug}`} key={post.slug} className="group">
                <div className="rounded bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md h-full flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors">{post.title}</h2>
                    <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center mt-auto">
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 mx-8 border-t border-black/20 mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-12 w-12 mr-2"><Image src='/images/logo.webp' width={100} height={100} alt='logo' /></div>
              <span className="text-xl md:text-3xl font-bold">Kreasof AI</span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Kreasof AI. <span className='hidden md:block'>All rights reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
