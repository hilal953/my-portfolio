"use client";

import { useState } from "react";

const storyText = `Since around 2010, I started showing a deep interest in studies. For me, learning felt like a form of play. I chose Biology for my Advanced Level in 2017 with the dream of entering medical faculty, but I could not achieve that path.

At that time, I realized that school education had given me a foundation of knowledge, but I also felt something deeper inside me. I wanted to build something of my own. So from 2017, I started exploring life by trusting my intuition.

Movies played a big role in my journey. The Shawshank Redemption changed my life and gave me the fuel to keep going. Later, because I could not enter medical faculty, I chose Computer Science and started studying it in 2020.

Even though I failed many subjects and struggled in university, I kept exploring. Some people misunderstood me and judged me, but I was trying to connect the dots in my own way. I watched inspirational movies, kept learning, and slowly my entrepreneurial spirit started to grow.

During that time, I also met the love of my life by accident. Even though I was not great at university, I somehow survived and graduated.

Then I read Crush It by Gary Vaynerchuk, and it gave me the confidence to start posting online. I posted on LinkedIn and Twitter, even though nothing really worked at first. Instead of only looking for jobs and optimizing my resume, I started thinking more about building something for myself.

Reading The Almanack of Naval Ravikant completely changed my life. I also read Think and Grow Rich by Napoleon Hill. Even when I was financially tight, I somehow survived, and that gave me real skin in the game.

Later, I found Matt Gray, and that was when I felt strongly that I wanted to build a digital product and achieve my freedom. I also discovered many inspiring people on Twitter, including Sahil Lavingia, Marc Lou, Jack Friks, Haseeb Qureshi, Suhail, and David Senra.

I read The Anthology of Balaji, watched movies like Moneyball, The Big Short, and Gladiator, and read The Minimalist Entrepreneur by Sahil Lavingia. The Big Short especially changed the way I looked at many things.

I also started reading and watching classics like Dune and The Lord of the Rings. I kept posting on Twitter, even though almost nothing worked. But deep inside, I started feeling that being an indie hacker was my calling in life.

Then I discovered David Deutsch and read The Beginning of Infinity. That book completely changed my thinking. Nassim Taleb's books also influenced me deeply. Through Twitter doom-scrolling, I found more good people to follow and learn from.

I especially love David Senra's podcast because when I listen to it, I feel like I am reading parts of myself.

That is where I am today. I am still surviving, still managing money carefully, almost like treating money as oxygen. I do not think about breathing every second, but I still breathe. That is how I see money right now.

My belief is that somehow, my thinking, taste, and curiosity will lead me to build a good product. I believe it will create value, get paid, and become successful.

I am optimistic. Maybe even irrationally optimistic. Reading The Elon Book by Eric Jorgenson and rereading The Beginning of Infinity by David Deutsch has transformed the way I see life.

Even though I am still struggling, I feel like I am moving toward something big. I feel like I can build something meaningful, become successful, and maybe even become the next version of someone like Elon.

That is my story: still struggling, still exploring, still building, and still believing.`;

export default function StoryToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-base font-semibold text-primary hover:opacity-70"
      >
        {open ? "Hide my story" : "Read my story →"}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[10000px] opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 text-base leading-relaxed text-gray-700">
          {storyText.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
