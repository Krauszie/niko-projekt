import { useAnimate} from 'framer-motion';

import MessageSection from '../MessageSection/MessageSection'
import NikoSad from '../../assets/niko00.png';

function SurpriseSection () {

  const [scope, animate] = useAnimate();
  const handleAnimate = async() => {
    
    animate("#nikoButton", {
      right: "0px",
      bottom: "75px",
      width: "25%",
      height: "10%",
      animationDuration: "2s",
      transitionDuration: "5s"
    })

    await animate("#nikoPic", {
      width: "50%",
      height: "50%"
    })

    await animate("#yellowBg", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0%",
      transitionDuration: "2s" 
    })

    await animate("#message", {
      ease: "easeInOut",
      transitionDuration: "20s" ,
      opacity: 1
    });
  };

  return (
    <div
      ref={scope} 
      className="absolute w-screen h-screen flex justify-center items-center bg-[#39375B] z-1">
        <div>
          <div 
            id="nikoButton" 
            className='absolute flex size-52 justify-center items-center bg-[#ffffb7] cursor-pointer rounded-[50%] z-10 active:drop-shadow-[0_10px_50px_rgb(255,193,0)]'
            onClick={handleAnimate}
          >   
              <img
                id="nikoPic" 
                src={NikoSad}
                className="size-28  hover:rotate-[360deg] duration-700" 
                />
          </div>

          <div
            id="yellowBg" 
            className='flex size-52 bg-[#ffffb7] cursor-pointer rounded-[50%] z-[3]' />
          
          <div id="message"  className='opacity-0 z-[5]'>
            <MessageSection />
          </div>
        </div>
    </div>
  )
}

export default SurpriseSection