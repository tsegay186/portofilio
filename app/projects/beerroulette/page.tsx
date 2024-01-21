import React from "react";
import Image from "next/image";
import Tools from "@/app/components/tools";
const tools = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React Js"];

const what = {
  header: "What Is Beer Roultee",
  thumbnail: "/whatIsBeerRoulette.jpg",
  description: ``,
  alt:'beerRoulette'
};

const why = {
  header: "Why Beer Roultee",
  thumbnail: "/whyBeerRoulette.jpg",
  description: "Why",
  alt:'beerRoulette'

};

const how = {
  header: "How Beer Roultee",
  thumbnail: "",
  description: "How",
  alt:'beerRoulette'
};

interface WhQ {
  header: string;
  thumbnail: string;
  description: string;
  alt: string;
}

const WH = [what, why, how];

const Page = () => {
  return (
    <div className="p-2 pt-24  gap-4 flex flex-col">
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
            {thumbnail ? (
              <Image src={thumbnail} width={500} height={500} alt={alt} />
            ) : (
              ""
            )}
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
      <div className="flex flex-col gap-y-4 ">
        <div>
          <div className="max-w-xl flex flex-col gap-y-6">
            <p>
              Player chooses three numbers from 1 to 24. A random beer is
              opened and the number on the cork is read. If the number on the
              cork is one of the players chosen numbers, the player drinks the
              beer for free. If the number on the cork is not one of the
              players chosen numbers, the player pays for the beer and pays an
              additional amount for their try. classic. Interesting. right? let us make it more Interesting.
            </p>
            <p>
             <b>Now Imagine</b> a digital beer roulette in your favorite bar! Every 10
              seconds, it spits out 6 random numbers, 1 to 24. Want in? Just
              pick 3 numbers before each spin for a few cents per try. If even
              one of your numbers appears, boom! Free beer on the house! It is a
              quick, cheap chance to win a tasty prize and liven up your bar
              experience. No pressure, just pure, frothy fun!
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/thumbnailbeerroultee.jpg"
            width={500}
            height={500}
            alt="bingo"
            className=" w-auto h-auto"
          ></Image>
        </div>
      </div>
    </>
  );
};

const Why = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 ">
        <div className="max-w-xl">
          <ol className="flex flex-col gap-y-1">
            <li>
              <b>Adds excitement and engagement:</b>It creates a fun,
              interactive element that fosters conversation and friendly
              competition among customers.
            </li>
            <li>
              <b>Offers free prizes: </b>Winning a free beer is a nice surprise
              and adds to the overall positive experience.
            </li>
            <li>
              <b> Provides transparency: </b>Everyone can see the random draws,
              ensuring fairness and creating a sense of shared anticipation.
            </li>
            <li>
              <b>Offers a modern twist on classic games: </b> It is a digital
              take on lottery boards, appealing to tech-savvy patrons.
            </li>
            <li>
              <b> Increases foot traffic and engagement: </b>The system can
              attract new customers and encourage current patrons to stay
              longer.
            </li>
          </ol>
          <p className="max-w-xl"></p>
        </div>
        <div>
          <Image
            src="/whybeerroultee.jpg"
            width={500}
            height={500}
            alt="bingo"
            className=" w-auto h-auto"
          ></Image>
        </div>
      </div>
    </>
  );
};

const How = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 ">
        <div className="max-w-xl">
          <ol className="flex flex-col gap-y-1">
            <li>
              <b> Open the app. </b> It will be available on the bars Wi-Fi.
            </li>
            <li>
              <b>Pick your lucky numbers.</b> Choose 3 numbers between 1 and 24.
              Feeling bold? Go for any number! Want something safer? Look at the
              history screen for recent draws and pick numbers around the
              average.
            </li>
            <li>
              <b>Place your bet. </b> This will be a tiny amount, just a few
              cents. Remember, it is all about fun.
            </li>
            <li>
              <b>Watch the magic unfold! </b> Every 10 seconds, the app will
              flash 6 random numbers on the screen. This is your moment of
              anticipation!
            </li>
            <li>
              <b>Did you win?</b> Check if any of your chosen numbers match the
              drawn numbers. Even if just one of yours appears, you are a winner!
            </li>
            <li>
              <b>Cheers to free beer!</b>
            </li>
          </ol>
        </div>
        <div>
          <Image
            src="/howbeerroultee.JPG"
            width={500}
            height={500}
            alt="bingo"
            className=" w-auto h-auto"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Page;
