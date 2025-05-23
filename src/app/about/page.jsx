"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import Stats from "../../../component/Stats"
import Testimonial from "../../../component/Testimonial"
import Info from "../../../component/Info"
import Journey from "../../../component/Journey"
import Skills from "../../../component/Skills"
import avatarImg from "./a.jpg"
export default function About(){
    return(

        <motion.section
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{delay:2.1 , duration:0.4 , ease:"easeIn"}
        }}
        className="h-screen flex items-center"
        >
<div className="container mx-auto px-0 ">
<div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px] ">
<div className="hidden xl:flex w-full h-full pt-14 max-w-[430px] relative bg-pink-50/10 ">
<Image 
src={avatarImg}
alt=""
style={{ width:'600px' , height:"700px " , objectFit:"cover", border:"4px solid #5810ff" ,  objectPosition:"center 20%" }}
className="z-20 relative -top-14"
/>
</div>
<ScrollArea className="w-full h-[680px] ">
<div className="">
    <div className="flex items-center gap-3 mb-4">
<div className="w-2 h-2 bg-accent rounded-full ">
</div>
<p>About me</p>
</div>
<h2 className="h2 mb-6">
    <span className="text-accent">Saad</span>   Sattouf
</h2>
<p className="max-w-[540px] mb-12">
I focus on crafting visually stunning , user-friendly web 
experiences that not only look great but also function seamlessly, ensuring every detail is carefully designed and
executed
</p>
    <div className="flex flex-col items-start gap-16">
       <Stats/>
         <Testimonial />
          <Info/>
          <Journey />
        <Skills/>
    </div>
</div>
</ScrollArea>


</div>
</div>
        </motion.section>
    )
}