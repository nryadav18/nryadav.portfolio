import React from 'react';
import './certifications.css';
import JS from "../../assets/Certifications/JS.pdf"
import Java from "../../assets/Certifications/Java.pdf"
import C from "../../assets/Certifications/C_cisco.pdf"
import CM from "../../assets/Certifications/CM.pdf"
import Cpp from "../../assets/Certifications/Cpp.pdf"
import Dbms from "../../assets/Certifications/Dbms.pdf"
import DSA from "../../assets/Certifications/DSA_Intern.pdf"
import Html from "../../assets/Certifications/Html_Css.pdf"
import Python from "../../assets/Certifications/Python.pdf"


function Certifications() {
    const certifications = [
        {
            id: 1,
            name: "JavaScript Essentials",
            company: "HackerRank",
            date: "23 Sep 2024",
            domain: "Web Development",
            file: JS,
        },
        {
            id: 2,
            name: "Java Programming Language",
            company: "Pearson IT Specialist",
            date: "6 July 2024",
            domain: "Programming",
            file: Java,
        },
        {
            id: 3,
            name: "DSA Intern",
            company: "Technical Hub",
            date: "15 June 2024",
            domain: "DS and Algo",
            file: DSA,
        },
        {
            id: 4,
            name: "GFG Campus Ambassador",
            company: "GeeksforGeeks",
            date: "19 April 2024",
            domain: "Campus Ambassador",
            file: CM,
        },
        {
            id: 5,
            name: "Database Foundationals",
            company: "Oracle",
            date: "29 March 2024",
            domain: "Database Management",
            file: Dbms,
        },
        {
            id: 6,
            name: "C++ Programming Language",
            company: "Cisco",
            date: "29 Oct 2023",
            domain: "Programming",
            file: Cpp,
        },
        {
            id: 7,
            name: "Python Programming Language",
            company: "Pearson IT Specialist",
            date: "10 May 2023",
            domain: "Programming",
            file: Python,
        },
        {
            id: 8,
            name: "HTML & CSS Certifications",
            company: "Pearson IT Specialist",
            date: "8 May 2023",
            domain: "Web Development",
            file: Html,
        },
        {
            id: 9,
            name: "C Programming Language",
            company: "Cisco",
            date: "22 Jan 2023",
            domain: "Programming",
            file: C,
        }
    ];
    

    const handleDownload = (file) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="certifications" id="Certifications">
            <div className="ctitle">My <span>Certifications</span></div>
            <div className="my-certifications">
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Certification Name</th>
                                <th>Certified By</th>
                                <th>Date of Completion</th>
                                <th>Domain</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certifications.map((cert, index) => (
                                <tr key={cert.id}>
                                    <td>{index + 1}</td>
                                    <td>{cert.name}</td>
                                    <td>{cert.company}</td>
                                    <td>{cert.date}</td>
                                    <td>{cert.domain}</td>
                                    <td>
                                        <button onClick={() => handleDownload(cert.file)}>
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Certifications;
