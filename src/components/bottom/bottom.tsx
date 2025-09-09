
import Link from "next/link"


const Bottom = () => {

  return (
    <div className="h-96 flex flex-col items-center justify-between pb-4">
      <div className="h-full flex items-center flex-col justify-center gap-10">
        
          <Link href={"https://jin-cv.tiiny.site"} target="_blank" className="border-4 rounded font-bold text-3xl flex flex-col items-center justify-center h-16 w-60
       hover:border-orange-600 hover:text-orange-500 hover:bg-white transition-all">
            CV
          </Link>
  

        <h1 className=" font-extrabold text-6xl text-center">
          LET&rsquo;S WORK TOGETHER!
        </h1>
      </div>
      <div className="w-full pl-5 pr-5 flex justify-between">

        <div className="text-stone-500 text-sm">thank you</div>
        <div className="text-stone-500 text-sm">so much!</div>

      </div>
    </div>
  )
}

export default Bottom

