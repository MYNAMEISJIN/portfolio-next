import MainContentRight from "./main-content-right"

const Main = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-center pt-16 pb-4">
      <div className="h-full w-full justify-center flex items-center">
        <div className="w-1/2 max-md:hidden">
          
        </div>
        <div className="w-1/2 max-md:w-full">
          <MainContentRight/>
        </div>
      </div>
      <div className="w-full pl-5 pr-5 flex justify-between">
       
        <div className="text-stone-500 text-sm"> portfolio/NEXT.JS</div>
        <div className="text-stone-500 text-sm">2024</div>
      </div>
    </div>
  )
}

export default Main