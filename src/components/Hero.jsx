import { motion } from "framer-motion";


import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from 'typewriter-effect';
import React from "react";



const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span>Hi, I'm &nbsp;</span>
            <span className="inline-block">
              <Typewriter
                options={{
                  strings: ['<span class="text-[#915EFF]">Kudumula Surya</span>', '<span class="text-[#915EFF]">Kudumula Surya</span>'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>

          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Android Developer | Data Analyst | Web Developer <br className='sm:block hidden' />
            Building user-centric apps, dashboards, and digital experiences.
          </p>
        </div>
      </div>
      <div className="mt-10"></div>

      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
