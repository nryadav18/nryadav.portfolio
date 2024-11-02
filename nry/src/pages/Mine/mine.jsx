import React from 'react';
import './mine.css';
import me from "../../assets/FSDRN1.png";
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Mine() {
    const dt = ["Full Stack Developer", "Competitive Programmer", "Website Designer"];

    return (
        <div className="mine" id='Bio'>
            <div className="empty"></div>
            <div className="mtitle">My <span>Portfolio</span></div>
            <div className="mbody">
                <div className="mtext">
                    <p className='mp1'>Hey, Hope You are doing Great!</p>
                    <p className='mp2'>This is:</p>
                    <p className='mp3'>N R YADAV</p>
                    <div className="dynamic">
                        I am a <Typewriter
                            words={dt}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={15}
                            delaySpeed={1500}
                        />
                    </div>
                    <p className='mp4'>I'm a skilled Full Stack Developer and competitive programmer with a strong command of HTML5, CSS, JavaScript, Bootstrap, React.js, Express.js, and MongoDB. I bring experience in C++, C, Python, and Java, alongside an average typing speed of 65 WPM, allowing me to work efficiently to client needs.</p>
                    <div className="micons">
                        <div className="mpure-icons">
                            <a href="https://www.linkedin.com/in/nryadav18/" target='_blank'><FaLinkedinIn style={{cursor:'pointer',zIndex:'2'}}/></a>
                            <a href="https://github.com/nryadav18" target='_blank'><FaGithub style={{cursor:'pointer',zIndex:'2'}}/></a>
                            <a href="mailto:cserajeswaryadav@gmail.com" target='_blank'><MdEmail style={{cursor:'pointer',zIndex:'2'}}/></a>
                        </div>
                        <div className="mgs">
                            <div className="gs"><a href="#Projects">Get Started</a></div>
                        </div>
                    </div>
                </div>
                <div className="mpic">
                    <div className="pic">
                        <img src={me} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mine;
