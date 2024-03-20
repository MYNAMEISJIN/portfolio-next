import MainContentRight from "./main-content-right"
import MainBottom from "./main-bottom"

const Main = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-center pt-16 pb-4">
      <div className="h-full w-full justify-center flex items-center">
        <div className="w-1/2 max-md:hidden">

        </div>
        <div className="w-1/2 max-md:w-full">
          <MainContentRight />
        </div>
      </div>
      <MainBottom />
    </div>
  )
}

export default Main