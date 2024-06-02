import { SocialIcon } from 'react-social-icons';
import CV from '../assets/Muzhda Noorzad CV.pdf';
import heroImg from '../assets/heroImg.png';
import { IoMdSunny } from 'react-icons/io';
import { FaMoon } from 'react-icons/fa6';

const Hero = ({ darkMode, toggleDarkMode }) => {


  return (
    <section className='dark:bg-neutral-900 dark:text-white py-20 mb-5 flex flex-col justify-center text-center h-lvh'>
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center sm:px-6 lg:px-8 relative">
        <div className='relative'>
          <img
            src={heroImg}
            className="w-60"
            alt="Hero Image"
          />
          {/* <button onClick={toggleDarkMode} 
            className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 scale-150 hover:text-amber-400'
            // className='w-16 h-16 bottom-14 bg-neutral-500 dark:bg-white rounded-full text-white dark:text-black font-semibold'
          >
            {darkMode ? <FaMoon/> : <IoMdSunny />}
          </button> */}

          <button onClick={toggleDarkMode} className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 scale-150'>
            {darkMode ? (
              <div className="group">
                <FaMoon className=' group-hover:text-red-700' />
                <span className="sr-only">Dark Mode</span>
              </div>
            ) : (
              <div className="group">
                <IoMdSunny className='text-yellow-300 group-hover:text-orange-400' />
                <span className="sr-only">Light Mode</span>
              </div>
            )}
          </button>


        </div>
        <div>
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Hi I am Muzhda
          </h1>
          {/* <span>Frontend developer</span> */}
          <p className="my-4">
            The world of coding is like a <span className='font-bold'>magic world</span> to me.
            We can create almost anything, isn&apos;t it cool? Just like magic!!!
            <br />
            I am a Software Developer but I am just in love with FrontEnd period.
          </p>
          <div className='mb-5'>
              <SocialIcon 
                network='github' url='https://github.com/MuzhdaN' 
                className='m-2 hover:scale-125'  
              />
              <SocialIcon 
                url="https://www.linkedin.com/in/muzhda-noorzad/"
                className='m-2 hover:scale-125' 
              />
          </div>

          <a href={CV} download>
              <button className=' bg-indigo-500 w-28 h-12 font-bold rounded-xl shadow-xl hover:bg-indigo-600'>
                Resume
              </button>
          </a>
        </div>
      
        </div>
    </section>
  )
}

export default Hero