"use client"



import {HiOutlineMapPin , HiOutlineArrowLongRight} from "react-icons/hi2"
import { HiOutlinePhone, HiOutlineMail} from "react-icons/hi"
import {
    Select ,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
export default function Contact(){
    return(
          <motion.section
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{delay:2.1 , duration:0.4 , ease:"easeIn"}
        }}
        className="h-screen flex items-center py-24 xl:py-0"
        >
<div className="container mx-auto w-full h-full flex flex-col items-center 
xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent
 scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible
   ">
<div className="w-full">
<div className="flex flex-col xl:flex-row gap-6">




<div className="flex-1 xl:w-[600px] flex flex-col gap-12">
  <div>
    <h2 className="h2 mb-6">
        Get In <span className="text-accent">Touch</span>
    </h2>
    <p className="max-w-[460px]">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur similique sapiente nemo porro quaerat modi.
    </p>
    </div>  
<div className="flex flex-col gap-8 mb-6 xl:mb-0">
<div className="flex items-center gap-4 text-lg">
    <span className="text-accent">
        <HiOutlinePhone className="text-2xl" />
    </span>
    <span>+352 681 550 982</span>
</div>
<div className="flex items-center gap-4 text-lg">
    <span className="text-accent">
        <HiOutlineMail className="text-2xl" />
    </span>
    <span>sadsatof333@gmail.com</span>
</div>

<div className="flex items-center gap-4 text-lg">
    <span className="text-accent">
        <HiOutlineMapPin className="text-2xl" />
    </span>
    <span>Idleb , Syria</span>
</div>
</div>

</div>




<div className="flex-1">

   <form className="flex flex-col gap-6 items-start">
    <div className="flex flex-col xl:flex-row gap-6 w-full">
        <div className="w-full">
            <label htmlFor="name">
                Firstname <span className="text-accent">*</span>
               
            </label>
             <Input id="firstname" name="firstname" placeholder="First name"  required/>
        </div>
         <div className="w-full">
            <label htmlFor="name">
                Lastname <span className="text-accent">*</span>
               
            </label>
             <Input id="lastname" name="lastname" placeholder="Last name"  required/>
        </div>
    </div>
      <div className="w-full">
            <label htmlFor="name">
                Email <span className="text-accent">*</span>
               
            </label>
             <Input id="email" name="email" placeholder="Youremail@example.com"  required/>
        </div>

        <div className="w-full">
 <label htmlFor="name">
               I`m interested in <span className="text-accent">*</span>
               
            </label>

            <Select name="service" required>
                <SelectTrigger id="service" className="w-full !h-12 bg-white/5 border-white/10 px-4">
                    <SelectValue placeholder="Choose here" />
                </SelectTrigger>

                <SelectContent className="bg-black border-white/20">
                    <SelectItem value="webdev">Web Development</SelectItem>
                        <SelectItem value="uiux">UI & UX Design</SelectItem>
                          <SelectItem value="logo">Logo Design</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <div className="w-full">
<Label htmlFor="name">
    Message <span className="text-accent">*</span>
</Label>
<Textarea
id="message"
name="message"
placeholder="Write your message..."
className="min-h-[160px] bg-white/5 border-white-10 focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
/>
        </div>
        <button className="btn btn-lg btn-accent">
            <div className="flex items-center gap-3">
                <span className="font-medium">Send message</span>
                <HiOutlineArrowLongRight className="text-xl" />
            </div>
        </button>
    </form> 
</div>
</div>
</div>
</div>
        </motion.section>
    )
}