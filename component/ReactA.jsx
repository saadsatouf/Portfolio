"use client"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import RA from "./RA"

export default function ReactA(){
    const pathname = usePathname()
    return(
        <AnimatePresence mode="wait">
            <div key={pathname}>
               <div className="
     h-screen w-screen fixed top-0    
     left-0 right-0 pointer-events-none
     z-50 flex       
               ">
                <RA/>
                </div> 
            </div>
        </AnimatePresence>
    )
}