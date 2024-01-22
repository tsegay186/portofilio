import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
interface Project {
  title: string;
  inAppLink: string;
  gitHubLink: string[];
  webLink: string;
  thumbnail: string;
  description: string;
  what?: string;
  why?: string;
  how?: string;
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
    <div
      className="w-full p-4 rounded-b-md rounded-t-none sm:rounded-r-md sm:rounded-l-none"
      style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
    >
      <div>
        <Image src={thumbnail} alt={title} className="rounded" priority />
      </div>
      <div className="flex justify-between">
        <div className="p-2">
          <Link href={inAppLink ?? "#"} className="text-teal-600">
            {title}
          </Link>
        </div>
        <div className="p-2 flex gap-x-2">
          <div>
            {
            webLink ? (
              <Link className="text-teal-600" target="_blank" href={webLink}>
                {" "}
                <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>{" "}
                <span>web</span>
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="flex gap-x-2">
            {gitHubLink[0] ? (
              <Link
                className="text-teal-600"
                target="_blank"
                href={gitHubLink[0]}
              >
                <FontAwesomeIcon icon={faGithub} /> <span>Frontend</span>
              </Link>
            ) : (
              ""
            )}

            {gitHubLink[1] ? (
              <Link
                className="text-teal-600"
                target="_blank"
                href={gitHubLink[1] ?? ""}
              >
                <FontAwesomeIcon icon={faGithub} /> <span>Backend</span>
              </Link>
            ) : (
              ""
            )}
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
