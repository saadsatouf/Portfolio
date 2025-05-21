import{
    HiOutlineMail,
     HiOutlinePhone,
      HiOutlineUser,
       HiOutlineLocationMarker ,
} from "react-icons/hi"


export default function Info(){
    return(
        <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-[280px] flex items-start gap-4">
<HiOutlineUser className="text-2xl mt-1 text-accent" />
               
                <div>
                    <p>Date of Birth</p>
                    <p>31 01 2003</p>
                </div>
            </div>

   <div className="w-[280px] flex items-start gap-4">
<HiOutlineMail className="text-2xl mt-1 text-accent" />
                
                <div>
                    <p>Email Address</p>
                    <p>sadsatofsy1@gmail.com</p>
                </div>
</div>
</div>

     <div className="flex flex-col md:flex-row gap-4">
                <div className="w-[280px] flex items-start gap-4">
<HiOutlinePhone className="text-2xl mt-1 text-accent" />
               
                <div>
                    <p>Phone</p>
                    <p>+352 681 550 982</p>
                </div>
            </div>

   <div className="w-[280px] flex items-start gap-4">
<HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
                
                <div>
                    <p>Location</p>
                    <p>Idleb , Syria</p>
                </div>
</div>
</div>
</div>
           
    )
}