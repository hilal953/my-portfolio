import StoryToggle from "@/components/StoryToggle";

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
    quote: "Seek wealth, not money or status. Wealth is having assets that earn while you sleep.",
    author: "Naval Ravikant",
  },
];

const projects = [
  {
    number: "01",
    tag: "Dev",
    title: "Car Wash Management System",
    description:
      "A full-stack booking and management app for a car wash business. Built with Next.js, PostgreSQL, Prisma.",
    href: "https://github.com/hilal953/carwash-app",
  },
  {
    number: "02",
    tag: "Dev",
    title: "Weather App",
    description:
      "Real-time weather application. Clean UI, location-based data.",
    href: "https://github.com/hilal953/weather-service",
  },
];

const currentLoops = [
  {
    title: "Explanation-first building",
    text:
      "I try to understand why an idea should work before I polish it. A good product should feel like a clear explanation turned into software.",
  },
  {
    title: "Small bets, real feedback",
    text:
      "I am drawn to tiny internet products because they make reality answer quickly. Ship, observe, correct, repeat.",
  },
  {
    title: "AI as leverage",
    text:
      "I use AI to move faster, but not to outsource taste. The goal is still to build something useful, sharp, and hard to ignore.",
  },
  {
    title: "Freedom through usefulness",
    text:
      "The dream is simple: build something valuable enough that strangers choose to pay for it, and earn freedom honestly through that value.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      {/* HERO */}
      <section>
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
      </section>

      <Divider />

      {/* ABOUT */}
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

      <Divider />

      {/* SKILLS */}
      <section>
        <SectionEyebrow>Skills</SectionEyebrow>
        <div className="space-y-4 text-sm text-secondary">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Programming Languages
            </p>
            <p>JavaScript · TypeScript · Python · Java</p>
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Tools & Stack
            </p>
            <p>Next.js · React · Node.js · PostgreSQL · Prisma · Tailwind CSS</p>
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Interests
            </p>
            <p>
              Zcash · Crypto · Digital Products · SaaS · AI Agents · MCP
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* PHILOSOPHY */}
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
          {principles.map((principle) => (
            <div key={principle.number} className="flex gap-4">
              <span className="shrink-0 text-sm text-secondary">
                {principle.number}
              </span>
              <p className="text-base leading-relaxed text-gray-700">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* CURRENT LOOPS */}
      <section>
        <SectionEyebrow>Current Loops</SectionEyebrow>
        <div className="space-y-6">
          {currentLoops.map((item) => (
            <div key={item.title}>
              <p className="text-base font-bold text-primary">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-secondary">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* QUOTES */}
      <section>
        <SectionEyebrow>Quotes to Build By</SectionEyebrow>
        <div className="space-y-8">
          {quotes.map((item) => (
            <div key={item.quote}>
              <p className="italic text-base leading-relaxed text-gray-700">
                {item.quote}
              </p>
              <p className="mt-2 text-sm text-secondary">— {item.author}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* PROJECTS */}
      <section>
        <SectionEyebrow>Projects</SectionEyebrow>
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.number}>
              <p className="text-sm text-secondary">
                {project.number} · {project.tag}
              </p>
              <p className="mt-1 text-base font-bold text-primary">
                {project.title}
              </p>
              <p className="mt-1 text-sm text-secondary">
                {project.description}
              </p>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-semibold text-primary hover:opacity-70"
              >
                → GitHub [↗]
              </a>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* MY STORY */}
      <section>
        <SectionEyebrow>My Story</SectionEyebrow>
        <StoryToggle />
      </section>

      <Divider />

      {/* CONNECT */}
      <section>
        <SectionEyebrow>Connect</SectionEyebrow>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold text-primary">
          <a
            href="mailto:hilalmohamed100@gmail.com"
            className="hover:opacity-70"
          >
            Email [↗]
          </a>
          <a
            href="https://x.com/HilalSafwan_30"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            Twitter / X [↗]
          </a>
          <a
            href="https://github.com/hilal953"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            GitHub [↗]
          </a>
          <a
            href="https://www.facebook.com/share/1cixwy1To5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            Facebook [↗]
          </a>
        </div>
        <p className="mt-8 text-sm text-secondary">
          Inputs I keep returning to: The Beginning of Infinity · Nassim Taleb
          · Naval Ravikant · Zcash · AI agents · small internet products
        </p>
        <p className="mt-12 text-sm text-secondary">
          © 2026 Hilal Safwan. Still building. Still believing.
        </p>
      </section>
    </main>
  );
}
