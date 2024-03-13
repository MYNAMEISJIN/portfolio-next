import Image from "next/image"


const MainContentRight = () => {
  return (
    <div className="flex flex-col gap-8 pl-1 max-lg:pr-6 max-lg:pl-6">
      <div className="w-96 h-60 max-lg:w-full">
        <div className="w-full h-full">
          <img alt="me" src="/me.jpg" className="bg-white object-scale-down w-full h-full rounded" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className=" font-semibold text-3xl ">
          Hi Front-End Developer from South Korea
        </div>
        <div className="text-stone-400">
          I'm Jin from South Korea. A passionate Front-End <br/> React Developer &nbsp;
          <span className="bg-stone-200 font-medium text-black text-xs p-1 rounded">Hire Me!</span>
        </div>
      </div>
    </div>
  )
}

export default MainContentRight