
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ParallaxSection = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["100%", "2000%"]);


  return (
    <div>
        <motion.div
            id='parallax'
            ref={ref} 
            className='w-full h-screen flex flex-col overflow-hidden place-items-center parallaxFull'
            style={{
                y: backgroundY,
            }}
        >
            <motion.div
                className='relative pt-10 md:pt-0 z-10'
                style={{ y: textY }}>

                <h1     
                    className='font-bold text-center text-2xl md:text-8xl neonTextYellow'>
                    お誕生日おめでとう！
                </h1>
                <h2 
                    style={{ y: textY }}
                    className='font-bold text-center text-white text-l md:text-6xl mt-5 md:mt-10 px-6 md:px-10 neonTextOrange'>
                    For You, The One Who Still Smile The Brigthest even in The Darkness Night
                </h2>
                <h2 
                    style={{ y: textY }}
                    className='font-bold text-center text-white text-l md:text-6xl mt-12 md:mt-24 px-6 md:px-10 neonTextOrange'>
                    Also I'm sorry I know it's Late but I've been trying to push it so bad
                </h2>
            </motion.div>
            <div
                className='absolute inset-0 z-20 parallaxHalf'
            />
        </motion.div>
       
    </div>
  )
}

export default ParallaxSection