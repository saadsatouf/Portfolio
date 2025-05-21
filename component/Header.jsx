
import Logo from "./Logo";
import Social from "./Social";
import NavLinks from "./NavLinks";
import {CiMenuFries} from "react-icons/ci"
import {MdFileDownload} from "react-icons/md"
import {SheetTitle, SheetTrigger, Sheet , SheetContent , SheetDescription , SheetHeader} from "@/components/ui/sheet";
export default function Header(){
    return(
        <header className="2xl:hidden absolute z-40 left-0 top-0 right-0 ">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-6">
                    <Logo/>
                    {/*nav mobile*/}
                    <Sheet>

                        <SheetTrigger className="cursor-pointer text-[30px] text-white">
                            <CiMenuFries />
                        </SheetTrigger>
                        <SheetContent className="
                        bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20" side="left"
                        >
                            <SheetHeader>
             <SheetTitle><Logo/></SheetTitle>
             <SheetDescription className="sr-only">
Navigation menu

             </SheetDescription>
                            </SheetHeader>
<NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]" />
<div>
    <button className="btn btn-lg btn-tertiary mt-16">
       
        <div className="flex items-center gap-3 ">
          <span>Download Cv</span>
          <MdFileDownload className="text-xl" />
        </div>
       </button>
        <Social containerStyles="flex gap-4"   iconsStyles="mt-12 bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"/>
</div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}