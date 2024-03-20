"use client"
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
import { ProjectData } from "@/models/type-and-class"



export const CarouselForProject: React.FC<{ data: ProjectData[] | null }> = (props) => {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    let content


    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api,props.data])



    if (props.data === null) {
        content = <div className=" text-black">Loading...</div>
        // or return loading indicator or any other appropriate UI
    }
    else {
        content = (
            <Carousel

                opts={{
                    align: "start",
                }}
                setApi={setApi}
                className="w-full lg:max-w-3xl md:max-w-xl sm:max-w-sm">
                <CarouselContent className="-ml-20">

                    {props.data.map((item, index) => (
                        <CarouselItem key={index}
                            className="lg:basis-1/2 pl-20  bg-white"
                        >
                            <Card key={index} item={item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="max-sm:hidden" />
                <CarouselNext className="max-sm:hidden" />
            </Carousel>
        )
    }

    return (
        <>
            {content}
            <div className="bg-white text-center text-sm text-gray-600">
                Slide {current} of {count}
            </div></>
    )
}
