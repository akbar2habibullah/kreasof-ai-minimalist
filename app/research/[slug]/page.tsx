import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getResearchPost } from "@/lib/mdx"
import { Button } from "@/components/ui/button"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from 'remark-gfm'

// Custom components for MDX
const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-blue-700 pl-4 italic my-4" {...props} />,
  code: (props: any) => {
    if (props.className?.includes("language-")) {
      return (
        <div className="bg-gray-200 rounded-lg p-4 my-4 overflow-x-auto">
          <pre className="text-sm" {...props} />
        </div>
      )
    }
    return <code className="bg-gray-100 rounded px-1 py-0.5 text-sm" {...props} />
  },
  table: (props: any) => (
    <div className="overflow-x-auto my-6 shadow rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-gray-50" {...props} />,
  tbody: (props: any) => <tbody className="bg-white divide-y divide-gray-200" {...props} />,
  tr: (props: any) => <tr {...props} />,
  th: (props: any) => <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />,
  td: (props: any) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" {...props} />,
}

export default async function ResearchPostPage({ params }: { params: { slug: string } }) {
  const post = await getResearchPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section with Integrated Navigation */}
      <section className="relative w-full overflow-hidden p-2 md:p-4">
        <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden rounded-lg md:rounded-xl">
          <div className="absolute inset-0 bg-black/50 z-10 rounded"></div>
          <Image
            src={post.image}
            alt="header"
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
            <div className="md:mx-auto px-4 md:px-6 my-4 md:my-12">
              <div className="max-w-4xl">
                <div className='text-xl text-white mb-4'>Research <span className='mx-4'>|</span> {post.date} </div>
                <h1 className="text-3xl md:text-6xl md:text-6xl font-bold text-white mb-4">
                  {post.title}
                </h1>
                <p className="md:w-[56rem] text-lg md:text-xl text-gray-200 mb-8">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Main Content */}
            <div className="w-full md:w-2/3 mx-auto">
              <MDXRemote
                source={post.content}
                components={components} 
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                  },
                }}/>
            </div>
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
