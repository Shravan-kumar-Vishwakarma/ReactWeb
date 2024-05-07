// import "./App.css";
// import About from "./components/About";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useEffect,useState } from "react";

// function App() {

//     const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('[id]'); // Select all elements with IDs

//       for (const section of sections) {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         const windowTop = window.pageYOffset;

//         if (windowTop >= sectionTop - sectionHeight / 3 && windowTop < sectionTop + sectionHeight * 2 / 3) {
//           setActiveSection(section.id);
//           break; // Stop iterating after finding the active section
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll); // Add event listener

//     return () => window.removeEventListener('scroll', handleScroll); // Cleanup
//   }, []);

//   const handleNavigationClick = (sectionId) => {
//     const targetSection = document.getElementById(sectionId);
//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>

//           <Route
//             path="/"
//             element={
//               <>
//                 <Header />
//                 <Home id="hero" />
//                 <About id="about" />
//                 <Skills id="skills" />
//                 <Services id="Services" />
//                 <Projects id="projects" />
//                 <Contact id="contact" />
//               </>
//             }
//           />
          
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;




import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import  {useEffect, useState}  from "react";
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]"); // Select all elements with IDs

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowTop = window.pageYOffset;

        if (
          windowTop >= sectionTop - sectionHeight / 5 &&
          windowTop < sectionTop + (sectionHeight * 2) / 3
        ) {
          setActiveSection(section.id);
          break; // Stop iterating after finding the active section
        }
      }
    };

    window.addEventListener("scroll", handleScroll); // Add event listener

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const handleNavigationClick = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home id="hero" />
                <About id="about" />
                <Skills id="skills" />
                <Services id="Services" />
                <Projects id="projects" />
                <Contact id="contact" />
              </>
            }
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
