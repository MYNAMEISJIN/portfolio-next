import React from 'react'
import { motion } from 'framer-motion'

const AboutRight = () => {
    return (
        <div className='bg-inherit text-inherit max-w-lg'>
            <div className='bg-inherit text-inherit overflow-x-hidden'>
                <motion.div className='bg-inherit text-inherit flex flex-col gap-2'
                    initial={{ opacity: 0, x: 300 }}
                    transition={{ delay: 0.4 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className='bg-inherit text-inherit text-xl font-bold'>
                        Motivated Front-End Developer
                    </div>
                    <div className='bg-inherit text-inherit text-gray-600 flex flex-col gap-2'>
                        {/* <div className='bg-inherit text-inherit text-gray-600'>
                            with a passion for creating responsive, user-friendly websites. Skilled in HTML, CSS, Javascript, React.js, Next.js, Tailwindcss, and TypeScript. I bring a teamwork-oriented approach to every project.
                            I possess strong problem-solving and communication skills, ensuring clear and efficient collaboration. My attention to detail guarantees high-quality work, and I thrive in flexible environments, easily adapting to new challenges.
                        </div>
                        <div className='bg-inherit text-inherit text-gray-600'>
                            In my free time, I actively pursue a healthy lifestyle through engaging in sports.
                        </div> */}
                        <div className='bg-inherit text-inherit text-gray-600'>
                            Passionate about crafting responsive websites, Skilled in HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and TypeScript. With a teamwork-oriented approach, I bring strong problem-solving and communication skills to every project.
                        </div>

                        <div className='bg-inherit text-inherit text-gray-600'>
                            Outside of work, I enjoy sports like wrestling, weight training which help me keep a healthy life and focused. I've lived in Australia on a working holiday visa and studied English in Manchester and the Philippines.
                        </div>

                        <div className='bg-inherit text-inherit text-gray-600 mt-2'>
                            In all aspects of life, I embrace challenges with enthusiasm, attention to detail, and a collaborative mindset.
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutRight