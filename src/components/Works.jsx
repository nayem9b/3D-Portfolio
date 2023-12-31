import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { TbExternalLink } from "react-icons/tb";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  github_link_client,
  github_link_server,
  live_link,
}) => {
  return (
    <div>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] md:w-[300px] lg:w-[370px]">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(github_link_client, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-end mt-16 mr-3 card-img_hover">
            <div
              onClick={() => window.open(github_link_server, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <a
              href={live_link}
              target="_blank"
              rel="noreferrer"
              className="text-white ml-3 text-3xl"
            >
              <TbExternalLink />
            </a>
          </div>

          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <h2 className="text-white font-black text-4xl lg:text-7xl text-center ">
        Projects.
      </h2>

      <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-7 md:gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
