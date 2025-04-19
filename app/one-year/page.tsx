"use client";

import { EB_Garamond } from "next/font/google";
import { useEffect, useState } from "react";

const font = EB_Garamond({
  subsets: ["latin"],
});

export default function OneYear() {
  const introText = useTypewriter(INTRO, 75);

  return (
    <main className={font.className}>
      <div className="flex justify-center h-screen w-screen">
        <h1 className="absolute self-center h-fit text-2xl p-48">
          {introText}
        </h1>

        <h2 className="self-end pb-12">scroll down!</h2>
      </div>

      <div></div>
    </main>
  );
}

const INTRO = `Oh, how far we've come :). One year!!! I really can't believe that it's been so long already 
-- it feels like just yesterday that we met in the Sherm, but throughout this past journey around the sun we've spent so much time together
eating, exploring, and simply enjoying each other's presence. Although we take a surprisingly small amount of photos, I wanted
to gather a few that I really, really like, so please join me in reminiscing about the time we spent together :). `;

function useTypewriter(completeText: string, interval: number) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text.length < completeText.length) {
      const curr = text.length;
      console.log(completeText.charAt(curr));
      if (completeText.charAt(curr - 1) == ".") {
        setTimeout(
          () => setText(completeText.substring(0, curr + 1)),
          10 * interval
        );
      } else if (completeText.charAt(curr - 1) == ",") {
        setTimeout(
          () => setText(completeText.substring(0, curr + 1)),
          5 * interval
        );
      } else {
        setTimeout(
          () => setText(completeText.substring(0, curr + 1)),
          interval
        );
      }
    }
  }, [completeText, interval, text]);

  return text;
}
