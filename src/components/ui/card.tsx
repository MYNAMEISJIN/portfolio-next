import { ProjectData } from "@/models/type-and-class"
import Link from "next/link"

const Card: React.FC<{ item: ProjectData }> = (props) => {

  return (
    <div className="p-2 flex flex-col gap-4">
      <div className="bg-white flex justify-center h-80">
        <div className="w-full h-full">
          <img alt="me" src={`${props.item.screenshot_url}`} className="bg-white object-cover w-full h-full" />
        </div>
      </div>
      <div className="">
        <div className=" font-semibold text-2xl text-center uppercase">
          {props.item.title}
        </div>
        <div className="flex justify-around">
          <Link className="bg-black border-2 border-white rounded-sm pr-11 pl-11 pt-1 pb-1 m-4 text-lg hover:bg-white hover:text-black transition-all"
            href={`${props.item.git_address}`} target="_blank"
          >git</Link>
          <Link className="bg-black border-2 border-white rounded-sm pr-10 pl-10 pt-1 pb-1 m-4 text-lg hover:bg-white hover:text-black transition-all"
            href={`${props.item.ssl_url}`} target="_blank"
          >web</Link>
        </div>
      </div>
    </div>
  )
}

export default Card