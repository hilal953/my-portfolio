"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Terminal, Sparkles, Orbit, Zap, Quote, Code2, BookOpen, Skull } from "lucide-react";
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
  <div className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-xl p-6 transition-all duration-500 hover:bg-white/[0.02] hover:border-white/20 hover:shadow-2xl hover:shadow-white/[0.02] hover:-translate-y-1 ${className}`}>
    {glow && (
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/5 blur-[80px] transition-all duration-500 group-hover:bg-white/10" />
    )}
    <div className="relative z-10 h-full flex flex-col">
      {children}
    </div>
  </div>
);

const quotes = [
  { quote: "Problems are inevitable; problems are soluble.", author: "David Deutsch" },
  { quote: "The only rules are the ones dictated by the laws of physics. Everything else is just a recommendation.", author: "Elon Musk" },
  { quote: "Show me the incentive and I'll show you the outcome.", author: "Charlie Munger" },
  { quote: "We have a duty to be optimistic. Because the future is open, not predetermined...", author: "David Deutsch" },
  { quote: "I want to put a dent in the universe.", author: "Steve Jobs" },
  { quote: "Seek wealth, not money or status. Wealth is having assets that earn while you sleep.", author: "Naval Ravikant" },
  { quote: "What important truth do very few people agree with you on?", author: "Peter Thiel" },
  { quote: "Competition is for losers.", author: "Peter Thiel" },
  { quote: "The best thing about the internet is that it lets small teams do big things.", author: "Marc Lou" }
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
    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 rounded-full border border-white/5 bg-black/40 backdrop-blur-2xl px-6 py-3 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
  >
    <a href="https://x.com/HilalSafwan_30" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </a>
    <a href="https://github.com/hilal953" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    </a>
    <a href="mailto:hilalmohamed100@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
      <Mail className="w-5 h-5" />
    </a>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-white/20 text-neutral-200 font-sans relative overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="bg-noise" />

      {/* Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="fixed bottom-[-20%] right-[-10%] h-[50vw] w-[50vw] rounded-full bg-amber-500/[0.02] blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '4s' }} />

      <FloatingDock />

      <main className="mx-auto max-w-5xl px-6 py-24 pb-48 relative z-10">
        
        {/* HERO SECTION */}
        <section className="mb-24 mt-12 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <FadeIn className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight animate-text-gradient bg-gradient-to-r from-neutral-100 via-neutral-500 to-neutral-100 bg-[length:200%_auto] bg-clip-text text-transparent">
              Hilal Safwan
            </h1>
            <p className="text-xl md:text-2xl font-medium text-neutral-400 mb-4 tracking-tight">
              Builder. Vibe Coder. Optimist. <br />
              <span className="animate-text-gradient bg-gradient-to-r from-neutral-400 via-neutral-600 to-neutral-400 bg-[length:200%_auto] bg-clip-text text-transparent">Sri Lanka → Internet.</span>
            </p>
            <p className="text-neutral-500 leading-relaxed max-w-lg">
              I don&apos;t just ship code; I build engines of leverage. I am obsessed with asymmetric bets. Most people play house on the internet, but I am building an empire in the dark, line by line.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="shrink-0">
            <div className="group relative h-32 w-32 md:h-40 md:w-40 rounded-full border border-white/10 p-2 backdrop-blur-sm bg-white/5 hover:scale-105 transition-transform duration-500">
              <Image
                src="/profile.jpg"
                alt="Hilal Safwan"
                width={160}
                height={160}
                className="rounded-full object-cover h-full w-full grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full border-4 border-dark-bg bg-green-500" title="Building" />
            </div>
          </FadeIn>
        </section>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(300px,auto)] gap-6">
          
          {/* LEVERAGE (Span 2 cols) */}
          <FadeIn delay={0.3} className="md:col-span-2 h-full">
            <a href="https://leverage-one.vercel.app" target="_blank" rel="noopener noreferrer" className="block h-full">
              <BentoCard glow className="h-full flex flex-col justify-between overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-2xl overflow-hidden border border-white/10 p-1 bg-white/5">
                    <Image src="/logoL.jpeg" alt="Leverage" width={64} height={64} className="rounded-xl h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> Live
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    Leverage <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-neutral-400">The holding company. I don&apos;t build features; I build assets. Absolute ownership. Zero permission asked.</p>
                </div>
              </BentoCard>
            </a>
          </FadeIn>

          {/* AURA READS */}
          <FadeIn delay={0.4} className="h-full">
            <a href="https://aurareads.xyz" target="_blank" rel="noopener noreferrer" className="block h-full">
              <BentoCard glow className="h-full flex flex-col justify-between group bg-gradient-to-br from-amber-500/5 to-transparent hover:from-amber-500/10 border-amber-500/10 hover:border-amber-500/30">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-amber-500/20 text-amber-500">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-500/80">Product</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    Aura Reads <ArrowUpRight className="w-4 h-4 text-amber-500/50 group-hover:text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    High-signal founder notes. We extract the marrow from the only books worth reading. Pure leverage.
                  </p>
                </div>
              </BentoCard>
            </a>
          </FadeIn>

          {/* PHILOSOPHY */}
          <FadeIn delay={0.5} className="md:col-span-1 h-full">
            <BentoCard className="h-full flex flex-col justify-between">
              <div className="p-3 rounded-xl bg-white/5 text-white w-fit mb-6">
                <Orbit className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Operating Thesis</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Obsession is the only strategy that compounds. Conjecture, error-correct, survive. I study the outliers who built the world to focus entirely on making things people actually want. If an idea doesn&apos;t hit the bone, I don&apos;t build it. When it does, I execute relentlessly.
                </p>
              </div>
            </BentoCard>
          </FadeIn>

          {/* DEV PROJECTS */}
          <FadeIn delay={0.6} className="md:col-span-2 h-full">
            <BentoCard className="h-full flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-white">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Engineering</h3>
              </div>
              
              <div className="space-y-4">
                <a href="https://carwash-app-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">Car Wash Management System</h4>
                    <p className="text-xs text-neutral-500 mt-1">Next.js, PostgreSQL, Prisma</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                </a>
                
                <a href="https://github.com/hilal953/weather-service" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">Real-time Weather Service</h4>
                    <p className="text-xs text-neutral-500 mt-1">Node.js, API, Backend</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </BentoCard>
          </FadeIn>

          {/* CURRENT LOOPS */}
          <FadeIn delay={0.7} className="md:col-span-3">
            <BentoCard className="flex flex-col md:flex-row gap-8 items-center h-full">
              <div className="shrink-0 text-center md:text-left md:w-1/3">
                <div className="inline-flex p-3 rounded-xl bg-white/5 text-white mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Current Loops</h3>
                <p className="text-neutral-500 mt-2">The mental models guiding my daily execution.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-white mb-1">Clarity is Violence</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">If you can&apos;t explain it simply, you don&apos;t understand it. Software is just frozen thought.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-white mb-1">Reality is the Judge</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">Tiny products force reality to answer quickly. Ship, bleed, adapt, repeat.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-white mb-1">Infinite Leverage</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">I don&apos;t use AI to outsource taste. I use it to multiply my output by 100x.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-white mb-1">Escape Velocity</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">Build something so undeniably valuable that strangers are forced to pay for it.</p>
                </div>
              </div>
            </BentoCard>
          </FadeIn>

          {/* THE GRAVEYARD */}
          <FadeIn delay={0.75} className="md:col-span-3">
            <BentoCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-white">
                  <Skull className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">The Graveyard</h3>
              </div>
              <p className="text-neutral-400 mb-6 text-sm">
                Nothing screams obsession like showing your scars. These are the failed bets that paid my tuition in reality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]">
                  <h4 className="text-base font-semibold text-neutral-500 mb-2 line-through">Futsal Booking App</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-3">Spent weeks writing code for a complex system before confirming if anyone actually wanted to use it.</p>
                  <p className="text-xs font-medium text-neutral-400"><span className="text-white font-semibold">The Scar:</span> Build what people already crave, not what you assume they need.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]">
                  <h4 className="text-base font-semibold text-neutral-500 mb-2 line-through">FlowTask</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-3">A productivity tool entering a market with 10,000 competitors and absolutely zero differentiation.</p>
                  <p className="text-xs font-medium text-neutral-400"><span className="text-white font-semibold">The Scar:</span> If your product can be cloned in a weekend, you have no moat.</p>
                </div>
              </div>
            </BentoCard>
          </FadeIn>

          {/* SKILLS */}
          <FadeIn delay={0.8} className="md:col-span-3">
            <BentoCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-white">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Weapons of Choice</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((category) => (
                  <div key={category.label}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      {category.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 transition-colors duration-200 hover:bg-white/10 hover:text-white">
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
          <FadeIn delay={0.9} className="md:col-span-3">
            <BentoCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-white">
                  <Quote className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Quotes to Build By</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {quotes.map((item, i) => (
                  <div key={i} className="flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.01] p-5 transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.02]">
                    <p className="text-sm italic leading-relaxed text-neutral-400">&quot;{item.quote}&quot;</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">— {item.author}</p>
                  </div>
                ))}
              </div>
            </BentoCard>
          </FadeIn>

          {/* IN THE TRENCHES / CHANGELOG */}
          <FadeIn delay={0.95} className="md:col-span-3">
            <BentoCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-white">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">In the Trenches</h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-neutral-500 mt-1 w-16 shrink-0">Today</span>
                  <div>
                    <p className="text-sm text-white font-medium">Portfolio Architecture</p>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Ripped out the old UI. Shipped new bento grid, global noise textures, and founder-mode copywriting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-neutral-500 mt-1 w-16 shrink-0">Recent</span>
                  <div>
                    <p className="text-sm text-white font-medium">Aura Reads V2</p>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Moved to custom domain aurareads.xyz. Upgraded the core reading experience for absolute focus.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-neutral-500 mt-1 w-16 shrink-0">Earlier</span>
                  <div>
                    <p className="text-sm text-white font-medium">Killed FlowTask</p>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">Shut down the servers. Wrote the post-mortem. Escaped a saturated market to focus on high-leverage bets.</p>
                  </div>
                </div>
              </div>
            </BentoCard>
          </FadeIn>

          {/* MY STORY */}
          <FadeIn delay={1.0} className="md:col-span-3">
            <BentoCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-white">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">My Story</h3>
              </div>
              <div className="text-neutral-400">
                <StoryToggle />
              </div>
            </BentoCard>
          </FadeIn>

        </div>

        {/* FOOTER & DIRECT CONTACT */}
        <FadeIn delay={1.1}>
          <div className="mt-32 border-t border-white/10 pt-16 pb-8">
            <div className="flex flex-col items-center justify-center text-center mb-20 px-4">
              <p className="text-white font-bold text-lg mb-3 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-neutral-400" />
                The Direct Contact Promise
              </p>
              <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                If you email me, you get me. I don&apos;t use virtual assistants or support desks. I do my own customer support, I write my own copy, and I ship my own code.
              </p>
            </div>
            <footer className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} Hilal Safwan. Designed, coded, and obsessed over in Founder Mode.
              </p>
              <div className="flex gap-6 text-sm text-neutral-500">
                <a href="https://x.com/HilalSafwan_30" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                <a href="https://github.com/hilal953" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/hilal-safwan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </footer>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
