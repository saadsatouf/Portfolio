"use client"
import {MdArrowOutward} from "react-icons/md"
import { motion } from "framer-motion"
import Blob from "../../component/Blob";
import Image from "next/image";
import avatarImg from "./avatar.jpg"
import {HiOutlinePhone , HiOutlineMail} from "react-icons/hi"
import { TypeAnimation } from "react-type-animation";
import Social from "../../component/Social";
import Pattern from "../../component/Pattern";
export default function Home() {
  return (
      <motion.section
        initial={{opacity:0}}
        animate={{
            opacity:1,
           
            transition:{delay:2.1 , duration:0.4 , ease:"easeIn"}

        }}
        className=" h-screen flex items-center"
        >


     <Pattern/>     
<div className="flex flex-col xl:flex-row items-center justify-between w-full ">
  <div className="w-full xl:w-[550px] 
  flex flex-col items-center xl:items-start
  text-center xl:text-left
  ">
 <br/>
     <br/>
    <h1 className="h1 flex-1 mb-[28px]">
Hi! I`m Saad ,
    <br/>
     <br/>
      
    <TypeAnimation
    sequence={["Web Developer" , 2000

      , "Web Designer" , 2000
    ]}
    wrapper="span"
    speed={40}
    className="text-accent"
    repeat={Infinity}
    cursor={false}
    />

   </h1>
   <p className="mt-8.5 max-w-[500px]">
    I build visually captivating , user-friendly websites and web apps that 
    transform your ideas into seamless , engaging digital
    experiences.
   </p>
   <button className="btn btn-lg btn-accent mt-12">
    <div className="flex item ">
      <span>Let`s talk.</span>
      <MdArrowOutward className="text-xl" />
    </div>
   </button>


   <div className="mt-10 flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8: mb-12 xl:mb-0 ">
  <div className="flex items-center gap-4 text-lg">
    <span className="text-accent">
   < HiOutlinePhone className="text-xl" />
    </span>
    <span>+352 681 550 982</span>
  </div>
  
<div className="mt-0">
  <div className="flex items-center gap-4 text-lg">
    <span className="text-accent">
   < HiOutlineMail className="text-xl" />
    </span>
    <span>sadsatofsy1@gmail.com</span>
  </div>
</div>
</div>
<Social containerStyles="flex 2xl:right-2 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2 "
        iconsStyles="bg-accent text-white hover:bg-accent-hover  transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
/>

  </div>






  <div className=" flex-1 hidden xl:block relative z-20">
    

<Image 
src={avatarImg}
alt=""

quality={10}
style={{borderRadius:"50%" , width:'400px' , height:"400px " , objectFit:"cover", border:"4px solid #94b143" ,  objectPosition:"center 20%"}}
className="absolute -top-55 left-[70px] "
/>

  </div>
</div>
        </motion.section>
  );
}
