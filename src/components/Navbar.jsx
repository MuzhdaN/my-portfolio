import { Link } from 'react-scroll';

const Navbar = () => {

  const navItems = [
    { id: 1, text: 'Home', section: 'home' },
    // { id: 2, text: 'About me', section: 'about' },
    { id: 2, text: 'Projects', section: 'projects' },
    { id: 3, text: 'Experience', section: 'experience' },
    { id: 4, text: 'Skills', section: 'skills' },
  ];

  return (
    <header className="fixed top-0 z-10 left-1/2 transform -translate-x-1/2 h-[4.5rem] w-[36rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
      <nav className="flex h-full z-10">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 flex h-full items-center justify-center">  
          <div className='md:ml-auto'>
            <div className="flex space-x-2">
              <ul className="flex dark:text-white"> {/* Centering the items */}
                {navItems.map(item => (
                  <li
                    key={item.id}
                    className='m-2 cursor-pointer duration-300 hover:border-solid hover:border-b-2 hover:border-black hover:font-bold'
                  >  
                    <Link
                      to={item.section}
                      spy={true}
                      smooth={true}
                      offset={-70} // Adjust this value to offset the scroll position
                      duration={500}
                      className="nav-link" // Add your custom styles here
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> 
          </div> 
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
