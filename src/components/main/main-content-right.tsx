"use client"
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const MainContentRight = () => {
  return (
    <div className="flex flex-col gap-8 pl-1 max-lg:pr-6 max-lg:pl-6">
      <motion.div className="w-96 h-60 max-lg:w-full"
      initial={{
        opacity:0,
      }}
      transition={{
        delay:4.5
      }}
      animate={{
        opacity:1
      }}
      >
        <div className="w-full h-full">
          <img alt="me" src="/me.jpg" className="bg-white object-scale-down w-full h-full rounded" />
        </div>
      </motion.div>
      <div className="flex flex-col gap-1">
        <div className=" font-semibold text-3xl">
          <TypeAnimation
            sequence={[
              "Hi, I'm a Front-End Developer from South Korea.",
            ]}
            wrapper="div"
            speed={50}
            repeat={0}
          />
        </div>
        <motion.div className="text-stone-400 bg-transparent"
        initial={{
          opacity:0,
          y:200
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          delay:3.2
        }}
        >
          I&rsquo;m Jin from South Korea. A passionate Front-End <br /> React Developer &nbsp;
          <span className="bg-stone-200 font-medium text-black text-xs p-1 rounded">Hire Me!</span>
        </motion.div>
      </div>
    </div>
  )
}

export default MainContentRight