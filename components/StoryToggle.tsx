"use client";

import { useState } from "react";

const storyText = `Since around 2010, I began developing a deep interest in studies. Learning never felt like a burden to me. It felt more like play. I was curious, excited, and naturally drawn toward understanding things.

In 2017, I chose Biology for my Advanced Level studies with one clear dream: to enter medical faculty. But life did not go the way I expected. I could not achieve that path.

That experience forced me to look at myself more honestly. School had given me a foundation of knowledge, but I started feeling that there was something deeper inside me. I did not just want to follow a fixed path. I wanted to build something of my own.

From 2017 onward, I started exploring life by trusting my intuition.

Movies became a big part of that journey. The Shawshank Redemption changed something in me. It gave me hope, fuel, and the feeling that even when life becomes difficult, a person can still keep moving forward.

Later, because I could not enter medical faculty, I chose Computer Science and started studying it in 2020. But university was not easy for me. I struggled in many ways. Some people misunderstood me and judged me. From the outside, maybe it looked like I was lost.

But inside, I was trying to connect the dots in my own way.

I kept watching inspirational movies. I kept learning. I kept exploring ideas. Slowly, my entrepreneurial spirit started to grow. Even though university was difficult for me, I somehow survived, pushed through, and graduated.

Then I read Crush It by Gary Vaynerchuk. That book gave me the confidence to start posting online. I began posting on LinkedIn and Twitter, even though nothing really worked at first. While many people around me were focused only on finding jobs and improving their resumes, I started thinking differently.

I started thinking about building something for myself.

Reading The Almanack of Naval Ravikant completely changed my life. Think and Grow Rich by Napoleon Hill also influenced me deeply. Even when I was financially tight, I somehow survived. That struggle gave me real skin in the game. It made the journey feel personal, serious, and real.

Later, I found Matt Gray. That became a turning point. For the first time, I strongly felt that I wanted to build a digital product and create my own freedom. Through Twitter, I discovered more people who inspired me: Sahil Lavingia, Marc Lou, Jack Friks, Haseeb Qureshi, Suhail, David Senra, and many others.

I read The Anthology of Balaji. I watched movies like Moneyball, The Big Short, and Gladiator. I read The Minimalist Entrepreneur by Sahil Lavingia. The Big Short especially changed the way I looked at the world. It taught me that sometimes the truth is hidden in plain sight, and only the people who think differently are able to see it.

I also started reading and watching classics like Dune and The Lord of the Rings. I kept posting on Twitter, even though almost nothing worked. But deep inside, I started feeling that being an indie hacker was not just an interest.

It felt like my calling.

Then I discovered David Deutsch and read The Beginning of Infinity. That book completely changed the way I think. Nassim Taleb's books also influenced me deeply. Through endless Twitter doom-scrolling, I somehow found better ideas, better people, and new ways of seeing life.

I especially love David Senra's podcast because when I listen to it, I feel like I am hearing parts of myself. The stories of founders, builders, and obsessive people make me feel less alone. They remind me that maybe I am not lost. Maybe I am just still in the process of becoming.

And that is where I am today.

I am still surviving. I am still managing money carefully, almost like treating money as oxygen. I do not think about breathing every second, but I still breathe. That is how I see money right now. It is always there in the background. It matters deeply, but I do not want it to become the whole story.

My belief is that somehow, my thinking, taste, curiosity, and persistence will lead me to build a good product. I believe I can create something valuable, get paid for it, and make it successful.

I am optimistic. Maybe even irrationally optimistic.

Reading The Elon Book by Eric Jorgenson and rereading The Beginning of Infinity by David Deutsch transformed the way I see life. Even though I am still struggling, I feel like I am moving toward something big. I feel like I can build something meaningful, become successful, and become the next version of myself.

Maybe even someone who builds with the same level of ambition as people like Elon.

That is my story.

Still struggling.
Still exploring.
Still building.
Still believing.
`;

export default function StoryToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-base font-semibold text-primary hover:opacity-70"
      >
        {open ? "Hide my story" : "Read my story ->"}
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
