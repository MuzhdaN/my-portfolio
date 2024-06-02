import { FaGithub } from 'react-icons/fa6';
import { CiLocationArrow1 } from "react-icons/ci";
import logo from '../assets/react.svg';

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div className={`w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-4 ${darkMode ? 'dark' : ''}`}>
      <div className={`container-xl lg:container bg-white rounded-lg shadow-lg relative m-5 p-6 ${darkMode ? 'dark:bg-gray-800 text-white' : ''}`}>
        <img src={logo} alt="hi" />

        <h2 className={`text-xl font-bold text-indigo-500 mb-6 text-center ${darkMode ? 'text-white' : ''}`}>
          {project.title}
        </h2>

        <p className={`${darkMode ? 'text-gray-300' : ''} mb-6`}> {project.description} </p>

        <ul className='flex flex-row flex-wrap justify-center gap-4 mb-5'>
          {project.skills.map((skill, index) => (
            <li key={index} className={`border-dashed border-2 border-indigo-600 px-3 ${darkMode ? 'border-gray-600' : ''}`}>
              {skill}
            </li>
          ))}
        </ul>

        <div className='flex justify-between'>
          <FaGithub className={`w-10 h-5 hover:h-6 hover:text-indigo-600 hover:cursor-pointer ${darkMode ? 'text-white' : ''}`} />
          <CiLocationArrow1 className={`w-10 h-5 hover:h-6 hover:text-indigo-600 hover:cursor-pointer hover:font-extrabold ${darkMode ? 'text-white' : ''}`} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
