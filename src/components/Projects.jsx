import React, { useState } from 'react';
import todo from '../assist/todo.png';
import backend from '../assist/backend.png';
import doctor from '../assist/doctor.svg';

function Projects() {

  // Initialize state to hold project data
  const [projects, setProjects] = useState([
    {
      title: 'TODO APP',
      description: ' The To-Do App exemplifies my proficiency in React.js and JavaScript, featuring CRUD operations for seamless task management and organization',
      imageUrl: todo,
    
      links: {
        github: 'https://github.com/Shravan-kumar-Vishwakarma/TODOAPP.git',
        demo: 'https://example.com/todo-app-demo',
      },
      id: 1,
    },
    {
      title: 'Instagram ',
      description: '. This project demonstrates my skills in Java Spring Boot,Hibernate JPA, REST API development, testing with Postman, and Swagger documentation., ',
      imageUrl: backend,
     
      links: {
        github: 'https://github.com/Shravan-kumar-Vishwakarma/Instagram.git',
        demo: 'https://example.com/backend-demo',
      },
      id: 2,
    },
    {
      title: 'Doctor Booking App',
      description: 'The Doctor Booking App showcases my expertise in Java Spring Boot, Hibernate JPA,REST API development,Postman testing,and Swagger documentation ',
      imageUrl: doctor,
  
      links: {
        github: 'https://github.com/Shravan-kumar-Vishwakarma/DocterApp.git',
        demo: 'https://example.com/todo-app-demo',
      },
      id: 3,
    },
    // Add more projects as needed
  ]);

  return (
    <>
      <div className='text-3xl flex justify-center underline font-bold mt-8 space-x-5 font-roboto ' id='projects'>Projects</div>

      <div className='main_project flex space-x-10  justify-center rounded-xl mt-8 w-full h-full '>
        {projects.map(project => (
          <div className='bg-gray-200 rounded-xl border-2 border-gray-300 cursor-text hover:scale-110 transition duration-300  ' key={project.id}>
            
            <img className='text-1xl ml-16 w-72 h-72 mt-8 img-underline   ' src={project.imageUrl} alt={project.title} />
            <h2 className='flex justify-center text-2xl mt-3 font-semibold   '>{project.title}</h2>
            <p className='text-center ml-4 mr-4 mt-4  '>{project.description}</p>
            
            <div className='ml-8 space-x-5 mt-3 pl-32  '>
           
              <a className='border-2  px-4 py-1.5 p-8 rounded-full bg-orange-600 space-x-2 hover:bg-orange-700  '  href={project.links.github} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
               <span className='space-x-3 '> github </span>

              </a>
              
            </div>
            <br />
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects;
