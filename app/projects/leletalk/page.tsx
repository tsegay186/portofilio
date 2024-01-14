import React from "react";
import Image from "next/image";
import Tools from "@/app/components/tools";

const what = {
  header: "What Is Lele Talk",
  thumbnail: "",
  description: ``,
};

const why = {
  header: "Why Lele talk",
  thumbnail: "/beerWhy.JPG",
  description: "Why",
};

const how = {
  header: "How Lele talk",
  thumbnail: "",
  description: "How",
};

interface WhQ {
  header: string;
  thumbnail: string;
  description: string;
  alt: string;
}

const WH = [what, why, how];
const tools = [
  "HTML",
  "CSS",
  "Vuetify JS",
  "JavaScript",
  "Vue Js",
  "Vuex",
  "Node JS",
  "EXpress Js",
  "Mongo Db",
  "Mongoose",
  "JOI",
  "Json Web Token",
  "REST API",
];
const Page = () => {
  return (
    <div className=" pt-24  gap-4 flex flex-col">
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
          <div className="px-4 sm:px-0 flex flex-col gap-y-2">
            <div></div>
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
          <p className="max-w-xl">
            Fully functional web application I built to enhance my full-stack
            development skills. It imitates most of the features of social
            network apps, such as posting, commenting, replying, liking,
            disliking, friending, and account management (password changing,
            profile updating, and more).
          </p>
        </div>
        <div>
          <Image
            src="/leletalk.jpg"
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
          <p className="max-w-xl">
            <b>Full-stack practice:</b> It encompasses frontend, backend,
            database, and API integration, providing a comprehensive learning
            experience.
          </p>
          <p>
            <b> Problem-solving:</b> Tackling real-world challenges like user
            authentication, content management, and scalability enhances
            problem-solving skills.
          </p>
        </div>
        <div>
          <Image
            src="/settingleletalk.jpeg"
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
          <p>
            <b> 1. Frontend Development:</b> <br />
            HTML, CSS, and JavaScript: These core technologies create the user
            interface, layout, and interactive elements. JavaScript framework
            Vue.js streamline development and state management.
            <br />
            <b>Responsive design:</b>
            <br /> Vuetify Js Ensures the app adapts seamlessly to different
            screen sizes and devices.
            <br />
            <b>2. Backend Development:</b>
            <br />
            <br />
            <b>Server-side language:</b>
            <br /> Node.js handle data processing, user authentication, and API
            requests.
            <br />
            <b>Database:</b>
            <br /> MongoDB with mongoose orm store user data, posts, comments,
            and relationships.
            <br />
            <b>Server-side frameworks:</b>
            <br /> Express.js provide structure and tools for backend
            development.
            <br />
            <b>3. API Development:</b>
            <br />
            <br />
            <b>RESTful APIs:</b>
            <br />
            Define endpoints for data exchange between frontend and backend
            using HTTP requests.
            <br />
            <b>Data serialization:</b> JSON is used to format data for efficient
            transmission.
            <br />
            <b>Authentication and authorization:</b>
            <br /> Json Web Token.
          </p>
        </div>
        <div>
          <Image
            src="/lelehow.JPEG"
            width={500}
            height={500}
            alt="bingo"
            className=" w-auto h-auto "
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Page;
