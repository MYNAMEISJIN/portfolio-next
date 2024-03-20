import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetClose,
    SheetTrigger,
} from "@/components/ui/sheet"
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
                        <a href={"#home"} className="text-white text-xl font-bold">
                            <SheetClose>
                                HOME
                            </SheetClose>
                        </a>
                        <a href={"#about"} className="text-white text-xl font-bold">
                            <SheetClose>
                                ABOUT
                            </SheetClose>
                        </a>
                        <a onClick={goToSkills}  className="text-white text-xl font-bold">
                            <SheetClose>
                                SKILLS
                            </SheetClose>
                        </a>


                        <a href={"#projects"} className="text-white text-xl font-bold">
                            <SheetClose>
                                PROJECTS
                            </SheetClose>
                        </a>
                        <a href={"#cv"} className="text-white text-xl font-bold">
                            <SheetClose>
                                CV
                            </SheetClose>
                        </a>

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu