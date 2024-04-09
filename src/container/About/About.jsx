import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      data.sort((obj1, obj2) => obj1.serialNumber - obj2.serialNumber);
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        About <span>Me</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item flex"
            key={about.title + index}
          >
            <div>
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="about-title mt-[20px]">{about.title}</h2>
            </div>
            <p className="mt-[10px] text-center">{about.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__achivements"
      >
        <div className="item">
          <h2>15+</h2>
          <p
            style={{ textAlign: "center", color: "white" }}
            className="bold-text"
          >
            Verified Skills
          </p>
        </div>
        <div className="vertical-line" />
        <div className="item">
          <h2>6</h2>
          <p
            style={{ textAlign: "center", color: "white" }}
            className="bold-text"
          >
            Professional Projects
          </p>
        </div>
        <div className="vertical-line" />
        <div className="item">
          <h2>150+</h2>
          <p
            style={{ textAlign: "center", color: "white" }}
            className="bold-text"
          >
            DSA Problems Solved
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
