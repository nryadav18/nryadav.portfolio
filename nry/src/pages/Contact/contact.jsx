import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name) {
            toast.error('Name is required');
        }
        if (!formData.email) {
            toast.error('Email is required');
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error('Invalid email format');
        }
        if (!formData.message) {
            toast.error('Message is required');
        }

        if (formData.name && formData.email && (/\S+@\S+\.\S+/.test(formData.email)) && formData.message) {
            toast('📨 Wait! We are Sending Your Message..', {autoClose: 2500,})
            axios.post("https://nry-backend.vercel.app/contact-me",formData)
            .then(succ=>{
                console.log("Thanks for Sending Your Valuable Message")
                toast.success('Message sent successfully!');
            })
            .catch(err=>{
                console.log(err) 
                toast.error('Network Error!');
            })
            setFormData({name:'',email:'',message:''});
        }
    };

    return (
        <div className="contact-form" id='Contact'>
            <div className="cftitle">Contact <span>Me</span></div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-field">
                        <label>Your Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label>Your Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="input-field">
                    <label>Your Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce/>
        </div>
    );
}

export default Contact;
