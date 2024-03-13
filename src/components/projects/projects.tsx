import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Card from "../ui/card"
import React from "react"
import { type CarouselApi } from "@/components/ui/carousel"

const Projects = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])





    return (
        <div className="bg-inherit text-inherit h-screen w-full rounded-lg pt-14 pb-4 flex flex-col justify-between">
            <div className="bg-transparent text-inherit flex items-center justify-center flex-col h-full gap-6 max-sm:pr-7 max-sm:pl-7">
                <Carousel
                
                    opts={{
                        align: "start",
                    }}
                    setApi={setApi}
                    className="w-full lg:max-w-3xl md:max-w-xl sm:max-w-sm">
                    <CarouselContent className="-ml-20">

                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}
                                className="lg:basis-1/2 pl-20  bg-white"
                            >
                                <Card />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="max-sm:hidden" />
                    <CarouselNext className="max-sm:hidden" />
                </Carousel>
                <div className="bg-white text-center text-sm text-gray-600">
                    Slide {current} of {count}
                </div>
            </div>

            <div className="bg-transparent text-inherit flex justify-end pr-7">
                <div className="bg-inherit text-inherit text-xl font-light">
                    PROJECTS
                </div>
            </div>
        </div>
    )
}

export default Projects
