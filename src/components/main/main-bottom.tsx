'use client'
import { motion } from "framer-motion"

const MainBottom = () => {
    return (
        <motion.div className="w-full pl-5 pr-5 flex justify-between"
        initial={{
            opacity: 0,
            y:100,
          }}
          transition={{
            delay:3.9
          }}
          animate={{
            opacity:1,
            y:0
          }}
        >

            <div className="text-stone-500 text-sm"> portfolio/NEXT.JS</div>
            <div className="text-stone-500 text-sm">2024</div>
        </motion.div>
    )
}

export default MainBottom