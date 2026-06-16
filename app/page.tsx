import Image from "next/image";
import StoryToggle from "@/components/StoryToggle";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import ScrollToTop from "@/components/ScrollToTop";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="my-12 border-[#e0dcd4]" />;
}

function SkillPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-divider bg-white/40 px-3 py-1 text-xs font-medium text-secondary transition-colors duration-200 hover:border-primary/30 hover:text-primary">
      {children}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Shipped: "text-green-600 border-green-600/30 bg-green-50",
    "In Progress": "text-amber-600 border-amber-600/30 bg-amber-50",
    Live: "text-green-600 border-green-600/30 bg-green-50",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
        colors[status] || "text-gray-500 border-gray-300 bg-gray-50"
      }`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

const principles = [
  {
    number: "01",
    text: "Ship over theorize. A deployed product teaches more than a perfect plan.",
  },
  {
    number: "02",
    text: "Optimism is a strategy. Pessimism narrows the solution space.",
  },
  {
    number: "03",
    text: "One good idea, compounded, is enough.",
  },
  {
    number: "04",
    text: "Money is oxygen, you don't think about it every second, but you still breathe.",
  },
];

const quotes = [
  {
    quote: "Problems are inevitable; problems are soluble.",
    author: "David Deutsch",
  },
  {
    quote:
      "The only rules are the ones dictated by the laws of physics. Everything else is just a recommendation.",
    author: "Elon Musk",
  },
  {
    quote: "Show me the incentive and I'll show you the outcome.",
    author: "Charlie Munger",
  },
  {
    quote:
      "We have a duty to be optimistic. Because the future is open, not predetermined and therefore cannot just be accepted: we are all responsible for what it holds.",
    author: "David Deutsch",
  },
  {
    quote: "I want to put a dent in the universe.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Seek wealth, not money or status. Wealth is having assets that earn while you sleep.",
    author: "Naval Ravikant",
  },
  {
    quote: "What important truth do very few people agree with you on?",
    author: "Peter Thiel",
  },
  {
    quote: "Competition is for losers.",
    author: "Peter Thiel",
  },
  {
    quote:
      "The best thing about the internet is that it lets small teams do big things.",
    author: "Marc Lou",
  },
];

const projects = [
  {
    number: "01",
    tag: "Dev",
    status: "Shipped",
    title: "Car Wash Management System",
    description:
      "A full-stack booking and management app for a car wash business. Built with Next.js, PostgreSQL, Prisma.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    href: "https://carwash-app-tau.vercel.app/",
    githubHref: "https://github.com/hilal953/carwash-app",
  },
  {
    number: "02",
    tag: "Dev",
    status: "Shipped",
    title: "Weather App",
    description:
      "Real-time weather application. Clean UI, location-based data.",
    stack: ["Node.js", "API", "Backend"],
    href: undefined,
    githubHref: "https://github.com/hilal953/weather-service",
  },
];

const currentLoops = [
  {
    title: "Explanation-first building",
    text: "I try to understand why an idea should work before I polish it. A good product should feel like a clear explanation turned into software.",
  },
  {
    title: "Small bets, real feedback",
    text: "I am drawn to tiny internet products because they make reality answer quickly. Ship, observe, correct, repeat.",
  },
  {
    title: "AI as leverage",
    text: "I use AI to move faster, but not to outsource taste. The goal is still to build something useful, sharp, and hard to ignore.",
  },
  {
    title: "Freedom through usefulness",
    text: "The dream is simple: build something valuable enough that strangers choose to pay for it, and earn freedom honestly through that value.",
  },
];

const skillCategories = [
  {
    label: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    label: "Tools & Stack",
    skills: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    label: "Interests",
    skills: ["Zcash", "Crypto", "Digital Products", "SaaS", "AI Agents", "MCP"],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <ScrollToTop />

      {/* HERO */}
      <ScrollFadeIn>
        <section className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tight md:text-7xl">
              Hilal Safwan.
              <span className="animate-pulse">▍</span>
            </h1>
            <p className="mt-6 text-lg font-semibold text-primary md:text-xl">
              Builder. Vibe coder. Optimist.
              <br />
              Sri Lanka → Internet.
            </p>
            <p className="mt-4 text-sm text-secondary">
              I ship things on the internet and believe one of them will work.
            </p>
          </div>
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-divider bg-white/20 p-1 shadow-sm sm:h-28 sm:w-28">
            <Image
              src="/profile.jpg"
              alt="Hilal Safwan"
              width={112}
              height={112}
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </section>
      </ScrollFadeIn>

      <Divider />

      {/* ABOUT */}
      <ScrollFadeIn>
        <section>
          <SectionEyebrow>About</SectionEyebrow>
          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              Hi. I&apos;m Hilal from Sri Lanka. I build software products and
              put them on the internet.
            </p>
            <p>
              My operating thesis: one of my random ideas will work, as a
              digital product, a SaaS, or whatever form the internet rewards. I
              am irrationally optimistic about this, and I think that&apos;s a
              feature, not a bug.
            </p>
            <p>
              My thinking is shaped by David Deutsch&apos;s conjecture-and-criticism
              framework, Nassim Taleb&apos;s antifragility, and the indie hacker
              ethos of people like Pieter Levels and Marc Lou. I don&apos;t seek
              credentials. I seek working things.
            </p>
            <p>
              I&apos;m curious about technology, artificial intelligence, wealth
              creation, Zcash, and how ideas compound over time.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      <Divider />

      {/* SKILLS */}
      <ScrollFadeIn>
        <section>
          <SectionEyebrow>Skills</SectionEyebrow>
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <div key={category.label}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillPill key={skill}>{skill}</SkillPill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <Divider />

      {/* PHILOSOPHY */}
      <ScrollFadeIn>
        <section>
          <SectionEyebrow>Philosophy</SectionEyebrow>
          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              My approach is simple: conjecture, build, ship, learn,
              error-correct, and make progress.
            </p>
            <p>
              I believe good ideas are hard to vary. If I can&apos;t clearly
              explain why something will work, I shouldn&apos;t build it. But once I
              can, I move fast.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            {principles.map((principle, i) => (
              <ScrollFadeIn key={principle.number} delay={i * 80}>
                <div className="flex gap-4">
                  <span className="shrink-0 text-sm text-secondary">
                    {principle.number}
                  </span>
                  <p className="text-base leading-relaxed text-gray-700">
                    {principle.text}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <Divider />

      {/* CURRENT LOOPS */}
      <ScrollFadeIn>
        <section>
          <SectionEyebrow>Current Loops</SectionEyebrow>
          <div className="space-y-6">
            {currentLoops.map((item, i) => (
              <ScrollFadeIn key={item.title} delay={i * 60}>
                <div>
                  <p className="text-base font-bold text-primary">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">
                    {item.text}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <Divider />

      {/* QUOTES */}
      <ScrollFadeIn>
        <section>
          <SectionEyebrow>Quotes to Build By</SectionEyebrow>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quotes.map((item, i) => (
              <ScrollFadeIn key={item.quote} delay={i * 50}>
                <div className="flex h-full flex-col justify-between rounded-lg border border-divider bg-white/30 p-4 transition-colors duration-200 hover:border-primary/20">
                  <p className="text-sm italic leading-relaxed text-gray-700">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-secondary">
                    — {item.author}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <Divider />

      {/* PROJECTS */}
      <ScrollFadeIn>
        <section>
          <SectionEyebrow>Projects</SectionEyebrow>
          <div className="space-y-4">
            {projects.map((project, i) => (
              <ScrollFadeIn key={project.number} delay={i * 100}>
                <div className="group rounded-lg border border-divider bg-white/30 p-5 transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-secondary">
                      {project.number} · {project.tag}
                    </p>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="mt-2 text-base font-bold text-primary">
                    {project.title}
                  </p>
                  <p className="mt-1 text-sm text-secondary">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-primary transition-opacity hover:opacity-70"
                      >
                        → Visit [↗]
                      </a>
                    )}
                    <a
                      href={project.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-secondary transition-opacity hover:opacity-70"
                    >
                      GitHub [↗]
                    </a>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </section>
      </ScrollFadeIn>

      <Divider />

      {/* MY STORY */}
      <ScrollFadeIn>
        <section>
          <SectionEyebrow>My Story</SectionEyebrow>
          <StoryToggle />
        </section>
      </ScrollFadeIn>

      <Divider />

      {/* CONNECT */}
      <ScrollFadeIn>
        <section>
          <SectionEyebrow>Connect</SectionEyebrow>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold text-primary">
            <a
              href="mailto:hilalmohamed100@gmail.com"
              className="transition-opacity hover:opacity-70"
            >
              Email [↗]
            </a>
            <a
              href="https://x.com/HilalSafwan_30"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              Twitter / X [↗]
            </a>
            <a
              href="https://github.com/hilal953"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              GitHub [↗]
            </a>
            <a
              href="https://www.facebook.com/share/1cixwy1To5/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              Facebook [↗]
            </a>
          </div>
          <p className="mt-8 text-sm text-secondary">
            Inputs I keep returning to: The Beginning of Infinity · Nassim Taleb
            · Naval Ravikant · Peter Thiel · Marc Lou · David Senra · Zcash · AI agents · small internet products
          </p>
          <p className="mt-12 text-sm text-secondary">
            © 2026 Hilal Safwan. Still building. Still believing.
          </p>
        </section>
      </ScrollFadeIn>
    </main>
  );
}
