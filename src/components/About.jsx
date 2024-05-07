import React from "react";
import images from "../assist/shravan.png";
import bannerimage from '../assist/kumar.jpg';


function About() {
  return (
    <>
      <div className="text-3xl flex justify-center mt-12  underline font-bold font-roboto scroll-smooth " id="about">About Me</div>

      <div style={
            {
                backgroundImage: `url(${bannerimage})` ,
                height: 550
                }
                } className="flex text-white mt-6 px-4 rounded-xl">
        <div  className=" h-40 w-auto rounded-3xl px-10     ">
          {/* <img className=""    src={sawn}/> */}
          <img  className=" mt-20 shadow rounded-full " src={images} />
        </div>
        <div className="  ">
          <h1 className="text-2xl  font-bold mt-32 px-10 shadow">Full-stack developer</h1>
          <br/>

          <p className="px-10 shadow  font-roboto text-xl"> 
          I am a recent graduate enthusiastic about the intersection of electronics and software development. My academic background in Electronics and Communication Engineering provides me with a strong foundation for understanding complex systems. My passion lies in Java programming, and I am currently honing my skills as a Spring Boot Developer.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
