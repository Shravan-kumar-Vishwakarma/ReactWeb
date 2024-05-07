import React from "react";
import banner from "../assist/shravan.png";
import bannerimage from "../assist/raj.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full-stack Developer",
        "Back-end Developer",
        "Front-end Developer",
        "SoftWare Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 150,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerimage})`,
        height: 610,
      }}
      className="flex items-center font-roboto w-full h-full  mt-10 rounded-xl .relative"
      id="hero"
    >
       <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        // background: {
        //     color: {
        //         value: "#0000",
        //     },
        // },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}
/>
     
       
      <div className=" w-full flex justify-center ml-20  ">
        <div className="w-full ms-20   ">
          <h3 className="text-3xl font-semibold flex">Hi, I am</h3>
          <h1 className="text-2xl font-bold  ">Shravan Kumar</h1>
          <h2 className="text-2xl     ">
            {" "}
            I am <span className="font-semibold  " ref={el}></span>
          </h2>
          <p className="mt-1 text-lg justify-center ">
          A skilled Software Developer, Backend Developer, and Web Developer, proficient in crafting and managing websites to ensure overall success.
          </p>
          <div className="icons space-x-6 mt-2 rounded-full bg ">
            <a href="https://www.facebook.com/profile.php?id=100010312812449" className=" cursor-pointer">
              <i className="fa-brands text-3xl shadow bg-slate-300 rounded-full px-2 py-2  hover:bg-orange-700  fa-facebook"></i>
            </a>

            <a href="https://www.instagram.com/shravankumarvishwakarma7979/" className=" cursor-pointer size-10">
              <i class="fa-brands text-3xl shadow bg-slate-300 rounded-full px-2 py-2  hover:bg-orange-700 md:text-sm  fa-instagram"></i>
            </a>

            <a href="www.linkedin.com/in/shravan-kumar-vishwakarma" className=" cursor-pointer">
              <i class="fa-brands text-3xl shadow bg-slate-300 rounded-full px-2 py-2  hover:bg-orange-700   fa-linkedin"></i>
            </a>
            <a href="https://github.com/Shravan-kumar-Vishwakarma"   className=" cursor-pointer">
              <i class="fa-brands text-3xl shadow bg-slate-300 rounded-full px-2 py-2  hover:bg-orange-700  fa-github"></i>
            </a>
          </div>
          <br />
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className=" text-1xl px-6 py-3 bg-orange-600 rounded-full  shadow   hover:bg-orange-700 mt-3  "
            href="/Contact"
          >
            {" "}
            Contact Me
          </Link>
        </div>
      </div>

      <div className=" w-full  flex justify-center  ">
        <img className=" size-80 w-fit rounded-full  " src={banner} />
      </div>
    </div>
  );
}
export default Home;
