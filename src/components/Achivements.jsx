import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { github, leetcode, hackerrank } from "../assets";

// Achievements data
const achievements = [
    {
        name: "LeetCode Biweekly Contest 96",
        description:
            "Secured a Global Rank of 783 out of 21,000+ participants, showcasing competitive programming skills and efficient algorithm design.",
        tags: [
            { name: "leetcode", color: "orange-text-gradient" },
            { name: "contest", color: "blue-text-gradient" },
            { name: "algorithms", color: "green-text-gradient" },
        ],
        image: leetcode,
        source_code_link: "https://leetcode.com/kudumulasurya/",
    },
    {
        name: "HackerRank C++ 5-Star",
        description:
            "Achieved a 5-star rating in C++ on HackerRank, reflecting strong foundational and advanced programming knowledge.",
        tags: [
            { name: "cpp", color: "blue-text-gradient" },
            { name: "hackerrank", color: "green-text-gradient" },
            { name: "problemsolving", color: "pink-text-gradient" },
        ],
        image: hackerrank,
        source_code_link: "https://www.hackerrank.com/kudumulasurya",
    },
];

// Achievement Card
const AchievementCard = ({ index, name, description, tags, image, source_code_link }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="w-full bg-tertiary p-5 rounded-2xl flex flex-col sm:flex-row gap-5 items-center"
    >
        <Tilt
            className="w-full sm:w-[230px] h-[200px] flex-shrink-0"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={450}
        >
            <div className="relative w-full h-full group">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                        title="View Link"
                    >
                        <img
                            src={github}
                            alt="source"
                            className="w-1/2 h-1/2 object-contain"
                        />
                    </div>
                </div>
            </div>
        </Tilt>

        <div className="flex-1">
            <h3 className="text-white font-bold text-[22px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </div>
    </motion.div>
);

// Achievements Section
const Achievements = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Highlights</p>
                <h2 className={styles.sectionHeadText}>Achievements</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                These achievements reflect my growth through consistent learning,
                competition, and real-world application of my skills.
            </motion.p>

            <div className="mt-16 flex flex-col gap-10">
                {achievements.map((achievement, index) => (
                    <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Achievements, "achievements");
