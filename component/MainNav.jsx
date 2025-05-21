import Logo from "./Logo"
import NavLinks from "./NavLinks"
import {MdFileDownload} from "react-icons/md"
export default function MainNav(){


    return(
        <nav className="w-full py-16">
            <div className="flex flex-col h-full items-center justify-between">
                <Logo/>
                
                
           
            <NavLinks containerStyles=" flex flex-col gap-6 " />

               <button className="btn btn-lg btn-tertiary mt-16">
                   
                    <div className="flex items-center gap-3 ">
                      <span>Download Cv</span>
                      <MdFileDownload className="text-xl" />
                    </div>
                   </button>
            </div> 
        </nav>
    )
}