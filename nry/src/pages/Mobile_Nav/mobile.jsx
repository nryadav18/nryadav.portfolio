import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { personOutline, codeSharp, desktopSharp, sparklesSharp, serverSharp, documentSharp } from 'ionicons/icons';
import { FaCode } from "react-icons/fa";
import './mobile.css';

const menuItems = [
    { id: 0, label: 'Bio', icon: sparklesSharp , route : "#Bio" },
    { id: 1, label: 'Projects', icon: codeSharp , route : "#Projects" },
    { id: 2, label: 'Internships', icon: desktopSharp , route : "#Internships" },
    { id: 3, label: 'Skills', icon: serverSharp , route : "#Skills" },
    { id: 4, label: 'Certifications', icon: documentSharp , route : "#Certifications" },
    { id: 5, label: 'Contact', icon: personOutline , route : "#Contact" },
];

const Navigation = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleActiveLink = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="navigation">
            <ul>
                {menuItems.map((item, index) => (
                    <li
                        key={item.id}
                        className={`list ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleActiveLink(index)}
                    >
                        <a href={item.route}>
                            <span className="icon">
                                <IonIcon icon={item.icon} />
                            </span>
                            <span className="text">{item.label}</span>
                        </a>
                    </li>
                ))}
                <div className="indicator" style={{ transform: `translateX(${activeIndex * 100}%)` }}></div>
            </ul>
        </div>
    );
};

export default Navigation;
