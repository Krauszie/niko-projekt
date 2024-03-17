import {useState} from 'react';
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-7 z-[99] md:hidden' />
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a 
                      href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a 
                      href="#main2" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home2</span>
                    </a>
                    <a 
                      href="#main3" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home3</span>
                    </a>
                    <a 
                      href="#main4" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home4</span>
                    </a>
                </div>
            )
            : (
              
               '' 
               
            )
        }
          <div className='md:block hidden fixed top-[25%] z-10'>
              <div className='flex flex-col'>
                <a 
                  href="#main5" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                  <AiOutlineHome size={20} />
                </a>
                <a 
                  href="#main6" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                  <AiOutlineHome size={20} />
                </a>
                <a 
                  href="#main7" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                  <AiOutlineHome size={20} />
                </a>
                <a 
                  href="#main8" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                  <AiOutlineHome size={20} />
                </a>
                <a 
                  href="#main9" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                  <AiOutlineHome size={20} />
                </a>
              </div>
          </div>
        
    </div>
  );
};

export default Sidenav