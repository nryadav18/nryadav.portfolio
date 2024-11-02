import React from 'react';
import Slider from "react-slick";
import './projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineFestival } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";

function Projects() {
    const projects = [
        {
            title: 'GPS Tracking Web Application',
            technologies: 'React.js, Express.js and MongoDB',
            description: 'The GPS Tracking Web Application is designed to offer users seamless access to real-time bus tracking, reliable navigation, and a high-UI experience. With the Get Directions to My Bus page, users can locate the closest bus in real-time and receive accurate ETAs, while the Live Tracking feature keeps them informed of the buses exact location and route progression. the Home Page consists of featured notifications, and quick-access links, ensuring users can effortlessly navigate and make use of all application features.',
            logo: <IoLocationSharp />,
            backgroundImage: 'path_to_sample_image',
            link: ''
        },
        {
            title: 'Food Recipe Finder Website',
            technologies: 'HTML5, CSS, Bootstrap and JS',
            description: 'It is a Responsive,  Full Stack Website named Food Recipe Finder, with 6 dynamic pages. Utilized Local and Session Storage efficiently for user data, recipe view data management. Created Login/Sign-Up, Home, Recipe List, View, Wish-list, and Search pages.',
            logo: <MdFoodBank />,
            backgroundImage: 'path_to_sample_image',
            link: 'https://github.com/nryadav18/FoodRecipeFinder'
        },
        {
            title: 'College Fest Web App',
            technologies: 'React.js, Node.js and MongoDB',
            description: 'The Veda 2024 website, which I developed for Aditya University, is a fully responsive and interactive platform that provides comprehensive information about the Veda 2024 event. It features event details, schedules, and a user-friendly registration system, all wrapped in a visually appealing design. The site is optimized for both performance and accessibility, ensuring a seamless experience for users across various devices.',
            logo: <MdOutlineFestival />,
            backgroundImage: 'path_to_sample_image',
            link: 'https://adityauniversity.in/veda2024'
        },
        {
            title: 'Light Products Page',
            technologies: 'HTML5, CSS, JS and Bootstrap',
            description: 'The Raj Lights website offers a visually appealing and user-friendly experience with vibrant colors that beautifully showcase their lighting products. Navigation is smooth, allowing visitors to easily explore different lighting options and details. Overall, the site effectively captures attention and presents the brand in a modern, professional way.',
            logo: <FaLightbulb />,
            backgroundImage: 'path_to_sample_image',
            link: 'https://nryadav18.github.io/Raj-Lights/'
        },
        {
            title: 'App Developer Contact Website',
            technologies: 'HTML5, CSS, JavaScript and Bootstrap',
            description: 'RajAppBuilders is a professional website showcasing a comprehensive portfolio of construction and development projects. The site highlights expertise in building, design, and project management, with an accessible layout and user-friendly navigation.',
            logo: <FaReact />,
            backgroundImage: 'path_to_sample_image',
            link: 'https://nryadav18.github.io/RajAppBuilders/'
        },
    ];

    const CustomPrevArrow = ({ onClick }) => (
        <div className="custom-arrow custom-prev" onClick={onClick}>
            &#10094;
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-arrow custom-next" onClick={onClick}>
            &#10095;
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        autoplay : true,
        autplaySpped : 2500,
        pauseOnHover: true,
        swipeToSlide: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div id='Projects' className='projects'>
            <div className="ptitle">My <span>Projects</span></div>
            <div className="slider-container">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" style={{ backgroundImage: `url(${project.backgroundImage})` }}>
                            <div className="project-info">
                                <div className="project-logo">
                                    {project.logo}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-tech">{project.technologies}</p>
                                <p className="project-description">{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="neon-button">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Projects;
