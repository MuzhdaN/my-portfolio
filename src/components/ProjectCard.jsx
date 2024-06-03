import { FaGithub } from 'react-icons/fa6';
import { CiLocationArrow1 } from "react-icons/ci";
import logo from '../assets/react.svg';
import { useState } from 'react';

const ProjectCard = ({ project, darkMode }) => {

  const [showFullDescription, setShowFullDesciption] = useState(false);

  let description = project.description;

  if (!showFullDescription) {
    description = description.substring(0,90) + "...";
  }

  return (
    <div className={`w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-4 ${darkMode ? 'dark' : ''}`}>
      <div className={`container-xl lg:container bg-white rounded-lg shadow-lg relative m-5 p-6 ${darkMode ? 'dark:bg-gray-800 text-white' : ''}`}>
        <img src={project.imageSrc} alt="project title" className='mb-5' />

        <h2 className={`text-xl font-bold text-indigo-500 my-2 text-center ${darkMode ? 'text-white' : ''}`}>
          {project.title}
        </h2>

        <p className={`${darkMode ? 'text-gray-300' : ''} mb-1`}>
          {description} 
        </p>

        <button 
              onClick={() => setShowFullDesciption((prevState) => !prevState)} 
              className="text-indigo-700 mb-3 hover:text-indigo-900"
            >
              {showFullDescription ? 'less' : 'More'}
            </button>

        <ul className='flex flex-row flex-wrap justify-center gap-4 mb-5'>
          {project.skills.map((skill, index) => (
            <li key={index} className={`border-dashed border-2 border-indigo-600 px-3 ${darkMode ? 'border-gray-600' : ''}`}>
              {skill}
            </li>
          ))}
        </ul>

        <div className='flex justify-between'>
          <a href={project.source} target="_blank" rel="noopener noreferrer">
            <FaGithub className={`w-10 h-5 hover:h-6 hover:text-indigo-600 hover:cursor-pointer ${darkMode ? 'text-white' : ''}`} />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <CiLocationArrow1 className={`w-10 h-5 hover:h-6 hover:text-indigo-600 hover:cursor-pointer hover:font-extrabold ${darkMode ? 'text-white' : ''}`} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
