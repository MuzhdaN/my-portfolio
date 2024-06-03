import { GiGraduateCap } from "react-icons/gi";
import { SiHappycow } from "react-icons/si";
import experienceData from '../json/experience.json'; // Import the JSON data

const Experience = () => {
  return (
    <section className='p-6 dark:text-white my-9'>
      <div className='text-center mb-8'>
        <h2 className='dark:text-white text-indigo-700 text-3xl font-extrabold text-center mb-1'>
          Experience & Education
        </h2>
        <p className='text-zinc-400'>A glimpse into my journey</p>
      </div>
      <div className='flex flex-col lg:flex-row justify-center gap-8'>
        {experienceData.sections.map((section, index) => (
          <div key={index} className='bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 w-full lg:w-96'>
            <div className='dark:text-white text-lg font-bold mb-4 text-center flex flex-row justify-center'>
              <h3> {section.title} </h3>
              {section.icon === "GiGraduateCap" && <GiGraduateCap />}
              {section.icon === "SiHappycow" && <SiHappycow />}
            </div>
            <div className='space-y-4'>
              {section.items.map((item, idx) => (
                <div key={idx}>
                  <h4 className='text-indigo-600 font-semibold'>{item.degree || item.position}</h4>
                  {/* <span className="text-indigo-500 text-sm -mt-6">{item.concentration}</span> */}
                  <p className='text-zinc-400'>{item.university || item.company}</p>
                  <p className='text-zinc-400 mb-2'>{item.year || item.duration}</p>
                  <p className='text-zinc-400'>{item.responsibilities}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
