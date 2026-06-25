"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import StoryToggle from "@/components/StoryToggle";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const quotes = [
  { quote: "Problems are inevitable; problems are soluble.", author: "David Deutsch" },
  { quote: "Seek wealth, not money or status. Wealth is having assets that earn while you sleep.", author: "Naval Ravikant" },
  { quote: "Competition is for losers.", author: "Peter Thiel" },
  { quote: "I want to put a dent in the universe.", author: "Steve Jobs" },
  { quote: "The only rules are the ones dictated by the laws of physics. Everything else is just a recommendation.", author: "Elon Musk" },
  { quote: "Show me the incentive and I'll show you the outcome.", author: "Charlie Munger" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-[#f5f2eb]">
      {/* Noise Overlay */}
      <div className="bg-noise opacity-50" />

      {/* Floating Header / Dock */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-[#f5f2eb]/80 border-b border-black/5"
      >
        <span className="font-bold tracking-tight text-lg">H.S.</span>
        <div className="flex items-center gap-6 text-sm font-semibold">
          <a href="https://x.com/HilalSafwan_30" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors">Twitter</a>
          <a href="https://github.com/hilal953" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors">GitHub</a>
          <a href="mailto:hilalmohamed100@gmail.com" className="text-neutral-500 hover:text-black transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </motion.header>

      <main className="mx-auto max-w-3xl px-6 pt-40 pb-32 relative z-10">
        
        {/* HERO SECTION */}
        <section className="mb-32">
          <FadeIn>
            <div className="flex items-center gap-6 mb-10">
              <Image
                src="/profile.jpg"
                alt="Hilal Safwan"
                width={80}
                height={80}
                className="rounded-full grayscale border border-black/10"
                priority
              />
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Hilal Safwan</h1>
                <p className="text-neutral-500 font-medium">Sri Lanka → Internet</p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed tracking-tight">
              I don&apos;t just ship code; I build engines of leverage. I am obsessed with asymmetric bets. Most people play house on the internet, but I am building an empire in the dark, line by line.
            </p>
          </FadeIn>
        </section>

        {/* WORK / PROJECTS */}
        <section className="mb-32">
          <FadeIn delay={0.1}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8 pb-4 border-b border-black/5">Work</h2>
            
            <div className="flex flex-col gap-12">
              {/* Leverage */}
              <a href="https://leverage-one.vercel.app" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold flex items-center gap-2 group-hover:text-neutral-600 transition-colors">
                    Leverage <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-xs font-semibold text-green-600 bg-green-500/10 px-2 py-1 rounded-full uppercase tracking-wider">Live</span>
                </div>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  This is the holding company where I build high-leverage internet products. I will be launching many bets here, and one of them will be a highly scalable, hard-to-vary product.
                </p>
              </a>

              {/* Aura Reads */}
              <a href="https://aurareads.xyz" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold flex items-center gap-2 group-hover:text-neutral-600 transition-colors">
                    Aura Reads <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Product</span>
                </div>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  High-signal summaries of the best books for founders and builders.
                </p>
              </a>

              {/* Engineering */}
              <div>
                <h3 className="text-xl font-bold mb-4 mt-4">Engineering</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://carwash-app-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-lg text-neutral-600 hover:text-black transition-colors">
                      <span className="font-medium underline decoration-black/20 underline-offset-4 group-hover:decoration-black">Car Wash System</span>
                      <span className="text-sm text-neutral-400">Next.js, PostgreSQL</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/hilal953/weather-service" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-lg text-neutral-600 hover:text-black transition-colors">
                      <span className="font-medium underline decoration-black/20 underline-offset-4 group-hover:decoration-black">Weather Service API</span>
                      <span className="text-sm text-neutral-400">Node.js</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SKILLS */}
        <section className="mb-32">
          <FadeIn delay={0.2}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8 pb-4 border-b border-black/5">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="font-bold mb-3">Execution</p>
                <ul className="text-neutral-600 space-y-2 text-sm font-medium">
                  <li>Rapid Prototyping</li>
                  <li>Systems Design</li>
                  <li>Go-To-Market</li>
                  <li>AI Automation</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-3">Leverage</p>
                <ul className="text-neutral-600 space-y-2 text-sm font-medium">
                  <li>Full-Stack Arch</li>
                  <li>Next.js / React</li>
                  <li>PostgreSQL</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-3">Obsessions</p>
                <ul className="text-neutral-600 space-y-2 text-sm font-medium">
                  <li>Digital Products</li>
                  <li>SaaS</li>
                  <li>Asymmetric Bets</li>
                  <li>AI Agents</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* QUOTES TO BUILD BY */}
        <section className="mb-32">
          <FadeIn delay={0.3}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-10 pb-4 border-b border-black/5">Quotes to Build By</h2>
            <div className="flex flex-col gap-10">
              {quotes.map((item, i) => (
                <div key={i} className="pl-6 border-l-[3px] border-black/10">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-tight text-neutral-800 mb-3">
                    &quot;{item.quote}&quot;
                  </p>
                  <p className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                    — {item.author}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* MY STORY */}
        <section className="mb-24">
          <FadeIn delay={0.4}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8 pb-4 border-b border-black/5">My Story</h2>
            <StoryToggle />
          </FadeIn>
        </section>

        {/* FOOTER */}
        <FadeIn delay={0.5}>
          <footer className="mt-32 border-t border-black/5 pt-12 text-sm font-medium text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Hilal Safwan. Designed, coded, and obsessed over in Founder Mode.</p>
            <a href="#" className="hover:text-black transition-colors" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Back to top ↑
            </a>
          </footer>
        </FadeIn>

      </main>
    </div>
  );
}
