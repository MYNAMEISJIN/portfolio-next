"use client"
import { getData } from "@/lib/actions"
import { CarouselForProject } from "./carousel-for-project"
import { ProjectData } from "@/models/type-and-class"
import React from "react"
import {motion} from 'framer-motion'

const Projects =  () => {

    const [apiData,setApiData] = React.useState<ProjectData[]>([]);
    React.useEffect(()=>{
        const getFetchData = async()=>{
            const data = await getData() 
            setApiData(data)
        }
        getFetchData();
    }, [])



    
    return (
        <div className="bg-inherit text-inherit min-h-screen w-full rounded-lg pt-14 pb-4 flex flex-col justify-between">
            <motion.div className="bg-transparent text-inherit flex items-center justify-center flex-col h-full grow gap-6 max-sm:pr-7 max-sm:pl-7 overflow-hidden"
            initial={{ opacity: 0, y:200 }}
            transition={{delay:0.4}}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            >
                <CarouselForProject data={apiData} />
            </motion.div>

            <div className="bg-transparent text-inherit flex justify-end pr-7">
                <div className="bg-inherit text-inherit text-xl font-light">
                    PROJECTS
                </div>
            </div>
        </div>
    )
}

export default Projects
