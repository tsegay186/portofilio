import React from "react";
const markup = {
  toolSets: ["HTML", "JSX"],
  style:
    "bg-gradient-to-r from-slate-400 to-zinc-300  py-12 px-20 justify-center ",
};
const styling = {
  toolSets: ["CSS", "Tailwid CSS", "Material UI"],
  style:
    "bg-gradient-to-r from-slate-400 to-zinc-300  py-12 px-24 justify-center ",
};

const interaction = {
  toolSets: ["JavaScript", "React JS", "Vue Js", "Next JS"],
  style:
    "bg-gradient-to-r from-slate-400 to-zinc-300  py-10 px-24 justify-center ",
};

const intrface = {
  toolSets: ["HTTP", "REST", "JSON", "Json Web Token"],
  style:
    "bg-gradient-to-r from-slate-400 to-zinc-300  py-10 px-24 justify-center ",
};

const serverLanguages = {
  toolSets: [
    "Node JS",
    "Express Js",
    ".Net Core",
    "ASP.NET Core",
    "Python",
  ],
  style:
    "bg-gradient-to-r from-slate-400 to-zinc-300  py-10 px-24 justify-center ",
};

const databases = {
  toolSets: [
    "MongoDb",
    "Mongoose",
    "SQL",
    "PostgreSql",
    "Prisma",
  ],
  style:
    "bg-gradient-to-r from-slate-400 to-zinc-300  py-14 px-24 justify-center ",
};

const test = {
  toolSets: ["test"],
  style:
    "bg-gradient-to-r from-slate-400 to-zinc-300   justify-center items-center flex  rounded-full",
};

const devops = {
  toolSets: ["DevOps"],
  style:
    "bg-gradient-to-r from-slate-400 to-zinc-300   justify-center items-center flex  rounded-full",
};

const deploy = {
  toolSets: ["host"],
  style:
    "bg-gradient-to-r from-slate-400 to-zinc-300   justify-center items-center flex  rounded-full",
};

const tools = [
  markup,
  styling,
  interaction,
  intrface,
  serverLanguages,
  databases,
  test,
  devops,
  deploy,
];

export const Skills = () => {
  return (
    <div className=" w-full flex flex-col md:flex-row flex-wrap  justify-center items-center p-12">
      {tools.map((sect, index) => (
        <div key={index} className="flex flex-col md:flex-row">
          <Tool key={index} tools={sect.toolSets} toolcss={sect.style}></Tool>
          <div
            className="h-14 w-1  md:h-1 md:w-14 grow bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%   self-center"
            style={{ borderRadius: "34px" }}
          ></div>
        </div>
      ))}
    </div>
  );
};

interface ToolProps {
  tools?: string[];
  toolcss?: string;
}

const Tool = ({ tools, toolcss }: ToolProps) => {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-400 to-zinc-300 flex h-48 w-48 min-w-fit justify-center items-center rounded-full">
        <div>
          {tools?.map((tool, index) => (
            <div key={index}>{tool}</div>
          ))}
        </div>
      </div>
    </>
  );
};
