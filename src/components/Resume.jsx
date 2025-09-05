import React from "react";
import { backend } from "../assets";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Resume = () => {
  return (
    <div className="w-full mt-5 max-h-screen relative">
      <div className="text-[15px] font-semibold text-white">MY</div>
      <div className="text-[60px] font-extrabold">Resume.</div>

      <Tilt
        className="xs:w-[250px] mt-11 min-w-full mx-auto"
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
            <img
              src={backend}
              alt="resume"
              className="w-16 h-16 object-contain"
            />
            <a
              href="https://drive.google.com/file/d/1LW2f1stUYb4yu8LSbcy_mFyMyRTGuZdC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[20px] font-bold text-center cursor-pointer hover:underline"
            >
              Click Here
            </a>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
