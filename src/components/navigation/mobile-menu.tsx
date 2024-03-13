import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetClose,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { useContext } from "react"
import { StoreContext } from "@/store/store-context"


const MobileMenu = () => {


    const StoreCtx = useContext(StoreContext)
    const goToSkills = ()=>{
      StoreCtx.skillsClicked()
    }

    return (
        <Sheet>
            <SheetTrigger className="p-1 max-lg:block lg:hidden cursor-pointer">MENU</SheetTrigger>

            <SheetContent className="bg-black">

                <SheetHeader className="flex justify-center items-center h-full">

                    <SheetDescription className="flex flex-col gap-5 items-center">
                        <Link href={"#home"} className="text-white text-xl font-bold">
                            <SheetClose>
                                HOME
                            </SheetClose>
                        </Link>
                        <Link href={"#about"} className="text-white text-xl font-bold">
                            <SheetClose>
                                ABOUT
                            </SheetClose>
                        </Link>
                        <a onClick={goToSkills}  className="text-white text-xl font-bold">
                            <SheetClose>
                                SKILLS
                            </SheetClose>
                        </a>


                        <Link href={"#projects"} className="text-white text-xl font-bold">
                            <SheetClose>
                                PROJECTS
                            </SheetClose>
                        </Link>
                        <Link href={"#cv"} className="text-white text-xl font-bold">
                            <SheetClose>
                                CV
                            </SheetClose>
                        </Link>

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu