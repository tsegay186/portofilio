import React from "react";
import Image, { StaticImageData } from "next/image";
import Tools from "@/app/components/tools";

// import bingoWhat from "/public/thumbnails/digitalBingoThumbnail.jpg";
// import bingoHow from "/public/beerHow.jpg";
// import bingoWhy from "/public/beerWhat.jpg";

import whatVirtualBingoThumbnail from "/public/whatIsBingo.jpg";
import whyVirtualBingoThumbnail from "/public/whyBingo.jpg";
import HowVirtualBingoThumbnail from "/public/howBingo.jpg";

const what = {
  header: "What Is Virtual Bingo",
  thumbnail: whatVirtualBingoThumbnail,
  description: ``,
  alt: "What Is Virtual Bingo",
};

const why = {
  header: "Why Virtual Bingo",
  thumbnail: whyVirtualBingoThumbnail,
  description: "Why",
  alt: "Why Virtual Bingo",
};

const how = {
  header: "How Virtual Bingo",
  thumbnail: HowVirtualBingoThumbnail,
  description: "",
  alt: "How Virtual Bingo",
};

interface WhQ {
  header: string;
  thumbnail: StaticImageData;
  description: string;
  alt: string;
}

const tools = [
  "HTML",
  "CSS",
  "JavaScript",
  "Vue Js",
  "Pinya",
  "Node JS",
  "EXpress Js",
  "Mongo Db",
  "Mongoose",
  "SocketIO",
  "Json Web Token",
  "REST API",
];

const WH = [what, why, how];

const Page = () => {
  return (
    <div className="p-2 pt-24 gap-4 flex flex-col">
      <Tools tools={tools} />
      {WH.map((expl) => (
        <WhatIs key={expl.header} {...expl} />
      ))}
    </div>
  );
};
const WhatIs = ({ header, thumbnail, description, alt }: WhQ) => {
  return (
    <div className="w-full hello h-full py-4 rounded   flex flex-col gap-y-12 border-b">
      <div className="why flex flex-col gap-y-8">
        <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start justify-center sm:justify-evenly">
          <div className="self-center">
            <Image
              src={thumbnail}
              width={500}
              height={500}
              alt={alt}
              className="rounded-md"
              style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
            />
          </div>
          <div className="px-4 sm:px-0 flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-2">
              <p className="text-3xl font-bold">{header}</p>
            </div>
            <div>
              {header.includes("What") ? (
                <What />
              ) : header.includes("Why") ? (
                <Why />
              ) : (
                <How />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const What = () => {
  return (
    <>
      <div>
        <p className="max-w-xl">
          Virtual Bingo is a digital version of the classic game we all know and
          love, played online instead of in person. Imagine all the fun of
          bingo, but with some exciting technological twists!
        </p>
      </div>
      {/* <Image
        src={bingoWhat}
        width={500}
        height={500}
        alt="bingo what"
        className="mt-4 w-auto h-auto"
      ></Image> */}
    </>
  );
};

const Why = () => {
  return (
    <>
      <div className="max-w-xl">
        <ol className="flex flex-col gap-y-1">
          <li>
            <b>Convenience:</b> Eliminate the hassle of manual marking and
            missed wins.
          </li>
          <li>
            <b>Accessibility:</b> Play anywhere, anytime, with friends or solo.
          </li>
          <li>
            <b>Effortless Play:</b> The app automatically marks numbers, so you
            can relax and enjoy the thrill of the draw.
          </li>
          <li>
            <b>Instant Wins:</b> No more missed Bingo! moments! The app
            instantly detects winners and celebrates with fanfare.
          </li>
          <li>
            <b>Variety of Games:</b> Explore different bingo rooms, each with
            its own unique rules and challenges.
          </li>
        </ol>
        <p className="max-w-xl"></p>
      </div>
      {/* <Image
        src={bingoWhy}
        width={500}
        height={500}
        alt="bingo why "
        className=" w-auto h-auto"
      ></Image> */}
    </>
  );
};

const How = () => {
  return (
    <>
      <div className="max-w-xl">
        <ol className="flex flex-col gap-y-1">
          <li>
            <b> Register and Login:</b> Create an account and unlock the doors
            to online bingo parties.
          </li>
          <li>
            <b>Browse and Join:</b> Choose a group game that tickles your fancy.
            See how many players are in, what type of bingo it is, and when it
            starts.
          </li>
          <li>
            <b>Pick your Card:</b> Once you have joined, select a unique bingo
            card with its random grid of numbers.
          </li>
          <li>
            <b>Relax and Watch:</b> The game takes the reins! Numbers get called
            out one by one, and the system automatically marks them off on
            everyones cards. No more scrambling to keep up!
          </li>
          <li>
            <b>Listen for the Winning Cry:</b> As numbers get marked, the system
            scans all cards for winning patterns like lines, full houses, or
            special combinations(U,O,L,X and more).
          </li>
          <li>
            <b>The Winner is announced!</b> When someone hits a winning pattern,
            the game erupts in cheers!
          </li>
          <li>
            <b>Play Again!:</b> Celebrate the winner, and jump into another
            round for more chances to yell <b>Bingo!</b>
          </li>
        </ol>
      </div>
      {/* <Image
        src={bingoHow}
        width={500}
        height={500}
        alt="bingo how "
        className=" w-auto h-auto"
      ></Image> */}
    </>
  );
};

export default Page;
