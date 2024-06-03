import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className='flex justify-between py-1 px-5 bg-indigo-400 dark:bg-gray-950 dark:text-white'>
        <p className='mt-2'>@2024 Muzhda</p>
  
        <div className='flex items-end' >
              <SocialIcon 
                network='github' url='https://github.com/MuzhdaN' 
                style={{ height: 25, width: 25, }}
                className='m-2 hover:scale-125'
              />
              <SocialIcon 
                url="https://www.linkedin.com/in/muzhda-noorzad/" 
                style={{ height: 25, width: 25 }}
                className='m-2 hover:scale-125'
              />
          </div>     
    </footer>
  )
}

export default Footer