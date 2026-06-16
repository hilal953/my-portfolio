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
              2010 - 2017 · The Spark & The Pivot
            </span>
            <div className="space-y-4">
              <p>
                Learning has always been fun for me, not a chore. Since 2010, I&apos;ve loved figuring out how things work just for the joy of it.
              </p>
              <p>
                By 2017, I thought I wanted to be a doctor. I studied Biology in school and tried hard to get into medical school. I thought my path was set.
              </p>
              <p className="font-semibold text-primary">
                But I didn&apos;t get in.
              </p>
              <p>
                It hurt at the time, but it made me think. I realized I didn&apos;t want a standard career. School gave me a foundation, but I wanted the freedom to build my own things, not just get a safe job.
              </p>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="relative group">
            <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-cream bg-primary transition-transform duration-300 group-hover:scale-125" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              2017 - 2020 · Finding My Way
            </span>
            <div className="space-y-4">
              <p>
                I had to figure out what to do next. I watched a lot of movies back then. Watching <span className="font-semibold text-primary italic">The Shawshank Redemption</span> taught me to keep hope alive, even when things feel stuck.
              </p>
              <p>
                Since medicine was out, I started studying Computer Science in 2020. College was hard. I didn&apos;t fit in well with the rigid system, and I often felt misunderstood. To others, I probably looked lost.
              </p>
              <p className="italic border-l-2 border-primary/20 pl-4 text-secondary">
                But things were starting to make sense.
              </p>
              <p>
                Outside of class, I read books, watched movies, and wrote down ideas. I wanted to start something of my own. Even though it was stressful and I had doubts, I kept going and finished my degree.
              </p>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="relative group">
            <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-cream bg-primary transition-transform duration-300 group-hover:scale-125" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              2020 - 2023 · Learning to Create
            </span>
            <div className="space-y-4">
              <p>
                I read <span className="font-semibold text-primary italic">Crush It</span> by Gary Vaynerchuk and started writing on LinkedIn and Twitter. At first, nobody read my posts, but sharing my thoughts in public changed how I thought.
              </p>
              <p>
                While my friends were working on resumes, I wanted to build things. I read <span className="font-semibold text-primary italic">The Almanack of Naval Ravikant</span> and <span className="font-semibold text-primary italic">Think and Grow Rich</span>, which changed my outlook. I had very little money, which was hard, but it meant I had to make things work. Every step mattered.
              </p>
              <p>
                I saw builders like Sahil Lavingia, Marc Lou, Jack Friks, Haseeb Qureshi, Suhail, and David Senra online. They showed me that you can build digital products and live on your own terms.
              </p>
              <p>
                I read books and watched movies like <span className="font-semibold text-primary italic">Moneyball</span>, <span className="font-semibold text-primary italic">Gladiator</span>, and <span className="font-semibold text-primary italic">The Big Short</span>. <span className="font-semibold text-primary italic">The Big Short</span> showed me that the crowd is often wrong, and the truth is usually right in front of us if we look closely.
              </p>
              <p>
                I loved stories like <span className="font-semibold text-primary italic">Dune</span> and <span className="font-semibold text-primary italic">The Lord of the Rings</span>. I kept writing and posting online, even when no one was paying attention. I knew I wanted to build things on the internet.
              </p>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="relative group">
            <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-cream bg-primary transition-transform duration-300 group-hover:scale-125" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              Present · How I Think
            </span>
            <div className="space-y-4">
              <p>
                I read <span className="font-semibold text-primary italic">The Beginning of Infinity</span> by David Deutsch and the books of Nassim Taleb. They changed how I see progress. I started viewing life and products as a process of evolution.
              </p>
              
              <div className="bg-white/40 border border-divider rounded-xl p-4 my-6">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">My Framework</p>
                <p className="text-sm text-secondary leading-relaxed">
                  Every product is a test. Every setback is feedback. Every fix is selection. The mistakes and lessons are just part of the process.
                </p>
              </div>

              <p>
                To others, this trial-and-error might look messy. But I believe that if you keep trying and improving, the best ideas will survive and turn into something valuable.
              </p>
              <p>
                I&apos;ve also realized I don&apos;t fit into typical jobs. I don&apos;t stay long in traditional roles because they feel too tight. I don&apos;t think that&apos;s a bad thing anymore. It&apos;s just who I am. I&apos;m built to explore and build my own way.
              </p>
            </div>
          </div>

          {/* Chapter 5 */}
          <div className="relative group">
            <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-cream bg-primary transition-transform duration-300 group-hover:scale-125" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              My Outlook
            </span>
            <div className="space-y-4">
              <p>
                This path is unstable, and I accept that.
              </p>
              <p>
                Money is like oxygen. You need it to survive, but it isn&apos;t the point of living. It keeps me in the game, but it isn&apos;t the goal.
              </p>
              <p>
                Listening to David Senra&apos;s podcast makes me feel less alone. Hearing about founders who were obsessed reminds me that being different doesn&apos;t mean you are lost. It just means you are building something new.
              </p>
              
              <blockquote className="italic border-l-2 border-primary/30 pl-4 py-1 text-secondary my-6">
                &ldquo;The history of people who built the world shows that obsession is not a flaw. The people who cannot fit into existing systems are the ones who have to build new ones.&rdquo;
              </blockquote>

              <p>
                Rereading Jorgenson&apos;s <span className="font-semibold text-primary italic">The Elon Book</span> and Deutsch&apos;s <span className="font-semibold text-primary italic">The Beginning of Infinity</span> makes me feel sure that the struggle is worth it.
              </p>
              <p>
                I believe that if I keep learning, exploring, and building, I will eventually make something useful that helps people and gives me my independence.
              </p>
              <p>
                Maybe that is too optimistic, but that optimism keeps me going.
              </p>
              
              <div className="pt-6 border-t border-divider/50">
                <p className="text-base font-bold text-primary mb-3">
                  I don&apos;t know exactly where I will end up, but I know how to get there:
                </p>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-secondary font-medium pl-0">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Keep learning.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Keep exploring.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Keep trying new things.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Keep building.
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Keep believing.
                  </li>
                </ul>
              </div>

              <p className="text-lg font-black tracking-tight text-primary mt-6 pt-4 border-t border-divider/30">
                You don&apos;t just find success. You grow into it.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
