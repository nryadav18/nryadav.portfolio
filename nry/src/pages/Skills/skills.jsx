import React from 'react';
import './skills.css';

const Skills = () => {
    const skills = [
        {
            date: "Frontend Development",
            title: "HTML, CSS, JS, React.Js",
            description: "With extensive experience in HTML, CSS, JavaScript, and React.js, I have successfully developed over 10 projects, including two live applications. My expertise spans crafting responsive, interactive, and visually appealing user interfaces with a focus on clean, maintainable code. I'm passionate about delivering intuitive user experiences, consistently refining my skills to stay at the forefront of front-end development.",
        },
        {
            date: "Backend & Database Development",
            title: "Express.Js, Node.Js, MongoDB, Firebase",
            description: "With a solid foundation in Express.js, Node.js, MongoDB, and Firebase, I have developed over 10 projects, including two live applications. My backend expertise allows me to build scalable, secure, and efficient server architectures, integrating seamlessly with both front-end interfaces and databases. Driven by a commitment to full-stack proficiency, I continually advance my skills to deliver robust, end-to-end web solutions.",
        },
        {
            date: "Programming Languages",
            title: "C++, C, Python, Java",
            description: "I possess a solid understanding of C++, C, Python, and Java, with a strong focus on Object-Oriented Programming (OOP) and Data Structures and Algorithms (DSA) utilizing C++. My expertise in the C++ Standard Template Library (STL) enables me to implement efficient algorithms and data handling techniques. Committed to continuous learning, I thrive on tackling complex programming challenges and delivering optimized solutions across multiple programming languages.",
        },
    ];

    return (
        <div className="skills" id='Skills'>
            <div className="stitle">My <span>Skills</span></div>
            <div className="timeline">
                {skills.map((skill, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                        <div className="timeline-content">
                            <div className="timeline-date">{skill.date}</div>
                            <h3 style={{lineHeight:'1.7rem'}}>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                ))}
                <div className="timeline-line"></div>
            </div>
        </div>
    );
};

export default Skills;
