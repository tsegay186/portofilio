"use client";
import Project from "./components/Project";
import myProjects from "./MockData/projects";
import Contact from "./contact/page";
import { Skills } from "./components/skills";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="flex pt-20 flex-col gap-y-8 items-center">
        <section
          id="home"
          className=" w-fit py-4 flex flex-col gap-y-4 max-w-xl"
        >
          <Profile />
        </section>
        <section id="skill" className="flex flex-col w-full ">
          <div className="self-center">
            <h1>Skills</h1>
          </div>
          <Skills />
        </section>
        <section
          id="projects"
          className=" flex  justify-center w-full  sm:w-3/4 flex-col sm:flex-row flex-wrap gap-x-8 gap-y-4"
        >
          <div className="self-center md:justify-end">
            <h1>projects</h1>
          </div>
          {myProjects.map((project, index) => (
            <div key={index} className=" flex flex-col sm:flex-row">
              <div className="bg-gradient-to-r from-slate-300 to-gray-300 flex sm:flex-col  flex-wrap w-full justify-around sm:w-48 p-4 gap-4 sm:h-full rounded-t-3xl sm:rounded-l-3xl sm:rounded-r-none">
                {project?.skills.map((skill, index) => (
                  <button key={index} className="bg-slate-100 h-12 px-4 rounded-xl shadow-inner cursor-text">
                    <p>{skill}</p>
                  </button>
                ))}
              </div>
              <Project {...project} />
            </div>
          ))}
        </section>
      </div>
      <section
        id="contact"
        className=" w-full flex-col gap-y-4 justify-center mt-4 bg-gray-50"
      >
        <Contact />
      </section>
    </>
  );
}

const Profile = () => {
  return (
    <>
      <div className="flex  flex-wrap sm:h-96 sm:mb-2">
        <div>
          <div className="flex gap-3">
            <Image
              src="/avater.jpg"
              width={150}
              height={150}
              alt=""
              style={{ borderRadius: "50%" }}
            />
            <h1 className="text-5xl font-bold items-center self-end">Hello.</h1>
          </div>
          <p className="text-xl font-light  max-w-xl pt-6 ">
            My name is{" "}
            <b className="font-medium text-xl my-3 ">Tsegay Berhanu</b>, a full
            stack developer based in Ethiopia, driven with a passion for
            crafting elegant and impactful web experiences. Adept in both
            front-end and back-end technologies, I thrive on solving complex
            challenges and bringing ideas to life through code. My unwavering
            dedication to continuous learning ensures I stay ahead of the curve,
            ready to tackle any project with agility and enthusiasm.
          </p>
        </div>
      </div>
    </>
  );
};
const Projects = () => {
  return (
    <>
      <div>
        My name is Tsegay Berhanu, a full stack developer based in Ethiopia,
        driven with a passion for crafting elegant and impactful web
        experiences. Adept in both front-end and back-end technologies, I thrive
        on solving complex challenges and bringing ideas to life through code.
        My unwavering dedication to continuous learning ensures I stay ahead of
        the curve, ready to tackle any project with agility and enthusiasm.
      </div>
    </>
  );
};
