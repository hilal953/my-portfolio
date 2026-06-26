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
                I am a builder from Sri Lanka. I realized early on that the traditional path of a standard career wasn&apos;t for me. I learned to code because I wanted the freedom to build things on my own terms.
              </p>
              <p>
                Now, I focus on creating real value and keeping absolute ownership of my time. I don&apos;t build to polish a resume; I build because I genuinely love making ideas come to life.
              </p>
            </div>
          ) : (
            <div className="space-y-16 text-lg font-medium leading-relaxed text-neutral-700">
              
              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2">
                  2010 - 2017<br/>A New Direction
                </span>
                <div className="space-y-4">
                  <p>I grew up believing I was supposed to be a doctor. I studied Biology, trying to follow the exact path everyone told me was right.</p>
                  <p className="font-bold text-black">But in the end, it didn&apos;t work out.</p>
                  <p>Looking back, that rejection was exactly what I needed. It forced me to stop living someone else&apos;s plan and start figuring out what I actually wanted.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2">
                  2017 - 2020<br/>The Search
                </span>
                <div className="space-y-4">
                  <p>I switched to Computer Science, hoping to find my place. But college still felt like I was just memorizing things to pass tests. To the outside world, I probably looked a bit lost.</p>
                  <p className="italic text-neutral-500">But quietly, I was learning on my own.</p>
                  <p>I stopped worrying about the syllabus and started studying people who had forged their own unique paths. I realized that the most valuable education happens when you simply follow your curiosity.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2">
                  2020 - 2023<br/>Finding My Path
                </span>
                <div className="space-y-4">
                  <p>While my classmates were polishing their resumes, I was trying to figure out how to build real products. It was a lonely time, but I had to make it work. <span className="font-bold text-black italic">The determination</span> was already there.</p>
                  <p>Then I found some amazing communities online. I saw regular people with just a laptop bringing incredible ideas to life. They showed me that you don&apos;t need permission to create something meaningful.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2">
                  Present<br/>Just Build
                </span>
                <div className="space-y-4">
                  <p>Now, my philosophy is simple: I make things, share them with the world, and listen to what happens next. I don&apos;t try to perfectly predict what people want.</p>
                  <p>Every mistake teaches me something new. It might seem a bit unstructured to some, but to me, it&apos;s the most honest way to live and work.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 pt-10 border-t border-black/5">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2">
                  What Matters
                </span>
                <div className="space-y-4">
                  <p>Money is important, but for me, it&apos;s really just a way to earn the freedom to spend my time how I choose.</p>
                  <p>When things get complicated, I try to remember that it&apos;s a good thing to care deeply about what you make. If you don&apos;t fit into the normal path, you can always build your own.</p>
                  <blockquote className="pl-5 border-l-2 border-black/20 italic text-neutral-600 my-6">
                    &quot;Keep trying, keep learning, and never give up. At the end of the day, I just want to spend my life building things I love.&quot;
                  </blockquote>
                  <p className="text-xl font-bold tracking-tight text-black mt-8">
                    This is my journey. And I&apos;m just getting started.
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
