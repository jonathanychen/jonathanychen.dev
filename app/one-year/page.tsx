"use client";

import { EB_Garamond } from "next/font/google";
import { useEffect, useState } from "react";
import Image from 'next/image';

const font = EB_Garamond({
  subsets: ["latin"],
});

export default function OneYear() {
  const [fadeIn, setFadeIn] = useState("opacity-0")

  const [start, setStart] = useState(false);

  const introText = useTypewriter(INTRO, start);

  const audio = new Audio("/one-year/background.mp3")

  useEffect(() => {
    if (introText == INTRO) {
      setTimeout(() => {
        setFadeIn("opacity-100")
      }, 2000);
    }
  }, [introText]);

  return (
    <main className={font.className}>
      {!start && <div className="flex flex-col justify-center h-screen w-screen">
        <h1 className="self-center mb-16">to: erin</h1>
        <h1 className="self-center h-fit text-2xl transition hover:opacity-50 hover:cursor-pointer" onClick={() => {
          setStart(true)
          audio.play()
        }}>click me!</h1>
        <h1 className="self-center mt-16">(sound on!)</h1>
      </div>}

      {start && <><div className="flex justify-center h-screen w-screen">
        <h1 className="absolute self-center h-fit text-2xl p-48">
          {introText}
        </h1>

        <h2 className={"self-end pb-12 transition-all duration-300 " + fadeIn}>scroll down!</h2>
      </div>

        <div className="flex flex-col justify-center h-screen w-screen p-48">
          <div>
            <Image src="/one-year/spring-2024.png" alt="" width={3024} height={4032} />
          </div>

          <div className="flex flex-col mt-8">
            <h2 className="mb-4"><strong>spring 2024!</strong></h2>
            <p>what a start to our relationship! from a rescheduled mfa date (my bad), to a short aquarium excursion, to building our first legos. it's so funny how we got here.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center h-screen w-screen p-48">
          <div>
            <Image src="/one-year/long-distance.png" alt="" width={3024} height={4032} />
          </div>

          <div className="flex flex-col mt-8">
            <h2 className="mb-4"><strong>long distance</strong></h2>
            <p>although we had to leave each other soon after we began, moma was a fun highlight before i officially departed for seattle. although my visit to boston was a short weekend, i will forever cherish this silly little snoopy photo as well as the snoopy crochet you gave me :)
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center h-screen w-screen p-48">
          <div>
            <Image src="/one-year/seattle.png" alt="" width={3024} height={4032} />
          </div>

          <div className="flex flex-col mt-8">
            <h2 className="mb-4"><strong>seattle!</strong></h2>
            <p>the absolute highlight of my summer in seattle. a week of nothing but each other, but i really couldn't get tired of it. our little coffee trips, the 4th of july fireworks, the lazy days of watching chick flicks, and even rein haus (lol) were so so fun just because you were there. thank u so much for visiting me that summer.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center h-screen w-screen p-48">
          <div>
            <Image src="/one-year/fall-2024.png" alt="" width={3024} height={4032} />
          </div>

          <div className="flex flex-col mt-8">
            <h2 className="mb-4"><strong>fall 2024!</strong></h2>
            <p>being close to each other again was so nice. we could cook yummy food, go exploring in different areas of boston, and even party it up (woot woot!). i really appreciate all the simple things that we did, since we were both so busy that semester.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center h-screen w-screen p-48">
          <div>
            <Image src="/one-year/providence.png" alt="" width={3024} height={4032} />
          </div>

          <div className="flex flex-col mt-8">
            <h2 className="mb-4"><strong>providence!</strong></h2>
            <p>but even though we were busy, of course we had to take a trip! although short, this was a much needed break from school in boston. it felt so peaceful being able to just walk around providence and relax, even though it's only an hour away by train. if we ever need a short retreat, let's go back :)
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center h-screen w-screen p-48">
          <div>
            <Image src="/one-year/spring-2025.png" alt="" width={3024} height={4032} />
          </div>

          <div className="flex flex-col mt-8">
            <h2 className="mb-4"><strong>spring 2025!</strong></h2>
            <p>our last semester of school (sort of). despite us having pretty different yet busy schedules, i'm so happy with how we make time, no matter whether it's a spontaneous meetup after class or work, or a planned excursion on the weekend. it seems we do something new every week!
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center h-screen w-screen p-48">
          <div>
            <Image src="/one-year/nyc.png" alt="" width={3024} height={4032} />
          </div>

          <div className="flex flex-col mt-8">
            <h2 className="mb-4"><strong>nyc!</strong></h2>
            <p>this trip really can't be beat. such such good food, sights, and company :). there's really not much more to say, i can't wait to go back with you again.
            </p>
          </div>
        </div>

        <div className="flex justify-center h-screen w-screen">
          <h1 className="absolute self-center h-fit text-2xl p-48">
            {LETTER1}
          </h1>

          <h2 className={"self-end pb-12"}>- jon</h2>
        </div></>}


    </main>
  );
}

const INTRO = `Oh, how far we've come :). One year!!! I really can't believe that it's been so long already 
-- it feels like just yesterday that we met in the Sherm, but throughout this past journey around the sun we've spent so much time together
eating, exploring, and simply enjoying each other's presence. I loved learning all about you and watching you grow throughout this final year of our college lives. Although we take a surprisingly small amount of photos, I wanted
to gather a few that I really, really like, so please join me in reminiscing about the time we spent together :). `;

const LETTER1 = `Now that graduation is right around the corner, it's hard to ignore the fact that we might be separated once again. But no matter what happens next, I know we'll figure it out. 
We've already lasted three hundred sixty-five days, so why can't we do more? Here's to many more days and nights of adventures and seeing each other grow. I love you.`

function useTypewriter(completeText: string, start: boolean) {
  const [text, setText] = useState("");

  const interval = 75

  useEffect(() => {
    if (!start) {
      return;
    }

    if (text.length < completeText.length) {
      const curr = text.length;

      if (text.length === 0) {
        setTimeout(
          () => setText(completeText.substring(0, curr + 1)),
          10 * interval
        )
        return;
      }

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
  }, [completeText, interval, text, start]);

  return text;
}
