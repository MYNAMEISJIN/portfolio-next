import AboutLeft from "./about-left";
import AboutRight from "./about-right";
import { motion } from "framer-motion"

const About = () => {

  return (
    <div className="bg-inherit text-inherit min-h-screen w-full rounded-lg pt-14 pb-4 flex flex-col justify-between">
      <div className="bg-inherit text-inherit flex flex-col items-center justify-center h-full grow gap-5">
        <div
          className="bg-inherit text-inherit flex gap-8 justify-center max-sm:flex-col pr-5 pl-4">
          <AboutLeft />
          <AboutRight />
        </div>
      </div>
      <div className="bg-transparent text-inherit flex justify-end pr-7">
        <div className="bg-inherit text-inherit text-xl font-light">
          ABOUT
        </div>
      </div>
    </div>
  )
}

export default About;