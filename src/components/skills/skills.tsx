import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import React from "react";

const Skills = () => {
  const plugin = React.useRef(
    AutoScroll({ delay: 0, stopOnInteraction: false})
  )

  const icons = [
    { icon: FaHtml5, size: 100 },
    { icon: FaCss3Alt, size: 100 },
    { icon: RiJavascriptFill, size: 110 },
    { icon: BiLogoTypescript, size: 110 },
    { icon: GrReactjs, size: 110 },
    { icon: TbBrandNextjs, size: 110 },
    { icon: SiTailwindcss, size: 110 },
    { icon: FaGitAlt, size: 100 },
    { icon: BiLogoVisualStudio, size: 100 }
  ];

  return (
    <div className="flex items-center justify-center gap-11 pt-8 pb-8 overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full" >
        <CarouselContent>
          {icons.map((Icon, index) => (
            <CarouselItem key={index}
              className="basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <div><Icon.icon size={Icon.size} /> </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};


export default Skills;






