import projectsData from '../json/projects.json';
import ProjectCard from './ProjectCard';

const Projects = ({ darkMode }) => {
  return (
    <section className="mx-4 my-2 p-3">
      <div className={`p-5 rounded-xl ${darkMode ? 'dark:bg-transparent' : 'bg-indigo-50'}`}>
        <h2 className={`dark:text-white text-3xl font-extrabold text-indigo-700  my-6 text-center`}>
          Projects
        </h2>

        <div className="flex flex-wrap">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;
