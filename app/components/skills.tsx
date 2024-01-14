import React from "react";
const markup = {
  toolSets: ["HTML", "XML", "JSX"],
  style: "bg-gradient-to-r from-slate-400 to-zinc-300  py-12 px-20 justify-center ",
};
const styling = {
  toolSets: ["CSS", "Tailwid CSS", "Vuetify Js", "Material UI", "Bootstrap"],
  style: "bg-gradient-to-r from-slate-400 to-zinc-300  py-12 px-24 justify-center ",
};

const interaction = {
  toolSets: ["JavaScript", "React JS", "Vue Js", "Nuxt Js", "Next JS"],
  style: "bg-gradient-to-r from-slate-400 to-zinc-300  py-10 px-24 justify-center ",
};

const intrface = {
  toolSets: ["HTTP", "REST", "FetchAPI", "Axios", "JSON", "Json Web Token"],
  style: "bg-gradient-to-r from-slate-400 to-zinc-300  py-10 px-24 justify-center ",
};

const serverLanguages = {
  toolSets: [
    "Node JS",
    "Express Js",
    ".net Core",
    "ASP.NET Core",
    "Java",
    "Pythone",
  ],
  style: "bg-gradient-to-r from-slate-400 to-zinc-300  py-10 px-24 justify-center ",
};

const databases = {
  toolSets: [
    "MongoDb",
    "Mongoose",
    "MYSQL",
    "JDBC",
    "SQL",
    "Entity Framework Core",
  ],
  style: "bg-gradient-to-r from-slate-400 to-zinc-300  py-14 px-24 justify-center ",
};

const test = { toolSets: ["test"], style: "bg-gradient-to-r from-slate-400 to-zinc-300  py-8 px-16 justify-center items-center flex h-48 " };

const devops = {toolSets: ["DevOps"], style: "bg-gradient-to-r from-slate-400 to-zinc-300  py-8 px-16 justify-center items-center flex h-48 " }

const deploy = { toolSets: ["host"], style: "bg-gradient-to-r from-slate-400 to-zinc-300  py-4 px-16 justify-center items-center flex h-48" };

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
      <div className={toolcss} style={{ borderRadius: "50%" }}>
        <div>
          {tools?.map((tool, index) => (
            <div
              key={index}
              className="p-2
            "
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
