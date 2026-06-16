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
                Since around 2010, I have had a deep interest in learning.
              </p>
              <p>
                Studying never felt like a burden to me. It felt more like play. I was naturally curious. I wanted to understand things, connect ideas, and see how the world worked.
              </p>
              <p>
                In 2017, I chose Biology for my Advanced Level studies with one clear dream: to enter medical faculty. At that time, medicine felt like the path I was supposed to take. 
              </p>
              <p className="font-semibold text-primary">
                But life did not go the way I expected. I could not enter medical faculty.
              </p>
              <p>
                That failure changed me.
              </p>
              <p>
                At first, it felt painful. But slowly, it forced me to look at myself more honestly. I began to realize that maybe I was not meant to simply follow a fixed path. School had given me a foundation, but there was something deeper inside me. I did not just want a career. I wanted to build something of my own.
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
                From 2017 onward, I started exploring life by trusting my intuition.
              </p>
              <p>
                Movies became a big part of that journey. <span className="font-semibold text-primary italic">The Shawshank Redemption</span> changed something in me. It gave me hope. It showed me that even when life feels unfair, even when you are trapped by circumstances, a person can still keep moving forward.
              </p>
              <p>
                Later, because medicine was no longer possible for me, I chose Computer Science and started studying it in 2020. But university was not easy. I struggled in many ways. Some people misunderstood me. Some judged me. From the outside, maybe it looked like I was lost.
              </p>
              <p className="italic border-l-2 border-primary/20 pl-4 text-secondary">
                But inside, I was trying to connect the dots in my own way.
              </p>
              <p>
                I kept watching inspirational movies. I kept reading. I kept exploring ideas. Slowly, my entrepreneurial spirit started to grow. Even though university was difficult, I survived it, pushed through, and graduated.
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
                Then I read <span className="font-semibold text-primary italic">Crush It</span> by Gary Vaynerchuk. That book gave me the confidence to start posting online. I began posting on LinkedIn and Twitter, even though nothing really worked at first.
              </p>
              <p>
                While many people around me were focused only on finding jobs and improving their resumes, I started thinking differently. I started thinking about building something for myself.
              </p>
              <p>
                Then I read <span className="font-semibold text-primary italic">The Almanack of Naval Ravikant</span>, and it completely changed my life. <span className="font-semibold text-primary italic">Think and Grow Rich</span> by Napoleon Hill also influenced me deeply. During that time, I was financially tight, but I somehow survived. That struggle gave me real skin in the game. It made the journey feel personal, serious, and real.
              </p>
              <p>
                Later, I found Matt Gray. That became another turning point. For the first time, I strongly felt that I wanted to build a digital product and create my own freedom.
              </p>
              <p>
                Through Twitter, I discovered more people who inspired me: Sahil Lavingia, Marc Lou, Jack Friks, Haseeb Qureshi, Suhail, David Senra, and many others.
              </p>
              <p>
                I read <span className="font-semibold text-primary italic">The Anthology of Balaji</span>. I watched movies like <span className="font-semibold text-primary italic">Moneyball</span>, <span className="font-semibold text-primary italic">The Big Short</span>, and <span className="font-semibold text-primary italic">Gladiator</span>. I read <span className="font-semibold text-primary italic">The Minimalist Entrepreneur</span> by Sahil Lavingia.
              </p>
              <p>
                <span className="font-semibold text-primary italic">The Big Short</span> especially changed the way I looked at the world. It taught me that sometimes the truth is hidden in plain sight. Most people follow the obvious path, but the people who think differently are sometimes the ones who see what others miss.
              </p>
              <p>
                I also started reading and watching classics like <span className="font-semibold text-primary italic">Dune</span> and <span className="font-semibold text-primary italic">The Lord of the Rings</span>. I kept posting on Twitter, even though almost nothing worked. But deep inside, I started feeling that being an indie hacker was not just an interest.
              </p>
              <p className="font-bold text-primary">
                It felt like my calling.
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
                Then I discovered David Deutsch and read <span className="font-semibold text-primary italic">The Beginning of Infinity</span>. That book completely changed the way I think. Nassim Taleb’s books also influenced me deeply.
              </p>
              <p>
                Deutsch helped me see progress differently. I started thinking about life, ideas, and building through the lens of evolution. Not only biological evolution, but the wider idea of variation, trial and error, criticism, and selection.
              </p>
              
              <div className="bg-white/40 border border-divider rounded-xl p-4 my-6">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">My Framework</p>
                <p className="text-sm text-secondary leading-relaxed">
                  To me, every attempt is a <span className="font-semibold text-primary">variation</span>. Every failure is <span className="font-semibold text-primary">feedback</span>. Every correction is a form of <span className="font-semibold text-primary">selection</span>. Every product I try to build, every idea I test, every mistake I make, and every lesson I learn is part of that evolutionary process.
                </p>
              </div>

              <p>
                Maybe my trial-and-error way of learning looks messy from the outside. But I believe that if I keep creating, testing, correcting, and improving, one day something will survive. One day, one of my ideas will become strong enough, useful enough, and valuable enough to succeed.
              </p>
              <p>
                That is how I see my journey now.
              </p>
              <p>
                I also realized something about myself: I do not really fit easily into normal places. Whenever I go somewhere to work, some problem usually comes. I often do not stay there for very long. Maybe it is because I am difficult to fit into a fixed system. Maybe it is because I am not built to only follow instructions. Maybe I am built to explore, create, and figure things out through my own path.
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
                That does not mean the path is easy.
              </p>
              <p>
                I am still surviving. I still manage money carefully, almost like treating money as oxygen. I do not think about breathing every second, but I still breathe. That is how money feels to me right now. It is always there in the background. It matters deeply, but I do not want it to become the whole story.
              </p>
              <p>
                I especially love David Senra’s podcast because when I listen to it, I feel like I am hearing parts of myself.
              </p>
              
              <blockquote className="italic border-l-2 border-primary/30 pl-4 py-1 text-secondary my-6">
                &ldquo;The stories of founders, builders, and obsessive people make me feel less alone. They remind me that maybe I am not lost. Maybe I am just still in the process of becoming.&rdquo;
              </blockquote>

              <p>
                Those stories make me believe that obsession is not always a weakness. Sometimes it is the raw material of greatness. Sometimes the person who cannot fit into normal paths is the same person who has to build his own.
              </p>
              <p>
                Reading <span className="font-semibold text-primary italic">The Elon Book</span> by Eric Jorgenson and rereading <span className="font-semibold text-primary italic">The Beginning of Infinity</span> by David Deutsch transformed the way I see life. Even though I am still struggling, I feel like I am moving toward something big.
              </p>
              <p>
                My belief is that somehow my thinking, taste, curiosity, persistence, and trial-and-error learning will lead me to build a good product. I believe I can create something valuable, get paid for it, and make it successful.
              </p>
              <p>
                Maybe I am irrationally optimistic. But that optimism is what keeps me alive in the game.
              </p>
              
              <div className="pt-6 border-t border-divider/50">
                <p className="text-base font-bold text-primary mb-3">
                  I do not know exactly where this path will lead. I do not know which idea will work. I do not know when things will finally click. But I know this:
                </p>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-secondary font-medium pl-0">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    I am still learning.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    I am still exploring.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    I am still testing.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    I am still building.
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    I am still believing.
                  </li>
                </ul>
              </div>

              <p className="text-lg font-black tracking-tight text-primary mt-6 pt-4 border-t border-divider/30">
                Maybe success is not something I suddenly find. Maybe it is something I evolve into.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
