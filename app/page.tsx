"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Terminal, Sparkles, Quote, Code2, BookOpen } from "lucide-react";
import StoryToggle from "@/components/StoryToggle";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, type: "spring", stiffness: 100, damping: 20 }}
    className={className}
  >
    {children}
  </motion.div>
);

const BentoCard = ({ children, className = "", glow = false }: { children: React.ReactNode; className?: string; glow?: boolean }) => (
  <div className={`group relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-6 transition-all duration-500 hover:bg-white/80 hover:border-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 ${className}`}>
    {glow && (
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/40 blur-[60px] transition-all duration-500 group-hover:bg-white/60" />
    )}
    <div className="relative z-10 h-full flex flex-col">
      {children}
    </div>
  </div>
);

const quotes = [
  { quote: "Problems are inevitable; problems are soluble.", author: "David Deutsch" },
  { quote: "Seek wealth, not money or status. Wealth is having assets that earn while you sleep.", author: "Naval Ravikant" },
  { quote: "Competition is for losers.", author: "Peter Thiel" },
  { quote: "I want to put a dent in the universe.", author: "Steve Jobs" },
  { quote: "The only rules are the ones dictated by the laws of physics. Everything else is just a recommendation.", author: "Elon Musk" },
  { quote: "Show me the incentive and I'll show you the outcome.", author: "Charlie Munger" }
];

const skillCategories = [
  { label: "Execution", skills: ["Rapid Prototyping", "Systems Design", "Go-To-Market", "AI Automation"] },
  { label: "Leverage", skills: ["Full-Stack Architecture", "Next.js", "React", "PostgreSQL", "Tailwind CSS"] },
  { label: "Obsessions", skills: ["Digital Products", "SaaS", "Asymmetric Bets", "AI Agents", "Crypto"] },
];

const FloatingDock = () => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 rounded-full border border-black/5 bg-white/70 backdrop-blur-2xl px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
  >
    <a href="https://x.com/HilalSafwan_30" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-colors">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </a>
    <a href="https://github.com/hilal953" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-colors">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    </a>
    <a href="mailto:hilalmohamed100@gmail.com" className="text-neutral-500 hover:text-primary transition-colors">
      <Mail className="w-5 h-5" />
    </a>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-cream selection:bg-primary selection:text-white text-primary font-sans relative overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="bg-noise" />

      {/* Background Glows (Soft) */}
      <div className="fixed top-[0%] left-[-10%] h-[60vw] w-[60vw] rounded-full bg-white/40 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="fixed bottom-[-10%] right-[-10%] h-[60vw] w-[60vw] rounded-full bg-amber-100/40 blur-[140px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '4s' }} />

      <FloatingDock />

      <main className="mx-auto max-w-5xl px-6 py-24 pb-48 relative z-10">
        
        {/* HERO SECTION */}
        <section className="mb-24 mt-12 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <FadeIn className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight text-primary">
              Hilal Safwan
            </h1>
            <p className="text-xl md:text-2xl font-medium text-neutral-600 mb-4 tracking-tight">
              Builder. Vibe Coder. Optimist. <br />
              <span className="text-neutral-500">Sri Lanka → Internet.</span>
            </p>
            <p className="text-neutral-600 leading-relaxed max-w-lg text-lg font-medium">
              I don&apos;t just ship code; I build engines of leverage. I am obsessed with asymmetric bets. Most people play house on the internet, but I am building an empire in the dark, line by line.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="shrink-0">
            <div className="group relative h-32 w-32 md:h-40 md:w-40 rounded-full border border-white/50 p-2 backdrop-blur-sm bg-white/40 shadow-xl shadow-black/5 hover:scale-105 transition-all duration-500">
              <Image
                src="/profile.jpg"
                alt="Hilal Safwan"
                width={160}
                height={160}
                className="rounded-full object-cover h-full w-full grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute bottom-0 right-2 h-6 w-6 rounded-full border-4 border-cream bg-green-500" title="Building" />
            </div>
          </FadeIn>
        </section>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(300px,auto)] gap-6">
          
          {/* LEVERAGE (Span 2 cols) */}
          <FadeIn delay={0.3} className="md:col-span-2 h-full">
            <a href="https://leverage-one.vercel.app" target="_blank" rel="noopener noreferrer" className="block h-full">
              <BentoCard glow className="h-full flex flex-col justify-between overflow-hidden group">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-2xl overflow-hidden border border-black/5 p-1 bg-white shadow-sm">
                    <Image src="/logoL.jpeg" alt="Leverage" width={64} height={64} className="rounded-xl h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs font-medium text-green-600 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" /> Live
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2 flex items-center gap-2">
                    Leverage <ArrowUpRight className="w-6 h-6 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-neutral-600 text-lg font-medium">This is the holding company where I build high-leverage internet products. I will be launching many bets here, and one of them will be a highly scalable, hard-to-vary product.</p>
                </div>
              </BentoCard>
            </a>
          </FadeIn>

          {/* AURA READS */}
          <FadeIn delay={0.4} className="h-full">
            <a href="https://aurareads.xyz" target="_blank" rel="noopener noreferrer" className="block h-full">
              <BentoCard glow className="h-full flex flex-col justify-between group !bg-amber-500/5 hover:!bg-amber-500/10 border-amber-500/10 hover:border-amber-500/20">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-amber-50 text-amber-600 shadow-sm">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-600/80">Product</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
                    Aura Reads <ArrowUpRight className="w-5 h-5 text-amber-500/50 group-hover:text-amber-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-base text-neutral-600 font-medium leading-relaxed">
                    High-signal summaries of the best books for founders and builders.
                  </p>
                </div>
              </BentoCard>
            </a>
          </FadeIn>

          {/* DEV PROJECTS */}
          <FadeIn delay={0.5} className="md:col-span-3 h-full">
            <BentoCard className="h-full flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white shadow-sm text-primary border border-black/5">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Engineering</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="https://carwash-app-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-center p-6 rounded-2xl bg-white/50 border border-black/5 hover:bg-white hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-primary group-hover:text-blue-600 transition-colors text-lg">Car Wash System</h4>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-sm font-medium text-neutral-500">Next.js, PostgreSQL, Prisma</p>
                </a>
                
                <a href="https://github.com/hilal953/weather-service" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-center p-6 rounded-2xl bg-white/50 border border-black/5 hover:bg-white hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-primary group-hover:text-blue-600 transition-colors text-lg">Weather Service API</h4>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-sm font-medium text-neutral-500">Node.js, Backend Architecture</p>
                </a>
              </div>
            </BentoCard>
          </FadeIn>

          {/* SKILLS */}
          <FadeIn delay={0.6} className="md:col-span-3">
            <BentoCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white shadow-sm text-primary border border-black/5">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Skills</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((category) => (
                  <div key={category.label}>
                    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-neutral-400">
                      {category.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="inline-block rounded-full border border-black/5 bg-white/80 px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </FadeIn>

          {/* QUOTES */}
          <FadeIn delay={0.7} className="md:col-span-3">
            <BentoCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white shadow-sm text-primary border border-black/5">
                  <Quote className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Quotes to Build By</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {quotes.map((item, i) => (
                  <div key={i} className="flex flex-col justify-between rounded-2xl border border-black/5 bg-white/50 p-6 shadow-sm transition-all duration-300 hover:border-white hover:bg-white hover:shadow-md">
                    <p className="text-base font-medium italic leading-relaxed text-neutral-700">&quot;{item.quote}&quot;</p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-neutral-500">— {item.author}</p>
                  </div>
                ))}
              </div>
            </BentoCard>
          </FadeIn>

          {/* MY STORY */}
          <FadeIn delay={0.8} className="md:col-span-3">
            <BentoCard>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-white shadow-sm text-primary border border-black/5">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">My Story</h3>
              </div>
              <div className="text-neutral-700">
                <StoryToggle />
              </div>
            </BentoCard>
          </FadeIn>

        </div>

        {/* FOOTER */}
        <FadeIn delay={0.9}>
          <div className="mt-32 border-t border-black/5 pt-12 pb-8">
            <footer className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-neutral-500 text-sm font-medium">
                © {new Date().getFullYear()} Hilal Safwan. Designed, coded, and obsessed over in Founder Mode.
              </p>
              <div className="flex gap-6 text-sm font-semibold text-neutral-500">
                <a href="https://x.com/HilalSafwan_30" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a>
                <a href="https://github.com/hilal953" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/hilal-safwan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              </div>
            </footer>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
