import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const AboutLeft = () => {
    return (
        <div className='bg-inherit flex flex-col gap-5'>
            <div className='w-full flex justify-center'>
              <div className='w-56 h-56'>

              </div>
            </div>
            <div className="flex justify-center gap-10 bg-white text-black">
                <Link href="https://www.linkedin.com/in/seongjin-park-580aa6261/" target="_blank" className='bg-inherit text-inherit'>
                    <FaLinkedin className="bg-white fill-blue-800" size={25} />
                </Link>
                <Link href="https://github.com/MYNAMEISJIN" target="_blank" className='bg-inherit text-inherit'>
                    <FaGithub className="bg-white fill-black" size={25} />
                </Link>
                <Link href="mailto:hbay11@naver.com" target="_blank" className='bg-inherit text-inherit'>
                    <HiOutlineMail className="bg-white fill-sky-400 stroke-black" size={26} />
                </Link>

            </div>
        </div>
    )
}

export default AboutLeft