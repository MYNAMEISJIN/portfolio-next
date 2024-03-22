"use client"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {motion} from 'framer-motion'


const AboutLeft = () => {
    return (
        <div className='bg-inherit flex flex-col gap-5'>
            <div className='w-full flex justify-center bg-transparent'>
                <div className='w-80 h-72   relative bg-transparent '>
                    <motion.div className="absolute left-0 top-0 z-5 w-60 h-64 border-4 border-black overflow-hidden"
                     initial={{ opacity: 0, y:200 }}
                     transition={{delay:0}}
                     whileInView={{ opacity: 1, y:0 }}
                     viewport={{ once: true }}
                     >
                        <img className="w-full h-full object-cover" src="/working.jpg" alt="work" />
                    </motion.div>
                    <motion.div className="absolute bottom-0 right-0  z-10 w-32 h-40 border-4 border-black overflow-hidden"
                    initial={{ opacity: 0, y:100 }}
                    transition={{delay:0.2}}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true }}
                    >
                        <img className="w-full h-full object-cover" src="/wrestling.jpg" alt="work out" />
                    </motion.div>
                </div>
            </div>
            <motion.div className="flex justify-center gap-10 bg-white text-black"
            initial={{ opacity: 0, y:100 }}
            transition={{delay:0.4}}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            >
                <Link href="https://www.linkedin.com/in/seongjin-park-580aa6261/" target="_blank" className='bg-inherit text-inherit'>
                    <FaLinkedin className="bg-white fill-blue-800" size={25} />
                </Link>
                <Link href="https://github.com/MYNAMEISJIN" target="_blank" className='bg-inherit text-inherit'>
                    <FaGithub className="bg-white fill-black" size={25} />
                </Link>
                <Link href="mailto:s.jinnn.park@gmail.com" target="_blank" className='bg-inherit text-inherit'>
                    <HiOutlineMail className="bg-white fill-sky-400 stroke-black" size={26} />
                </Link>
            </motion.div>
        </div>
    )
}

export default AboutLeft