import { 
    AntdesignOriginalWordmark, 
    ReactOriginalWordmark,  
    BootstrapOriginalWordmark, 
    JavascriptOriginal, 
    Html5OriginalWordmark, 
    Css3OriginalWordmark,
    TailwindcssPlainWordmark,
    PostmanOriginal,
    GitOriginalWordmark,
    MysqlOriginalWordmark,
    IntellijOriginal,
    JavaOriginalWordmark,
    FigmaOriginal,
    TailwindcssOriginal,
    AntdesignOriginal

  } from 'devicons-react';
  
  const Skills = ({darkMode}) => {
    return (
      <section className='flex justify-center py-10 shadow-xl'>
        <div className={`p-5 rounded-xl ${darkMode ? 'dark:bg-transparent' : 'bg-indigo-50'}`}>
          <div className='container mx-auto px-4'>
            <h2 className='dark:text-white text-indigo-700 text-3xl font-extrabold text-center mb-1'>
              Skills
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-5 p-8 '>

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

              <div className="group relative text-center">
                  <PostmanOriginal size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
                  <span
                  className="pointer-events-none absolute -top-5 left-0 md:left-10 w-max opacity-0 transition-opacity group-hover:opacity-100"
                  >
                      Postman
                  </span>
              </div>

              <div className='text-center'>
                <GitOriginalWordmark size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div>
              {/* <div className='text-center'>
                <IntellijOriginal size="80" className='mx-auto transform hover:scale-110 transition duration-300 ease-in-out' />
              </div> */}
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
      </section>
    )
  }
  
  export default Skills;
  