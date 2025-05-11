import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profileImage from "../assets/avatar.png";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-18 h-18 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Combined Introduction Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Text Content */}
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("left", "spring", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]'
          >
            I'm a passionate Android Developer and Data Analyst with experience in
            Kotlin, Java, C++, and tools like Excel, MySQL, and Tableau. I also build responsive
            web applications using HTML, CSS, and JavaScript. I'm a quick learner,
            and I love turning real-world problems into smart, user-friendly solutions.
          </motion.p>
        </div>

        {/* Right Profile Image */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="w-[280px] h-[280px] relative">
            <div className="absolute inset-0 blue-gradient rounded-full shadow-lg" />
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-contain rounded-full relative z-10"
            />
          </div>
        </motion.div>
      </div>

      {/* Services Cards */}
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");