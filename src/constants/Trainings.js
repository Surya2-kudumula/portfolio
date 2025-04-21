
import {

    meta,
    cpp,
    dsa,
} from "../assets";
const trainings = [
    {
        name: "Meta Android Developer Certificate",
        description:
            "Completed a professional certification from Meta via Coursera. Gained hands-on experience in Android app development, Kotlin, and UI/UX principles with real-world projects.",
        tags: [
            { name: "android", color: "blue-text-gradient" },
            { name: "kotlin", color: "green-text-gradient" },
            { name: "coursera", color: "pink-text-gradient" },
        ],
        image: meta, // replace with your Meta certificate image or a placeholder
        source_code_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/OOON42JZKMEF", // replace with actual link
    },
    {
        name: "Algorithms Specialization",
        description:
            "Learned foundational and advanced algorithms including divide-and-conquer, dynamic programming, and graph algorithms through Stanford's Coursera course.",
        tags: [
            { name: "algorithms", color: "blue-text-gradient" },
            { name: "datastructures", color: "green-text-gradient" },
            { name: "cpp", color: "pink-text-gradient" },
        ],
        image: dsa, // use a relevant image
        source_code_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/JUBMKL4Y64PG", // replace with actual link
    },
    {
        name: "Programming in C++: A Hands-on Introduction",
        description:
            "A comprehensive specialization for beginners covering core C++ concepts, object-oriented programming, memory management, integration with Python/Java, and performance optimization. Built a strong foundation to transition into domains like Data Science and AI.",
        tags: [
            { name: "cpp", color: "blue-text-gradient" },
            { name: "oopl", color: "green-text-gradient" },
            { name: "debugging", color: "pink-text-gradient" },
        ],
        image: cpp, // use appropriate training image
        source_code_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/Z25AP2U4ZB5U", // replace with actual or generic link
    },
];

export { trainings };