

const Card = () => {
  return (
    <div className="p-2 flex flex-col gap-4">
      <div className="bg-white flex justify-center h-80">
        image
      </div>
      <div className="">
        <div className=" font-semibold text-2xl text-center uppercase">
          this is title of Anan
        </div>
        <div className="flex justify-around">
          <div className="bg-black border-2 border-white rounded-sm pr-11 pl-11 pt-1 pb-1 m-4 text-lg hover:bg-white hover:text-black transition-all">git</div>
          <div className="bg-black border-2 border-white rounded-sm pr-10 pl-10 pt-1 pb-1 m-4 text-lg hover:bg-white hover:text-black transition-all">web</div>
        </div>
      </div>
    </div>
  )
}

export default Card