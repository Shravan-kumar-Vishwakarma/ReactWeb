import React, { useState } from 'react';
import resume from '../assist/SHRAVANKUMAR.pdf';
import {Link} from 'react-scroll';




function Header() {

  

  const onButtonClick=()=>{
    const pdfUrl = "/SHRAVANKUMAR.pdf"; // Assuming the PDF file is in the public directory
  const link = document.createElement("SHRAVAN");
  link.href = pdfUrl;
  
  }


  const [brandName,setbrandName]=useState("Shravan Kumar");
  // const [menulink,setmenulink]=useState([
  //   {
  //     title:"Home",
  //     link:"/",
  //     id:1,
  //   },
  //   {
  //     title:"About",
  //     link:"/About",
  //     id:2,
  //   },
  //   {
  //     title:"Skills",
  //     link:"/Skills",
  //     id:3,
  //   },
  //   {
  //     title:"Services",
  //     link:"/Services",
  //     id:4,
  //   },
    
  //   {
  //     title:"Projects",
  //     link:"/Projects",
  //     id:5,
  //   },
    
    
  //   {
  //     title:"Contact",
  //     link:"/Contact",
  //     id:6,
  //   }
  // ]);

  const[click,setClick]=useState(false);
  const handleClick = () => setClick(!click);

  const closemenu=()=>setClick(false);

  return (
    <div    className=" h-20 main flex justify-between items-center px-14 rounded-xl
     bg-black text-white font-roboto  sm:bg-red-700 md:bg-yellow-400 lg:bg-blue-700 fixed w-full overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className='text-2xl font-bold '>
            <h1 >{brandName}</h1>
        </div>

       
          
        <div className='space-x-6 text-1xl '>
        {/* {menulink.map(link => (
          <Link   className='hover:text-orange-700'    key={link.id} to={link.link}>{link.title}</Link>
        ))} */}
        
            {/* <a href='/Home'  className='hover:text-orange-700'>Home</a>
            <a href='/About' className='hover:text-orange-700'>About</a>
            <a href='/Skills' className='hover:text-orange-700'>Skills</a>
            <a href='/Services' className='hover:text-orange-700'>Services</a>
            <a href='/projects' className='hover:text-orange-700'>Projects</a>
            <a href='/Timeline' className='hover:text-orange-700'>Timeline</a>
            <a href='/testimonial' className='hover:text-orange-700'>Testimonial</a>
            <a href='/Contact' className='hover:text-orange-700'>Contact</a> */}
            <nav className='space-x-6 text-1xl '>
            <Link to="hero" spy={true} smooth={true} offset={-80} duration={500} onClick={closemenu} className='cursor-pointer hover:text-orange-700'>Home</Link>
            <Link to="about"spy={true} smooth={true} offset={-80} duration={500} onClick={closemenu} className='cursor-pointer hover:text-orange-700'>About</Link>
            <Link to="skills" spy={true} smooth={true} offset={-80} duration={500} onClick={closemenu} className='cursor-pointer hover:text-orange-700'>Skills</Link>
            <Link to="Services" spy={true} smooth={true} offset={-80} duration={500} onClick={closemenu} className='cursor-pointer hover:text-orange-700'>Services</Link>
            <Link to="projects"spy={true} smooth={true} offset={-80} duration={500} onClick={closemenu} className='cursor-pointer hover:text-orange-700'>Projects</Link>
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={closemenu} className='cursor-pointer hover:text-orange-700'>Contact</Link>
        </nav>
           
        </div>

        <a href={resume} download={resume}  className='   justify-center  py-2 px-3  bg-orange-700 shadow rounded-full text-white cursor-pointer text-0.5xl hover:bg-orange-600 md:px-1-py-1 text-center ml-5 flex'
         onClick={onButtonClick} >
          Download CV 
        </a>

    </div>
  )
}

export default Header;