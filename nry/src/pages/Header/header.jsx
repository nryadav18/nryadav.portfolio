import React, { useState } from 'react'
import './header.css'
import logo from "../../assets/nrylogo.png"
import { MdArrowForwardIos } from "react-icons/md";
import Navigation from '../Mobile_Nav/mobile';

function Header() {

    const navs = ["Projects", "Internships", "Skills", "Certifications", "Contact"]
    const [icon, setIcon] = useState(false)

    return (
        (window.innerWidth <= 600) ?
            <Navigation/>
            :
            <div className="header">
                <div className="htb">
                    <MdArrowForwardIos className='hsidebar' />
                </div>
                <div className="hlogo">
                    <img src={logo} alt="" />
                </div>
                <div className="hnavs">
                    {
                        navs.map((item, key) => {
                            return (
                                <div className="hnav-links" key={key}>
                                    <a href={`#${item}`}>{item}</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default Header