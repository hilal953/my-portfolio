"use client";

import { useState } from "react";

export default function StoryToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-base font-semibold text-primary hover:opacity-70 transition-opacity"
      >
        {open ? "Hide my story" : "Read my story →"}
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[10000px] opacity-100 mt-8" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative pl-6 border-l-2 border-divider space-y-12 text-base leading-relaxed text-gray-700">
          
          {/* Chapter 1 */}
          <div className="relative group">
            {/* Timeline Circle */}
            <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-cream bg-primary transition-transform duration-300 group-hover:scale-125" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              2010 – 2017 · The Spark & The Pivot
            </span>
            <div className="space-y-4">
              <p>
                For as long as I can remember, learning has been my playground rather than a chore. Since 2010, curiosity has driven me to connect disjointed ideas, dissecting how the world works simply for the joy of understanding.
              </p>
              <p>
                By 2017, this path seemed to point toward medicine. I chose Biology for my Advanced Levels, fueled by the singular ambition of entering medical school. It felt like the definitive path laid out for me.
              </p>
              <p className="font-semibold text-primary">
                Yet, life had different plans, and the doors to medical school remained closed.
              </p>
              <p>
                That detour was painful, but it forced an honest confrontation with myself. I realized that my drive wasn&apos;t meant to be channeled into a pre-defined career. The structured system of schooling had built my foundation, but a deeper instinct was pulling me elsewhere—not toward a secure job, but toward the freedom of building something of my own.
              </p>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="relative group">
            <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-cream bg-primary transition-transform duration-300 group-hover:scale-125" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              2017 – 2020 · Trusting Intuition
            </span>
            <div className="space-y-4">
              <p>
                Stepping off the conventional path, I began navigating life by intuition. Cinema became a source of solace and direction during this time; watching <span className="font-semibold text-primary italic">The Shawshank Redemption</span> instilled a quiet resilience in me, proving that hope can endure even within the most confining circumstances.
              </p>
              <p>
                With medicine out of reach, I pivoted to Computer Science in 2020. University, however, was far from smooth. I struggled with the rigidity of the environment, frequently finding myself misunderstood or judged. To an outside observer, I might have looked adrift.
              </p>
              <p className="italic border-l-2 border-primary/20 pl-4 text-secondary">
                Beneath the surface, however, the dots were starting to connect.
              </p>
              <p>
                Between lectures, I immersed myself in books, watched inspiring films, and sketched out ideas. My entrepreneurial drive was quietly taking root. Despite the friction and doubts, I persevered, pushed through the challenges, and earned my degree.
              </p>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="relative group">
            <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-cream bg-primary transition-transform duration-300 group-hover:scale-125" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              2020 – 2023 · The Entrepreneurial Spark
            </span>
            <div className="space-y-4">
              <p>
                A turning point arrived when I read <span className="font-semibold text-primary italic">Crush It</span> by Gary Vaynerchuk. The book gave me the push to share my thoughts publicly on LinkedIn and Twitter. Though initial attempts met with silence, the act of creating in public shifted something inside me.
              </p>
              <p>
                While my peers polished resumes for traditional roles, my focus shifted entirely toward creation. Reading <span className="font-semibold text-primary italic">The Almanack of Naval Ravikant</span> reshaped my worldview, reinforced by the timeless principles of Napoleon Hill’s <span className="font-semibold text-primary italic">Think and Grow Rich</span>. Operating on a shoestring budget during these years wasn&apos;t easy, but the financial constraint gave me real skin in the game, making every step feel personal, urgent, and real.
              </p>
              <p>
                Discovering Matt Gray solidified my desire to build digital products and engineer my own freedom. Through Twitter, I found a digital tribe of builders and thinkers who showed me what was possible: Sahil Lavingia, Marc Lou, Jack Friks, Haseeb Qureshi, Suhail, and David Senra.
              </p>
              <p>
                I devoured books and films that challenged conventional wisdom—Balaji Srinivasan’s <span className="font-semibold text-primary italic">The Anthology of Balaji</span>, Lavingia&apos;s <span className="font-semibold text-primary italic">The Minimalist Entrepreneur</span>, and films like <span className="font-semibold text-primary italic">Moneyball</span>, <span className="font-semibold text-primary italic">Gladiator</span>, and <span className="font-semibold text-primary italic">The Big Short</span>.
              </p>
              <p>
                <span className="font-semibold text-primary italic">The Big Short</span> in particular altered how I look at systems. It taught me that truth is often hidden in plain sight, and that those who dare to think differently are often the ones who see what the crowd misses.
              </p>
              <p>
                Immersing myself in epics like <span className="font-semibold text-primary italic">Dune</span> and <span className="font-semibold text-primary italic">The Lord of the Rings</span>, I kept writing and sharing online despite the lack of traction. Indie hacking was no longer just an interest; it had become an undeniable calling.
              </p>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="relative group">
            <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-cream bg-primary transition-transform duration-300 group-hover:scale-125" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              Present · The Evolutionary Lens
            </span>
            <div className="space-y-4">
              <p>
                My intellectual framework fell into place when I discovered David Deutsch’s <span className="font-semibold text-primary italic">The Beginning of Infinity</span>, alongside the works of Nassim Taleb. Deutsch reframed my understanding of progress, leading me to view life, ideas, and products through an evolutionary lens—not just biologically, but as a system of continuous variation, criticism, and selection.
              </p>
              
              <div className="bg-white/40 border border-divider rounded-xl p-4 my-6">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">My Framework</p>
                <p className="text-sm text-secondary leading-relaxed">
                  Every product attempt is a <span className="font-semibold text-primary">variation</span>. Every setback is <span className="font-semibold text-primary">feedback</span>. Every correction is <span className="font-semibold text-primary">selection</span>. The ideas tested, the mistakes made, and the lessons learned are all parts of a singular evolutionary process.
                </p>
              </div>

              <p>
                From the outside, this trial-and-error approach might look chaotic. Yet, I believe that through constant iteration, the fittest ideas will eventually survive and crystallize into something of true value.
              </p>
              <p>
                This journey has also taught me that I don&apos;t fit easily into conventional molds. Standard employment structures often feel restrictive, and I rarely stay long in traditional roles. Rather than a flaw, I&apos;ve come to see this as a design feature: I am simply built to explore, create, and carve out my own path.
              </p>
            </div>
          </div>

          {/* Chapter 5 */}
          <div className="relative group">
            <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-cream bg-primary transition-transform duration-300 group-hover:scale-125" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              The Outlook
            </span>
            <div className="space-y-4">
              <p>
                Choosing this path means accepting its inherent instability.
              </p>
              <p>
                Surviving on a day-to-day basis requires treating capital like oxygen—essential, background, but never the sole purpose of existence. It is always there, keeping me in the game, but it doesn&apos;t define the journey.
              </p>
              <p>
                Listening to David Senra&apos;s podcast offers a profound sense of camaraderie. The stories of obsessive founders and builders serve as a reassuring reminder that being different don&apos;t mean being lost; it means being in the process of becoming.
              </p>
              
              <blockquote className="italic border-l-2 border-primary/30 pl-4 py-1 text-secondary my-6">
                &ldquo;The history of those who built the world reminds me that obsession isn&apos;t a defect—it is the raw material of creation. The people who cannot fit into existing systems are the ones who must build new ones.&rdquo;
              </blockquote>

              <p>
                Rereading Jorgenson&apos;s <span className="font-semibold text-primary italic">The Elon Book</span> and Deutsch&apos;s <span className="font-semibold text-primary italic">The Beginning of Infinity</span> reinforces my conviction that even amidst the struggles, I am moving toward something significant.
              </p>
              <p>
                My ultimate belief is that this combination of taste, curiosity, resilience, and evolutionary learning will eventually yield a remarkable product—something that delivers genuine value to the world while securing my own independence.
              </p>
              <p>
                Call it irrational optimism, but it is precisely this optimism that fuels the fire.
              </p>
              
              <div className="pt-6 border-t border-divider/50">
                <p className="text-base font-bold text-primary mb-3">
                  While the exact destination remains unwritten, the process is clear:
                </p>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-secondary font-medium pl-0">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Continuous learning.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Relentless exploration.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Constant experimentation.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Dedicated building.
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Unwavering belief.
                  </li>
                </ul>
              </div>

              <p className="text-lg font-black tracking-tight text-primary mt-6 pt-4 border-t border-divider/30">
                Success isn&apos;t something to be found; it is something we evolve into.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
