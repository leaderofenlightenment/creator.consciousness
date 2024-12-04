import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Logo } from "@/components/ui/logo"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF1493]">
        <Link className="flex items-center justify-center" href="#">
          <Logo className="h-6 w-6 text-black" />
          <span className="ml-2 text-lg font-bold text-black">Creator Consciousness</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-black" href="#features">
            features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-black" href="#pricing">
            pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leaderofenlightenment__db7d1f46-7bf3-426f-917d-c51f4cda79f8-Ei1L15gjXzgn79Oi7tHT0Zak4vvPAl.png"
            alt="Cosmic structure"
            fill
            className="object-cover absolute inset-0 z-0 blur-2xl"
          />
          <div className="absolute inset-0 bg-black/80 z-10" />
          <div className="container px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  <span className="gradient-text">sculpt your imagination into reality</span> with a 2-hour mindfulness practice
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-zinc-200">
                  learn how to channel your creative problem-solving skills into marketing material to monetize your wisdom
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-zinc-800/50 text-white border-zinc-700" placeholder="Enter your email" type="email" />
                  <RainbowButton type="submit">
                    get started
                  </RainbowButton>
                </form>
                <p className="text-xs text-zinc-400">subscribe to become the creator of your life, business, and reality for free</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900/50 backdrop-blur-xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    visionary <span className="gradient-text">skills</span> for impacting the world
                  </h2>
                  <p className="max-w-[600px] text-zinc-200 md:text-xl">
                    master the art of creative consciousness and transform your reality through our comprehensive suite of skills and techniques.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leaderofenlightenment__5712dbf5-06c9-4791-ae01-e81e25d5e4e4-uAtEHhCMO8DnmJZUmAb9Vgy7x9oXUe.png"
                  alt="Cosmic consciousness visualization"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl" />
              </div>
            </div>

            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <NeonGradientCard glowColor="from-teal-500 via-cyan-300 to-blue-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">multi-dimensional branding</h3>
                  <p className="text-zinc-400">create a powerful, authentic brand that resonates across multiple platforms and dimensions of consciousness.</p>
                </div>
              </NeonGradientCard>
              
              <NeonGradientCard glowColor="from-purple-500 via-pink-500 to-red-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">unity-based marketing</h3>
                  <p className="text-zinc-400">connect with your audience through shared values and universal consciousness principles.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-blue-500 via-cyan-300 to-teal-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">quantum business growth</h3>
                  <p className="text-zinc-400">accelerate your business growth using quantum principles and consciousness-based strategies.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-teal-500 via-cyan-300 to-blue-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">emotional intelligence mastery</h3>
                  <p className="text-zinc-400">develop advanced emotional awareness and regulation for peak performance.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-purple-500 via-pink-500 to-red-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">digital consciousness integration</h3>
                  <p className="text-zinc-400">blend spiritual awareness with digital expertise for holistic success.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-blue-500 via-cyan-300 to-teal-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">quantum wealth creation</h3>
                  <p className="text-zinc-400">master the art of conscious wealth generation and abundance manifestation.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-teal-500 via-cyan-300 to-blue-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">ai-enhanced creativity</h3>
                  <p className="text-zinc-400">harness ai tools to amplify your creative potential and productivity.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-purple-500 via-pink-500 to-red-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">consciousness expansion</h3>
                  <p className="text-zinc-400">access higher states of awareness for enhanced problem-solving and creativity.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-blue-500 via-cyan-300 to-teal-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">energy optimization</h3>
                  <p className="text-zinc-400">master techniques for maintaining peak energy and vitality in all areas of life.</p>
                </div>
              </NeonGradientCard>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900/50 backdrop-blur-xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />
          <div className="container px-4 md:px-6 relative">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              transform your <span className="gradient-text">life</span> today
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <NeonGradientCard glowColor="from-teal-500 via-cyan-300 to-blue-500">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4">ebook/audiobook</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                      comprehensive guide
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                      audio version included
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                      lifetime access
                    </li>
                  </ul>
                  <p className="text-3xl font-bold mb-6">$10</p>
                  <RainbowButton>get started</RainbowButton>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-purple-500 via-pink-500 to-red-500">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4">online course</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                      interactive modules
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                      practical exercises
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                      community access
                    </li>
                  </ul>
                  <p className="text-3xl font-bold mb-6">$100</p>
                  <RainbowButton>enroll now</RainbowButton>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-blue-500 via-cyan-300 to-teal-500">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4">personal 3-month program</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                      1-on-1 coaching
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                      customized plan
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                      weekly check-ins
                    </li>
                  </ul>
                  <p className="text-3xl font-bold mb-6">$1000</p>
                  <RainbowButton>apply now</RainbowButton>
                </div>
              </NeonGradientCard>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leaderofenlightenment__1b84e96f-6545-46a9-9dbb-bfc5bf8ee7b5-EU9u23IIyudeIuXceRZKIADSVsaWla.png"
            alt="Cosmic consciousness"
            fill
            className="object-cover absolute inset-0 z-0 blur-2xl"
          />
          <div className="absolute inset-0 bg-black/80 z-10" />
          <div className="container px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ready to <span className="gradient-text">sculpt</span> your reality?
                </h2>
                <p className="mx-auto max-w-[600px] text-zinc-200 md:text-xl">
                  join us on this transformative journey and unlock your full potential.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-zinc-800/50 text-white border-zinc-700" placeholder="Enter your email" type="email" />
                  <RainbowButton type="submit">
                    get started
                  </RainbowButton>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-zinc-700">
        <p className="text-xs text-zinc-400">© 2023 creator consciousness. all rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-zinc-400" href="#">
            terms of service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-zinc-400" href="#">
            privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

