import React, { useState } from "react";
import imagess from '../assist/contact.png';

function Contact() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to a backend server
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
   
    <div className=" bg-slate-800 mt-10 flex rounded-xl " id="contact">
      
    <div className="  ">
        <img className="pt-16 ml-16 pb-16 rounded-2xl " src={imagess}></img>
      </div>
   
      
      
      <div className="  pl-5   ">
      <h2 className=" justify-center text-3xl mt-8 underline font-bold text-white pl-16 font-roboto">Contact Me</h2>
        <form onSubmit={handleSubmit} className=" space-x-8  ">
          <div className="flex space-x-10 pl-9 mt-24">
          <div className="">
            <h2
              className="text-1xl font-semibold  text-white "
              
            >
              Name
            </h2>
            <input
              type="text"
              className=" h-8 w-72 rounded-md pl-3"
              id="name"
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="  ">
            <h2
              className="text-1xl font-semibold  text-white"
              
            >
              Email
            </h2>
            <input
              type="email"
              className=" h-8 w-72 rounded-md pl-3"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          </div>
          <div className="pt-5 ">
            <h2
              className=" font-semibold text-white "
              
            >
              Message
            </h2>
            <textarea
           
              id="message"
              className="border border-gray-300 rounded-md pt-5 w-full h-32 resize-none pl-3"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-end">
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg mt-5  "
            type="submit"
          >
            Submit
          </button>
          </div>
          
         <br/>
         
        </form>
        
      </div>
     
    </div>
    
    </>
  
  );
}

export default Contact;
