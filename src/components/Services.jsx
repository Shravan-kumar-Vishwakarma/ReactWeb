import React from "react";

function Services() {
  return (
    <>
      <div
        className="text-3xl flex justify-center underline font-bold mt-8 font-roboto"
        id="Services"
      >
        Services
      </div>

      <div className=" flex  space-x-10 mt-8   mr-3 w-full h-full">
       
        <div className="bg-gray-300 shadow-xl  rounded-lg space-y-2 cursor-pointer w-full h-full"> 
          <i class=" text-4xl flex justify-center mt-3 fa-brands fa-aws "></i>
          <h1 className="text-2xl flex text-center justify-center font-semibold md: pt-0  w-full ">
            Web Development
          </h1>
          <p className="px-10  w-full h-full text-center">
          As a dedicated Web Developer, I specialize in creating dynamic and visually appealing
           websites tailored to meet your specific needs. From responsive design to seamless user experience. 
      
          </p>
          <button className="ml-72 px-4 py-1 border-2 bg-orange-600 rounded-full mb-8 hover:bg-orange-700  ">
            Check
          </button>
          <br/>
          <br/>
        </div>
        <div className="bg-gray-300 shadow-xl  rounded-lg space-y-2 cursor-pointer">
          <i class=" text-4xl flex justify-center mt-3 fa-solid fa-volcano"></i>
          <h1 className="text-2xl flex text-center justify-center font-semibold w-full">
            Java Developer
          </h1>
          <p className="px-10 text-center ">
          As Java developer, I offer a range of services including software development, 
          backend system architecture, and web application design. With a deep understanding of Java technologies,
      
          </p>
          <button className="ml-72 px-4 py-1 border-2 bg-orange-600 rounded-full p-6 hover:bg-orange-700 ">
            Check
          </button>
          <br/>
          <br/>
        </div>
      </div>
      {/* {Second} */}
      <div className="flex  space-x-10 mt-8    w-full h-full ">
      <div className="bg-gray-300 shadow-xl  rounded-lg space-y-2 cursor-pointer ">
          <i class=" text-4xl flex justify-center mt-3  fa-solid fa-server"></i>

          <h1 className="text-2xl flex text-center justify-center font-semibold font-roboto">
            Backend Developer
          </h1>
          <p className="px-10 text-center w-full ">
          Specializing in backend development,I provide tailored solutions to optimize functionality.From database design to server-side scripting, I ensure seamless integration and backend architecture.Explore my portfolio to discover how I can enhance your software systems.
          </p>
          <button 
            
            className="ml-72 px-4 py-1 border-2 bg-orange-600 rounded-full mb-8  hover:bg-orange-700  ">
            {" "}
            Check
          </button>
          <br/>
        </div>

        <div className="bg-gray-300 shadow-xl  rounded-lg space-y-2 cursor-pointer">
          <i class=" text-4xl flex justify-center mt-3 fa-brands fa-react"></i>
          <h1 className="text-2xl flex text-center justify-center font-semibold">
            React js
          </h1>
          <p className="px-10 w-full flex ">
          As a React.js developer, I specialize in crafting dynamic and interactive user interfaces that elevate your web applications. From component-based design to state management, Explore my portfolio to see how I can enhance your projects with React.js development.
          </p>
          <button className="ml-72 px-4 py-1 border-2 bg-orange-600 rounded-full flex mb-3  hover:bg-orange-700 ">
            Check
          </button>
          <br/>
        </div>
      </div>
      
    </>
  );
}

export default Services;
