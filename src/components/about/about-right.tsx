import React from 'react'
import {motion} from 'framer-motion'

const AboutRight = () => {
    return (
        <div className='bg-inherit text-inherit max-w-lg'>
            <div className='bg-inherit text-inherit'>
                <motion.div className='bg-inherit text-inherit flex flex-col gap-2 overflow-hidden'
                initial={{ opacity: 0, x:300 }}
                transition={{delay:0.4}}
                whileInView={{ opacity: 1, x:0 }}
                viewport={{ once: true }}
                >
                    <div className='bg-inherit text-inherit text-xl font-bold'>
                       Motivated Front-End Developer
                    </div>
                    <div className='bg-inherit text-inherit text-gray-600 flex flex-col gap-2'>
                        <div className='bg-inherit text-inherit text-gray-600'>
                        with a passion for creating responsive, user-friendly websites. Skilled in HTML, CSS, Javascript, React.js , Next.js, Tailwindcss, and TypeScript. I bring a teamwork-oriented approach to every project.
                        I possess strong problem-solving and communication skills, ensuring clear and efficient collaboration. My attention to detail guarantees high-quality work, and I thrive in flexible environments, easily adapting to new challenges.
                      </div>
                      <div className='bg-inherit text-inherit text-gray-600'>
                        In my free time, I actively pursue a healthy lifestyle through engaging in sports.
                      </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutRight