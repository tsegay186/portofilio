import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

interface Project {
  title: string;
  inAppLink: string;
  gitHubLink: string[];
  webLink: string;
  thumbnail: string;
  description: string;
  what?:string,
  why?:string,
  how?:string
}
export const Project = ({
  title,
  inAppLink,
  gitHubLink,
  webLink,
  thumbnail,
  description,
}: Project) => {
  return (
    <div className="w-full rounded-md p-4 " style={{boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}}>
      <div>
        <img src={thumbnail} alt="hello" className="rounded" />
      </div>
      <div className="flex justify-between">
        <div className="p-2">
          <Link href={inAppLink} className="text-teal-600">{title}</Link>
        </div>
        <div className="p-2 flex gap-x-2">
          <div>
          <Link className="text-teal-600" target="_blank"  href={webLink}> <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> <span>web</span></Link>
          </div>
          <div className="flex gap-x-2">
          <Link className="text-teal-600" target="_blank" href={gitHubLink[0]}><FontAwesomeIcon icon={faGithub}/> <span>Frontend</span></Link>
          <Link className="text-teal-600" target="_blank" href={gitHubLink[1]??''}><FontAwesomeIcon icon={faGithub}/> <span>Backend</span></Link>
          </div>
        </div>
      </div>
      <div>
        <p className="p-1">{description}</p>
      </div>
    </div>
  );
};

export default Project;
