import backgroundImage from '../../assets/Birthday.png';
import { TypeAnimation } from 'react-type-animation';
// import { AiOutlineHome } from 'react-icons/ai';


const MainSection = () => {
  return (
    <div id='home'>
      <img className='w-screen h-screen object-cover object-left scale-x-[1]' 
          src={backgroundImage}
          alt='' 
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/30' >

        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center place-items-center md:items-start'>
          <h1 className='flex font font-bold text-center text-6xl sm:text-7xl text-blue-700'>HAPPY 21st</h1>
          <h1 className='flex font font-bold text-center text-6xl sm:text-7xl text-blue-700'>BIRTHDAY</h1>
          <h2 className='flex font-[laziest-cat] font-semibold text-2xl text-center pt-4 sm:mx-4 text-red-600'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                
                'I wish you All The Best',
                2000, 
                'I wish You Reach Apex Predator For Real',
                2000,
                'I wish You Could Come to Indonesia Sooner',
                2000,
                'I wish I could Tease you When we Bake Meronpan',
                2000
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{lineHeight: '1em'}}
              repeat={Infinity}
            />
          </h2>
          {/* <div className='flex justify-between pt-6 max-w-[200px] md:max-w-[500px] w-full'>
            <AiOutlineHome className='cursor-pointer' size={20} />
            <AiOutlineHome className='cursor-pointer' size={20} />
            <AiOutlineHome className='cursor-pointer' size={20} />
            <AiOutlineHome className='cursor-pointer' size={20} />
          </div> */}
        </div>
        
      </div>
    </div>
  )
}

export default MainSection
