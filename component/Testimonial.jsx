"use client"
import "swiper/css"
import {ImQuotesLeft} from "react-icons/im"
import {Swiper , SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"

const testimonial =[
    {
        message:"lorem cmd knd kndc knd dcn knd knde knde nd",
        name:"Saad Sattouf",

    },
      {
        message:"lorem cmd knd kndc knd dcn knd knde knde nd",
        name:"Saad Sattouf",

    },
      {
        message:"lorem cmd knd kndc knd dcn knd knde knde nd",
        name:"Saad Sattouf",

    },
]
export default function Testimonial(){
    return(
        <Swiper loop={false}
        autoplay={{delay:4000, 
            disableOnInteraction:false
        }}
        className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
        >
{testimonial.map((person , index)=>{
    return(
        <SwiperSlide key={index}>
<div className="flex px-8 py-6 gap-8">
    <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
    <div className="flex flex-col gap-2">
 <p>{person.message}</p>
<p  className="self-end text-accent font-semibold">{person.name}</p>
    </div>
</div>

        </SwiperSlide>
    )
})}
        </Swiper>
    )
}