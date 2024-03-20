"use client"
import MobileMenu from "./mobile-menu"
import { useContext } from "react"
import { StoreContext } from "@/store/store-context"
import { motion } from "framer-motion"

const Navigation = () => {
  const StoreCtx = useContext(StoreContext)
  const goToSkills = () => {
    StoreCtx.skillsClicked()
  }


  return (
    <motion.div className="fixed flex justify-center w-full mix-blend-difference max-lg:pt-5 max-lg:pr-6 max-lg:pl-6 lg:pt-7 lg:pr-9 lg:pl-9 z-50"
      initial={{
        opacity: 0,
        y:-100,
      }}
      transition={{
        delay:3.9
      }}
      animate={{
        opacity:1,
        y:0
      }}
    

    >
      <div className="w-1/2 flex justify-start">
        <div className="font-bold text-3xl">
          SJ
        </div>
      </div>
      <div className="w-1/2 flex max-lg:justify-end lg:justify-start gap-8 ">
        <a href={"#home"}  className="p-1 max-lg:hidden lg:block">
          Home
        </a>
        <a href={"#about"} className="p-1 max-lg:hidden lg:block">
          About
        </a>
        <a onClick={goToSkills} className="p-1 max-lg:hidden lg:block cursor-pointer">
          Skills
        </a>
        <a href={"#projects"} className="p-1 max-lg:hidden lg:block">
          Projects
        </a>
        <a href={"#cv"} className="p-1 max-lg:hidden lg:block">
          CV
        </a>
        <MobileMenu />
      </div>

    </motion.div>
  )
}

export default Navigation