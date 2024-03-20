"use client"

import About from "@/components/about/about";
import Bottom from "@/components/bottom/bottom";
import Main from "@/components/main/main";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import { useRef, useContext, useEffect } from "react";
import { StoreContext } from "@/store/store-context";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion"




export default function Home() {

  const homeStoreCtx = useContext(StoreContext);
  const skillsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll()

  const mainY = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.35], [0, 200, 300, 350])
  const bottomY = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [-250, -200, -100, 0])

  useEffect(() => {
    if (homeStoreCtx.skillsState) {
      skillsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",

      });
      homeStoreCtx.skillsClicked()
    }

  }, [homeStoreCtx])




  return (

    <main className="flex min-h-screen flex-col items-center w-auto">
      <div id="home" className="w-full">
        <motion.div className="w-full"
          style={{ y: mainY }}
        >
          <AnimatePresence>
            <Main />
          </AnimatePresence>

        </motion.div>
      </div>
      <div className="bg-white text-black w-full z-30 rounded-lg">
        <div id="about" className="bg-inherit text-inherit w-inherit rounded-lg">
          <About />
        </div>
        <div className="w-inherit" ref={skillsRef}>
          <Skills />
        </div>
        <div id="projects" className="bg-inherit text-inherit w-inherit rounded-lg">
          <Projects />
        </div>
      </div>
      <div id="cv" className="w-full">
        <motion.div className="w-full"
          style={{ y: bottomY }}
        >
          <Bottom />
        </motion.div>
      </div>

    </main>


  );
}






//npm install framer-motion
//npx shadcn-ui@latest init
//npm install react-icons --save
//npm install react-type-animation