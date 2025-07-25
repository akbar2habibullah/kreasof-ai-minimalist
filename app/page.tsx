import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Microscope } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section with Integrated Navigation */}
      <section className="relative w-full overflow-hidden p-2 md:p-4">
        <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden rounded-lg md:rounded-xl">
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
                <Link href="https://youtube.com/playlist?list=PLoPQ0k17skZAqDdHGvLriauJxcMTcTW2n&si=aWnWI4x_F7QEFA8C" className="text-gray-200 hover:text-white">
                  Education
                </Link>
                <Link href="https://www.youtube.com/@KreasofAI" className="text-gray-200 hover:text-white">
                  Media
                </Link>
                <Link href='https://www.linkedin.com/company/kreasof-ai'>
                  <Button variant="outline" className="border-white text-black hover:bg-white hover:text-black">
                    Join the Lab
                  </Button>
                </Link>
              </div>
              <div className='md:hidden'>
                <Link href='/research'>
                  <div className="text-white hover:text-blue-400">
                    <Microscope/>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero content */}
          <div className="absolute inset-0 z-20 flex items-end">
            <div className="md:mx-10 px-4 md:px-6 my-4 md:my-12">
              <div className="max-w-4xl">
                <h1 className="text-3xl md:text-6xl md:text-6xl font-bold text-white mb-4">
                  Pioneering Ethical and Culturally-Aware AGI
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  We develop Artificial General Intelligence that empowers all of humanity, with a focus on aligning AI
                  with human values and making it explainable. Based in Indonesia, serving humanity.
                </p>
                <Link href='https://github.com/kreasof-ai/universal-benefit-license'>
                  <Button className="bg-white text-black hover:bg-gray-200 hover:text-black">
                    Learn about our mission
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Research Areas Section */}
      <section className="py-4">
        <div className="mx-auto px-2 md:px-4">
          <div className="rounded-xl p-4 md:p-8">
            <h2 className="text-3xl font-bold mb-12 text-left">Core Research Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-[#f3f4f6] rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">AI Alignment</h3>
                <p>
                  Developing novel techniques to ensure AGI systems are aligned with human values, intentions, and
                  ethical principles, with insights from Indonesian and Asian ethical philosophies.
                </p>
              </div>
              <div className="p-8 bg-[#f3f4f6] rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Explainable AI (XAI)</h3>
                <p>
                  Creating methods for making AI decision-making transparent, understandable, and interpretable to
                  humans, particularly in culturally sensitive contexts.
                </p>
              </div>
              <div className="p-8 bg-[#f3f4f6] rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Culturally-Aware AI</h3>
                <p>
                  Building AI systems that are sensitive to and respect diverse cultural contexts, starting with
                  Indonesian and Asian values, to ensure AI benefits are universally accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-4">
        <div className="mx-auto px-4 md:px-6 text-center">
          <div className="rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-12">Strategic Partnerships</h2>
            <div className="flex flex-wrap justify-center gap-12 mb-12">
              <div className="w-64 h-20 flex items-center justify-center">
                <Image src="/images/nvidia-logo.png" width="200" height="100" alt="NVIDIA" />
              </div>
              <div className="w-64 h-20 flex items-center justify-center">
                <Image src="/images/gcp-logo.png" width="200" height="100" alt="GCP" />
              </div>
              <div className="w-64 h-20 flex items-center justify-center bg-black/75 rounded p-2">
                <Image src="/images/modal-logo.png" width="200" height="100" alt="MODAL" />
              </div>
              <div className="w-64 h-20 flex items-center justify-center">
                <Image src="/images/binus-logo.png" width="200" height="100" alt="BINUS" />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Call to Action */}
      <section className="py-4">
        <div className="mx-auto px-2 md:px-4 text-center">
          <div className="relative rounded-lg md:rounded-xl overflow-hidden shadow-sm">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/70 z-10"></div>
              <Image src="/images/join.webp" alt="AI research collaboration" fill className="object-cover" />
            </div>

            {/* Content */}
            <div className="container relative z-20 py-16 p-4 md:p-16 text-white gap-8 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className='text-left'>
                <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
                <p className="md:text-lg max-w-3xl">
                  We invite philanthropic organizations, governments, research institutions, and individuals who share our
                  vision to partner with Kreasof AI in ensuring that the transformative power of artificial intelligence
                  is harnessed for the betterment of all humankind.
                </p>
              </div>
              <Link href='mailto:habibullah.akbar@kreasof.my.id'>
                <Button className="bg-white text-blue-700 hover:bg-gray-100">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8">
        <div className="mx-auto px-4 md:px-6 text-center">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
            <p className="text-lg mb-12">
              Interested in what we do? Contact our founder at{" "}
              <a href="mailto:habibullah.akbar@kreasof.my.id" className="text-blue-500 hover:underline">
                habibullah.akbar@kreasof.my.id
              </a>
              , or reach to us on our socials:
            </p>
            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 justify-center my-16">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"><Image src='/images/habib.jpeg' className='rounded-full' width={100} height={100} alt='logo-habib' /></div>
                <p className="font-medium">Habibullah Akbar</p>
                <p className="text-gray-600">Founder</p>
                <div className="flex justify-center mt-2">
                  <Link href="https://www.linkedin.com/in/habibullah-akbar-631880179/" className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                  <Link href="#" className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"><Image src='/images/ramdan.jpeg' className='rounded-full' width={100} height={100} alt='logo-ramdan' /></div>
                <p className="font-medium">Muhammad Ramdan</p>
                <p className="text-gray-600">Engineer</p>
                <div className="flex justify-center mt-2">
                  <Link href="https://www.linkedin.com/in/dadanisme/" className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                  <Link href="#" className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"><Image src='/images/hazim.jpeg' className='rounded-full' width={100} height={100} alt='logo-hazim' /></div>
                <p className="font-medium">Muhammad Hazim</p>
                <p className="text-gray-600">Researcher</p>
                <div className="flex justify-center mt-2">
                  <Link href="https://www.linkedin.com/in/muhammad-hazim-al-farouq/" className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                  <Link href="#" className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"><Image src='/images/joanito.jpeg' className='rounded-full' width={100} height={100} alt='logo-joanito' /></div>
                <p className="font-medium">Joanito Agili</p>
                <p className="text-gray-600">Researcher</p>
                <div className="flex justify-center mt-2">
                  <Link href="https://www.linkedin.com/in/joanito-agili-lopo-72629b1b2/" className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                  <Link href="#" className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
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
