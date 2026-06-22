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
                I am a builder from Sri Lanka who realized early on that the traditional system is rigged for the average. I didn&apos;t want average; I wanted leverage. I learned to code because software is the ultimate permissionless lever.
              </p>
              <p>
                Now, I optimize purely for brutal iteration and absolute ownership of my time. I don&apos;t build for resumes; I build to win.
              </p>
            </div>
          ) : (
            <div className="relative pl-6 border-l-2 border-white/10 space-y-12 text-base leading-relaxed text-neutral-400">
              
              {/* Chapter 1 */}
              <div className="relative group">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-dark-bg bg-neutral-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                  2010 - 2017 · The Gift of Rejection
                </span>
                <div className="space-y-4">
                  <p>I was supposed to be a doctor. I studied Biology and tried to follow the script. I thought the path was set.</p>
                  <p className="font-semibold text-white">But the system rejected me.</p>
                  <p>It was the greatest gift I ever received. It forced me off the conveyor belt and into the wilderness. I realized that a standard career is just a safe way to slowly die. I didn&apos;t want safety; I wanted freedom.</p>
                </div>
              </div>

              {/* Chapter 2 */}
              <div className="relative group">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-dark-bg bg-neutral-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                  2017 - 2020 · Escaping the Matrix
                </span>
                <div className="space-y-4">
                  <p>I started studying Computer Science, but college was just another rigid system. I didn&apos;t fit in. I felt entirely misunderstood. To the outside world, I looked lost.</p>
                  <p className="italic border-l-2 border-white/20 pl-4 text-neutral-300">But in the dark, I was building my mental models.</p>
                  <p>I stopped paying attention to the syllabus and started studying the outliers. I consumed books and movies obsessively. I was looking for the secret to leverage. The degree was just a piece of paper; the real education was happening in isolation.</p>
                </div>
              </div>

              {/* Chapter 3 */}
              <div className="relative group">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-dark-bg bg-neutral-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                  2020 - 2023 · The Obsession Takes Hold
                </span>
                <div className="space-y-4">
                  <p>While everyone else was polishing resumes, I was studying leverage. <span className="font-semibold text-white italic">The Almanack of Naval Ravikant</span> changed the geometry of my brain. I had zero money, which meant I had zero room for delusion. It had to work.</p>
                  <p>I found my tribe online. Outliers, builders, and misfits like David Senra, Suhail, and Marc Lou. They proved that a single person with a laptop could build an empire and live completely on their own terms.</p>
                  <p>I consumed <span className="font-semibold text-white italic">Moneyball</span> and <span className="font-semibold text-white italic">The Big Short</span>. The lesson was obvious: the crowd is almost always wrong. The truth is hidden in plain sight, waiting for someone obsessed enough to exploit it.</p>
                </div>
              </div>

              {/* Chapter 4 */}
              <div className="relative group">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-dark-bg bg-neutral-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                  Present · The Blueprint
                </span>
                <div className="space-y-4">
                  <p>Nassim Taleb and David Deutsch rewired my operating system. Survival requires iteration. You don&apos;t guess what the market wants; you bleed, you ship, and you let reality do the filtering.</p>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 my-6">
                    <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">The Law of Survival</p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Every product is a mutation. Every failure is natural selection. If you iterate fast enough, survival is a mathematical certainty.
                    </p>
                  </div>

                  <p>To the average person, this looks like chaos. To me, it&apos;s the only way to build something that lasts. Traditional jobs suffocate this instinct. I don&apos;t belong in them, and I never will.</p>
                </div>
              </div>

              {/* Chapter 5 */}
              <div className="relative group">
                <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-dark-bg bg-neutral-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                  The End Game
                </span>
                <div className="space-y-4">
                  <p>Money is just oxygen. I don&apos;t optimize for cash; I optimize for leverage and time.</p>
                  <p>Listening to David Senra dissect the lives of history&apos;s greatest founders is my baseline. It proves that obsession isn&apos;t a bug; it&apos;s the defining feature of anyone who ever dented the universe.</p>
                  
                  <blockquote className="italic border-l-2 border-white/20 pl-4 py-1 text-neutral-400 my-6">
                    &quot;History is built by the obsessed. The people who cannot fit into existing systems are the exact ones who build the new ones.&quot;
                  </blockquote>

                  <p>I don&apos;t know exactly what the final empire will look like, but I know the exact physics of how to build it. Iterate. Fail. Survive. Compound.</p>
                  
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-base font-bold text-white mb-3">
                      The Rules:
                    </p>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-neutral-400 font-medium pl-0">
                      <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-600" />Stay obsessed.</li>
                      <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-600" />Trust no one&apos;s dogma.</li>
                      <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-600" />Let reality be the judge.</li>
                      <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-600" />Build what people crave.</li>
                      <li className="flex items-center gap-2 sm:col-span-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />Never stop compounding.</li>
                    </ul>
                  </div>

                  <p className="text-lg font-black tracking-tight text-white mt-6 pt-4 border-t border-white/10">
                    We are playing a game of survival. And I intend to win.
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
