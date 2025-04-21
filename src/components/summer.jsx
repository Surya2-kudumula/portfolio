import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { summerTrainings } from "../constants/summer";
import { fadeIn, textVariant } from "../utils/motion";

const SummerCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full bg-tertiary rounded-2xl shadow-lg overflow-hidden mb-8"
        >
            <div className="flex flex-col md:flex-row">
                {/* Image on left */}
                <motion.div 
                    className="w-full md:w-1/3 h-64 relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <motion.div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-black bg-opacity-70 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            title="View Certificate"
                        >
                            <img src={github} alt="source code" className="w-6 h-6" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content on right */}
                <motion.div 
                    className="w-full md:w-2/3 p-6"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <h3 className="text-white font-bold text-2xl mb-3 hover:text-primary transition-colors">
                        {name}
                    </h3>
                    <p className="text-secondary text-base mb-4">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <motion.span
                                key={`${name}-${tag.name}`}
                                whileHover={{ scale: 1.1 }}
                                className={`text-sm px-3 py-1 rounded-full ${tag.color} bg-opacity-20 inline-block`}
                            >
                                #{tag.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Summer = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Skill Enhancement</p>
                <h2 className={`${styles.sectionHeadText}`}>Training</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                During this training, I gained practical skills in C++ programming, problem-solving, and real-world software development under the mentorship of Cipher Schools. This experience significantly strengthened my programming foundation and boosted my confidence.
            </motion.p>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-12 space-y-8"
            >
                {summerTrainings.map((training, index) => (
                    <SummerCard key={`summer-${index}`} index={index} {...training} />
                ))}
            </motion.div>
        </>
    );
};

export default SectionWrapper(Summer, "summer");