"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoryToggle() {
  const [isLong, setIsLong] = useState(false);

  return (
    <div className="w-full">
      {/* TOGGLE */}
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
          Length
        </p>
        <div className="flex gap-2 rounded-full border border-white/10 bg-black/50 p-1">
          <button
            onClick={() => setIsLong(false)}
            className={`rounded-full px-4 py-1 text-xs font-semibold transition-all duration-200 ${
              !isLong
                ? "bg-white/10 text-white shadow-sm"
                : "text-neutral-500 hover:text-white"
            }`}
          >
            Short
          </button>
          <button
            onClick={() => setIsLong(true)}
            className={`rounded-full px-4 py-1 text-xs font-semibold transition-all duration-200 ${
              isLong
                ? "bg-white/10 text-white shadow-sm"
                : "text-neutral-500 hover:text-white"
            }`}
          >
            Long
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isLong ? "long" : "short"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {!isLong ? (
            <div className="space-y-4 text-base leading-relaxed text-neutral-400 sm:text-lg">
              <p>
                I am a software builder from Sri Lanka, obsessed with how ideas
                turn into reality through code. I started by tinkering with
                computers, realized that software was the ultimate lever, and
                have been building ever since.
              </p>
              <p>
                Right now, my focus is on indie hacking—building small,
                profitable internet products that solve real problems. I optimize
                for learning, shipping fast, and owning my time.
              </p>
            </div>
          ) : (
            <div className="relative pl-6 border-l-2 border-white/10 space-y-12 text-base leading-relaxed text-neutral-400">
              
              {/* Chapter 1 */}
              <div className="relative group">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-dark-bg bg-neutral-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                  2010 - 2017 · The Spark &amp; The Pivot
                </span>
                <div className="space-y-4">
                  <p>Learning has always been fun for me, not a chore. Since 2010, I&apos;ve loved figuring out how things work just for the joy of it.</p>
                  <p>By 2017, I thought I wanted to be a doctor. I studied Biology in school and tried hard to get into medical school. I thought my path was set.</p>
                  <p className="font-semibold text-white">But I didn&apos;t get in.</p>
                  <p>It hurt at the time, but it made me think. I realized I didn&apos;t want a standard career. School gave me a foundation, but I wanted the freedom to build my own things, not just get a safe job.</p>
                </div>
              </div>

              {/* Chapter 2 */}
              <div className="relative group">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-dark-bg bg-neutral-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                  2017 - 2020 · Finding My Way
                </span>
                <div className="space-y-4">
                  <p>I had to figure out what to do next. I watched a lot of movies back then. Watching <span className="font-semibold text-white italic">The Shawshank Redemption</span> taught me to keep hope alive, even when things feel stuck.</p>
                  <p>Since medicine was out, I started studying Computer Science in 2020. College was hard. I didn&apos;t fit in well with the rigid system, and I often felt misunderstood. To others, I probably looked lost.</p>
                  <p className="italic border-l-2 border-white/20 pl-4 text-neutral-300">But things were starting to make sense.</p>
                  <p>Outside of class, I read books, watched movies, and wrote down ideas. I wanted to start something of my own. Even though it was stressful and I had doubts, I kept going and finished my degree.</p>
                </div>
              </div>

              {/* Chapter 3 */}
              <div className="relative group">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-dark-bg bg-neutral-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                  2020 - 2023 · Learning to Create
                </span>
                <div className="space-y-4">
                  <p>I read <span className="font-semibold text-white italic">Crush It</span> by Gary Vaynerchuk and started writing on LinkedIn and Twitter. At first, nobody read my posts, but sharing my thoughts in public changed how I thought.</p>
                  <p>While my friends were working on resumes, I wanted to build things. I read <span className="font-semibold text-white italic">The Almanack of Naval Ravikant</span> and <span className="font-semibold text-white italic">Think and Grow Rich</span>, which changed my outlook. I had very little money, which was hard, but it meant I had to make things work. Every step mattered.</p>
                  <p>I saw builders like Sahil Lavingia, Marc Lou, Jack Friks, Haseeb Qureshi, Suhail, and David Senra online. They showed me that you can build digital products and live on your own terms.</p>
                  <p>I read books and watched movies like <span className="font-semibold text-white italic">Moneyball</span>, <span className="font-semibold text-white italic">Gladiator</span>, and <span className="font-semibold text-white italic">The Big Short</span>. <span className="font-semibold text-white italic">The Big Short</span> showed me that the crowd is often wrong, and the truth is usually right in front of us if we look closely.</p>
                  <p>I loved stories like <span className="font-semibold text-white italic">Dune</span> and <span className="font-semibold text-white italic">The Lord of the Rings</span>. I kept writing and posting online, even when no one was paying attention. I knew I wanted to build things on the internet.</p>
                </div>
              </div>

              {/* Chapter 4 */}
              <div className="relative group">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-dark-bg bg-neutral-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                  Present · How I Think
                </span>
                <div className="space-y-4">
                  <p>I read <span className="font-semibold text-white italic">The Beginning of Infinity</span> by David Deutsch and the books of Nassim Taleb. They changed how I see progress. I started viewing life and products as a process of evolution.</p>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 my-6">
                    <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">My Framework</p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Every product is a test. Every setback is feedback. Every fix is selection. The mistakes and lessons are just part of the process.
                    </p>
                  </div>

                  <p>To others, this trial-and-error might look messy. But I believe that if you keep trying and improving, the best ideas will survive and turn into something valuable.</p>
                  <p>I&apos;ve also realized I don&apos;t fit into typical jobs. I don&apos;t stay long in traditional roles because they feel too tight. I don&apos;t think that&apos;s a bad thing anymore. It&apos;s just who I am. I&apos;m built to explore and build my own way.</p>
                </div>
              </div>

              {/* Chapter 5 */}
              <div className="relative group">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-dark-bg bg-neutral-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                  My Outlook
                </span>
                <div className="space-y-4">
                  <p>This path is unstable, and I accept that.</p>
                  <p>Money is like oxygen. You need it to survive, but it isn&apos;t the point of living. It keeps me in the game, but it isn&apos;t the goal.</p>
                  <p>Listening to David Senra&apos;s podcast makes me feel less alone. Hearing about founders who were obsessed reminds me that being different doesn&apos;t mean you are lost. It just means you are building something new.</p>
                  
                  <blockquote className="italic border-l-2 border-white/20 pl-4 py-1 text-neutral-400 my-6">
                    &quot;The history of people who built the world shows that obsession is not a flaw. The people who cannot fit into existing systems are the ones who have to build new ones.&quot;
                  </blockquote>

                  <p>Rereading Jorgenson&apos;s <span className="font-semibold text-white italic">The Elon Book</span> and Deutsch&apos;s <span className="font-semibold text-white italic">The Beginning of Infinity</span> makes me feel sure that the struggle is worth it.</p>
                  <p>I believe that if I keep learning, exploring, and building, I will eventually make something useful that helps people and gives me my independence.</p>
                  <p>Maybe that is too optimistic, but that optimism keeps me going.</p>
                  
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-base font-bold text-white mb-3">
                      I don&apos;t know exactly where I will end up, but I know how to get there:
                    </p>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-neutral-400 font-medium pl-0">
                      <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-600" />Keep learning.</li>
                      <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-600" />Keep exploring.</li>
                      <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-600" />Keep trying new things.</li>
                      <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-600" />Keep building.</li>
                      <li className="flex items-center gap-2 sm:col-span-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />Keep believing.</li>
                    </ul>
                  </div>

                  <p className="text-lg font-black tracking-tight text-white mt-6 pt-4 border-t border-white/10">
                    You don&apos;t just find success. You grow into it.
                  </p>
                </div>
              </div>

            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
