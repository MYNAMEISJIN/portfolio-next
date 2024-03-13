"use client"
import Link from "next/link"
import MobileMenu from "./mobile-menu"
import { useContext } from "react"
import { StoreContext } from "@/store/store-context"

const Navigation = () => {
  const StoreCtx = useContext(StoreContext)
  const goToSkills = ()=>{
    StoreCtx.skillsClicked()
  }


  return (
    <div className="fixed flex justify-center w-full mix-blend-difference max-lg:pt-5 max-lg:pr-6 max-lg:pl-6 lg:pt-7 lg:pr-9 lg:pl-9 z-50">
      <div className="w-1/2 flex justify-start">
        <div className="font-bold text-3xl">
          SJ
        </div>
      </div>
      <div className="w-1/2 flex max-lg:justify-end lg:justify-start gap-8 ">
        <Link href={"#home"} className="p-1 max-lg:hidden lg:block">
          Home
        </Link>
        <Link href={"#about"} className="p-1 max-lg:hidden lg:block">
          About
        </Link>
        <a onClick={goToSkills}  className="p-1 max-lg:hidden lg:block cursor-pointer">
          Skills
        </a>
        <Link href={"#projects"} className="p-1 max-lg:hidden lg:block">
          Projects
        </Link>
        <Link href={"#cv"} className="p-1 max-lg:hidden lg:block">
          CV
        </Link>
        <MobileMenu/>
      </div>

    </div>
  )
}

export default Navigation