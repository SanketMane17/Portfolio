import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      data.sort((obj1, obj2) => obj1.serialNumber - obj2.serialNumber);
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      data.sort((obj1, obj2) => obj1.serialNumber - obj2.serialNumber);
      setSkills(data);
    });
  }, []);

  return (
    <>
      <div className="app__skills-container">
        <div className="app__skills-section">
          <h2 className="head-text mb-10">Skills</h2>
          <motion.div className="app__skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text !text-black">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="ps-20 pe-10 app__exp app__skills-section">
          <h2 className="head-text mb-14">Experiences</h2>
          <motion.div
            className="relative border-s border-gray-200 dark:border-gray-700"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            {experiences.map((experience) => (
              <motion.div className="mb-10 ms-6" key={experience.year}>
                <span className="absolute flex items-center justify-center -start-5">
                  <img
                    src={urlFor(experience.companyLogo)}
                    alt="logo"
                    className="rounded-full w-10 h-10"
                  />
                </span>
                <motion.div className="ms-2">
                  {experience.works.map((work, index) => (
                    <div key={work.name}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                      >
                        <h4 className="font-semibold flex flex-col">
                          <span className="me-2 text-lg">{work.name}</span>
                        </h4>
                        <p>{work.company}</p>
                        {index === 0 && (
                          <div className="my-0.5 text-sm">
                            {experience.year}
                          </div>
                        )}
                        <div className="text-gray-700 text-[14px] mb-2">
                          {work.desc}
                        </div>
                        {work.refLink && (
                          <a
                            className="text-[14px] bg-[var(--secondary-color)] px-4 py-1 rounded-full text-white hover:cursor-pointer"
                            target="_blank"
                            href={work.refLink}
                          >
                            Reference
                          </a>
                        )}
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
