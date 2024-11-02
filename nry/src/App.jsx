import { useState } from 'react'
import './App.css'
import Header from './pages/Header/header'
import Mine from './pages/Mine/mine'
import Projects from './pages/Projects/projects'
import Internships from './pages/Internships/internships'
import Skills from './pages/Skills/skills'
import Certifications from './pages/Certifications/certifications'
import Contact from './pages/Contact/contact'

function App() {

  return (
    <>
      <Header/>
      <Mine/>
      <Projects/>
      <Internships/>
      <Skills/>
      <Certifications/>
      <Contact/>
    </>
  )
}

export default App
