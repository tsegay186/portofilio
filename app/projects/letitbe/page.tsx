import React from "react";
import Image, { StaticImageData } from "next/image";
import Tools from "@/app/components/tools";
import Link from "next/link";

import letWhat from "/public/whatLet.jpg";
import letHow from "/public/letItHow.jpg";
import letWhy from "/public/letItWhy.jpg";

import whatLetItThumbnail from '/public/whatIsLetItBe.jpg'
import whyLetItThumbnail from '/public/whyLetIt.jpg'
import howLetItThumbnail from '/public/letItwhat.jpg'

const what = {
  header: "What Is Pentad",
  thumbnail: whatLetItThumbnail,
  description: ``,
  alt:'let it what'
};

const why = {
  header: "Why Pentad",
  thumbnail: whyLetItThumbnail,
  description: "Why",
  alt:'let it why'
};

const how = {
  header: "How Pentad",
  thumbnail: howLetItThumbnail,
  description: "How",
  alt:'let it how'
};

interface WhQ {
  header: string;
  thumbnail: StaticImageData;
  description?: string;
  alt: string;
}

const tools = [
  "HTML",
  "CSS",
  "JavaScript",
  "Vue JS",
  "Node Js",
  "Express JS",
  "SocketIO",
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
const WhatIs = ({ header, thumbnail, alt }: WhQ) => {
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
          Imagine a game where you and your friends gather in a room, each
          holding a special card with 5 unique numbers. A machine in the center
          starts calling out numbers, one by one. The excitement builds as
          everyone eagerly checks their cards, hoping to hear their numbers
          called. The first person to cross off all 5 numbers on their card
          shouts out! and wins the game!
        </p>
      </div>
      <Image
        src={letWhat}
        width={500}
        height={500}
        alt="letwhat"
        className="pt-2 mt-4 w-auto h-auto"
      ></Image>
    </>
  );
};

const Why = () => {
  return (
    <>
      <div className="max-w-xl">
        <div>
          <p>
            <b>Learning and Skill Development</b>
          </p>
          <ol className="flex flex-col gap-y-3">
            <li>
              <b>Full-stack Practice: </b>It involves front-end, back-end, and
              client server realtime communication, providing a comprehensive
              learning experience.
            </li>
            <li>
              <b>Scalability and Optimization: </b>Implementing features like
              real-time number drawing and efficient matching algorithms tests
              development skills.
            </li>
            <li>
              <b>Functional Project: </b> A fully functional app showcases
              ability to design, build, and deploy a complete software solution.
            </li>
            <li>
              <b>Engaging Gameplay:</b> A well-designed game demonstrates
              creativity.
            </li>
            <li>
              <b> Understanding Gaming Concepts:</b> Building a game provides
              insights into game design, and the technical challenges of online
              gaming.
            </li>
            <li>
              <b> Experimentation and Exploration:</b> Trying out different
              technologies, like socket.io allows for technical exploration.
            </li>
          </ol>
        </div>

        <p className="max-w-xl"></p>
      </div>
      <Image
        src={letWhy}
        width={500}
        height={500}
        alt="letwhy"
        className="pt-2 w-auto h-auto"
      ></Image>
    </>
  );
};

const How = () => {
  return (
    <>
      <div className="max-w-xl">
        <ol className="flex flex-col gap-y-2">
          <li>
            <b>Entering web address or click this <Link href="https://pentad.onrender.com/" target="_blank" className="text-red">link</Link></b><br />
            The app will establish a connection with the server
            to initiate gameplay. This might involve a brief connection time.
            </li>
            <li>
              <b>Choose Your Numbers </b><br />Once connected, you will have an option to
              select a card with 5 numbers. The numbers will be spaced 15 apart,
              creating a unique combination for you.choose one that feels lucky!
            </li>
            <li>
              <b>Click Join the Game </b><br />After selecting your card, look for a button
              labeled Join the Game. Clicking this button
              will initiate the process of joining a multiplayer game room.
              <i>make sure you are able to join the game.</i>
            </li>
            <li>
              <b>Feel the Vibe </b><br />Anticipate the number drawing, and
              cheer for your lucky numbers! Remember, the first player to mark
              all 5 numbers on their card wins the game!
            </li>
        </ol>
      </div>
      <Image
        src={letHow}
        width={500}
        height={500}
        alt="lethow"
        className="pt-2 w-auto h-auto"
      ></Image>
    </>
  );
};

export default Page;
