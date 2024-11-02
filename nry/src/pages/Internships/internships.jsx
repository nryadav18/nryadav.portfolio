import React from 'react';
import './internships.css';
import DSA from "../../assets/dsa_intern.jpg"
import CM from "../../assets/gfg_cm.jpg"
import CN from "../../assets/CN.jpg"
import BT from "../../assets/best_trainee.jpeg"


function Internships() {
    const internships = [
        {
            title: 'GeeksforGeeks Campus Ambassador',
            startDate: 'April 2024',
            endDate: 'March 2025',
            duration: '1 Year',
            description: 'Promoted Coding culture, Organized Workshops, and Increased participation in GeeksforGeeks events.',
            certificateLink: 'https://drive.google.com/file/d/1RbOJwwjgDYMpjlrlZfScYOiW6yXJNpyI/view?usp=drive_link',
            backgroundImage : CM,
        },
        {
            title: 'Data Structures Intern',
            startDate: 'February 2024',
            endDate: 'June 2023',
            duration: '5 months',
            description: 'Worked on Data Structures and Algorithms, helped Junior Student Friends enhance coding skills.',
            certificateLink: 'https://drive.google.com/file/d/1bOtZTiXaFy-KGGQBbOKYX-3qLRtJ20t2/view?usp=drive_link',
            backgroundImage : DSA,
        },
        {
            title: 'Organised Workshop on Online Coding Platforms',
            startDate: 'November 2023',
            endDate: 'Novermber 2023',
            duration: '1 month',
            description: 'Conducted a Coding Workshop at Aditya University for Bright Juniors on Online Coding Platforms',
            certificateLink: 'https://www.linkedin.com/posts/nryadav18_codingworkshop-techeducation-teamleadership-activity-7135097066065723392-WFg7?utm_source=share&utm_medium=member_desktop',
            backgroundImage : CN,
        },
        {
            title: 'Best and Consistent Trainee of the Month',
            startDate: 'August 2024',
            endDate: 'August 2024',
            duration: '1 month',
            description: 'Consistent Understanding of Core Programming, Development concepts along with 100% Attendance made me the Best Trianee of the Month',
            certificateLink: 'https://www.linkedin.com/posts/technicalhub_ignitecoder-skillupcoder-becomecoder-activity-7237343792238874625-hYVM?utm_source=share&utm_medium=member_desktop',
            backgroundImage : BT,
        },
    ];

    return (
        <div className="internships" id="Internships">
            <div className="ititle">My <span>Internships</span> & <span>Works</span></div>
            <div className="internship-cards">
                {internships.map((internship, index) => (
                    <div className="internship-card" key={index}>
                        <img src={internship.backgroundImage} alt="Internship Background" className="background-img" />
                        <div className="card-content">
                            <h3>{internship.title}</h3>
                            <div className="hover-details">
                                <p><strong>Start Date:</strong> {internship.startDate}</p>
                                <p><strong>End Date:</strong> {internship.endDate}</p>
                                <p><strong>Duration:</strong> {internship.duration}</p>
                                <p>{internship.description}</p>
                                <a href={internship.certificateLink} target="_blank" rel="noopener noreferrer" className="view-certificate-btn">View Certificate</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Internships;
