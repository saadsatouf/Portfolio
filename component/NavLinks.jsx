"use client"
import Link from "next/link"
import {usePathname}  from "next/navigation"
const links = [
    {
        name:"home",
        path:"/"
    },
     {
        name:"about",
        path:"/about"
    },
     {
        name:"services",
        path:"/services"
    },
     {
        name:"work",
        path:"/work"
    },
     {
        name:"contact",
        path:"/contact"
    },
]

export default function NavLinks({containerStyles}){
   const pathname = usePathname()
    return(
        <ul className={containerStyles}>
            {links.map((link , index)=>{


        const char = link.name.length;
        const linew = char > 5 ? "after:w-[120%]" : "after:w-[90%]"
            const isActive = pathname === link.path    
return (
    <Link className={`text-white  
    relative text-lg uppercase ${isActive && `after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${linew} after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0`}`} href={link.path} key={index}><span className="relative z-10">{link.name}</span></Link>
)
            })}
        </ul>
    )
}