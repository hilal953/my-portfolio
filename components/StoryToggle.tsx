"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoryToggle() {
  const [isLong, setIsLong] = useState(false);

  return (
    <div className="w-full">
      {/* TOGGLE */}
      <div className="mb-10 flex items-center justify-end">
        <div className="flex gap-1 rounded-md border border-black/10 bg-white/50 p-1 shadow-sm backdrop-blur-sm">
          <button
            onClick={() => setIsLong(false)}
            className={`rounded px-4 py-1.5 text-xs font-bold transition-all ${
              !isLong
                ? "bg-black text-white shadow-sm"
                : "text-neutral-500 hover:text-black"
            }`}
          >
            Short
          </button>
          <button
            onClick={() => setIsLong(true)}
            className={`rounded px-4 py-1.5 text-xs font-bold transition-all ${
              isLong
                ? "bg-black text-white shadow-sm"
                : "text-neutral-500 hover:text-black"
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
            <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed text-neutral-700">
              <p>
                I am a builder from Sri Lanka who realized early on that the traditional system is rigged for the average. I didn&apos;t want average; I wanted leverage. I learned to code because software is the ultimate permissionless lever.
              </p>
              <p>
                Now, I optimize purely for brutal iteration and absolute ownership of my time. I don&apos;t build for resumes; I build to win.
              </p>
            </div>
          ) : (
            <div className="space-y-16 text-lg font-medium leading-relaxed text-neutral-700">
              
              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2">
                  2010 - 2017<br/>The Rejection
                </span>
                <div className="space-y-4">
                  <p>I was supposed to be a doctor. I studied Biology and tried to follow the script. I thought the path was set.</p>
                  <p className="font-bold text-black">But the system rejected me.</p>
                  <p>It was the greatest gift I ever received. It forced me off the conveyor belt and into the wilderness. I realized that a standard career is just a safe way to slowly die. I didn&apos;t want safety; I wanted freedom.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2">
                  2017 - 2020<br/>The Matrix
                </span>
                <div className="space-y-4">
                  <p>I started studying Computer Science, but college was just another rigid system. I didn&apos;t fit in. I felt entirely misunderstood. To the outside world, I looked lost.</p>
                  <p className="italic text-neutral-500">But in the dark, I was building my mental models.</p>
                  <p>I stopped paying attention to the syllabus and started studying the outliers. I consumed books and movies obsessively. I was looking for the secret to leverage. The degree was just a piece of paper; the real education was happening in isolation.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2">
                  2020 - 2023<br/>The Obsession
                </span>
                <div className="space-y-4">
                  <p>While everyone else was polishing resumes, I was studying leverage. <span className="font-bold text-black italic">The Almanack of Naval Ravikant</span> changed the geometry of my brain. I had zero money, which meant I had zero room for delusion. It had to work.</p>
                  <p>I found my tribe online. Outliers, builders, and misfits like David Senra, Suhail, and Marc Lou. They proved that a single person with a laptop could build an empire and live completely on their own terms.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2">
                  Present<br/>The Blueprint
                </span>
                <div className="space-y-4">
                  <p>Nassim Taleb and David Deutsch rewired my operating system. Survival requires iteration. You don&apos;t guess what the market wants; you bleed, you ship, and you let reality do the filtering.</p>
                  <p>Every product is a mutation. Every failure is natural selection. If you iterate fast enough, survival is a mathematical certainty. To the average person, this looks like chaos. To me, it&apos;s the only way to build something that lasts.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 pt-10 border-t border-black/5">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2">
                  The End Game
                </span>
                <div className="space-y-4">
                  <p>Money is just oxygen. I don&apos;t optimize for cash; I optimize for leverage and time.</p>
                  <p>Listening to David Senra dissect the lives of history&apos;s greatest founders is my baseline. It proves that obsession isn&apos;t a bug; it&apos;s the defining feature of anyone who ever dented the universe.</p>
                  <blockquote className="pl-5 border-l-2 border-black/20 italic text-neutral-600 my-6">
                    &quot;History is built by the obsessed. The people who cannot fit into existing systems are the exact ones who build the new ones.&quot;
                  </blockquote>
                  <p className="text-xl font-bold tracking-tight text-black mt-8">
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
