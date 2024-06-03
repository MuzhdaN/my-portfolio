import {
    ReactOriginalWordmark,  
    BootstrapOriginalWordmark, 
    JavascriptOriginal, 
    Html5OriginalWordmark, 
    Css3OriginalWordmark,
    PostmanOriginal,
    MysqlOriginalWordmark,
    IntellijOriginal,
    JavaOriginalWordmark,
    FigmaOriginal,
    TailwindcssOriginal,
    AntdesignOriginal,
    PythonOriginalWordmark,
    GitOriginal,
    GitpodOriginal,
  } from 'devicons-react';
import { FaTools } from 'react-icons/fa';
import { MdOutlineSettings } from 'react-icons/md';
  
  const Skills = ({darkMode}) => {
    return (
      <section className='py-10'>
        <h2 className='text-3xl font-extrabold text-indigo-700 dark:text-white mb-2 text-center'> 
          Skills
        </h2>

      <div className='dark:text-white flex justify-evenly flex-wrap gap-8 py-10'>      
        <div className={`p-5 rounded-xl shadow-2xl ${darkMode ? 'dark:bg-transparent' : 'bg-indigo-50'}`}>
          <div className='container mx-auto '>
            {/* <h2 className='dark:text-white text-indigo-700 text-3xl font-extrabold text-center mb-1'> */}
             <div className='dark:text-white text-lg font-extrabold mb-4 text-center flex flex-row justify-center gap-1'>
              <MdOutlineSettings />
              <h2> Developement </h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-5 p-8 '>

            <div className='text-center'>
                <Html5OriginalWordmark size="80" 
                className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' 
                />
              </div>
              <div className='text-center'>
                <Css3OriginalWordmark size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div>     

              <div className="group relative text-center">
                  <TailwindcssOriginal size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
                  <span
                  className="pointer-events-none absolute -top-5 left-0 md:left-10 w-max opacity-0 transition-opacity group-hover:opacity-100"
                  >
                      Tailwand Css
                  </span>
              </div>
              <div className='text-center'>
                <BootstrapOriginalWordmark size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div>
              <div className='text-center'>
                <JavascriptOriginal size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div>
            
              <div className="group relative text-center">
                  <AntdesignOriginal size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
                  <span
                  className="pointer-events-none absolute -top-5 left-0 md:left-10 w-max opacity-0 transition-opacity group-hover:opacity-100"
                  >
                      Ant Design
                  </span>
              </div>

              <div className='text-center'>
                <ReactOriginalWordmark size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div>
              <div className='text-center'>
                <MysqlOriginalWordmark size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div>
              <div className='text-center'>
                <JavaOriginalWordmark size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div>

              <div className='text-center'>
                <PythonOriginalWordmark size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div>
              {/* <div className='text-center'>
                <IntellijOriginal size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div> */}
     


            </div>
          </div>
        </div>

        <div className={`p-5 rounded-xl shadow-2xl ${darkMode ? 'dark:bg-transparent' : 'bg-indigo-50'}`}>
          <div className='container mx-auto px-4'>
            <div className='dark:text-white text-lg font-extrabold mb-4 text-center flex flex-row justify-center gap-1'>
              <FaTools />
              <h2> Tools </h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 p-8 '>
              {/* <div className='text-center'>
                <GithubOriginalWordmark size="80" color="red"
                 className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' 
                 />
              </div>      */}

              <div className="group relative text-center">
                  <PostmanOriginal size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
                  <span
                    className="pointer-events-none absolute -top-5 left-0 md:left-10 w-max opacity-0 transition-opacity group-hover:opacity-100"
                  >
                      Postman
                  </span>
              </div>
              
              <div className="group relative text-center ">
                  <GitOriginal size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
                  <span
                  className="pointer-events-none absolute -top-5 left-0 md:left-12 w-max opacity-0 transition-opacity group-hover:opacity-100"
                  >
                      Git
                  </span>
              </div>
              <div className="group relative text-center">
                  <GitpodOriginal size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
                  <span
                  className="pointer-events-none absolute -top-5 left-0 md:left-12 w-max opacity-0 transition-opacity group-hover:opacity-100"
                  >
                      Gitpod
                  </span>
              </div>
              {/* <div className='text-center'>
                <GitOriginalWordmark size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div> */}
              <div className='text-center'>
                <IntellijOriginal size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div>
              <div className="group relative text-center">
                  <FigmaOriginal size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
                  <span
                  className="pointer-events-none absolute -top-5 left-0 md:left-12 w-max opacity-0 transition-opacity group-hover:opacity-100"
                  >
                      Figma
                  </span>
              </div>


            </div>
          </div>
        </div>
      </div>
      </section>
    )
  }
  
  export default Skills;
  