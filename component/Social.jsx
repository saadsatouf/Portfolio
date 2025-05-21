import {
    BiLogoFacebook,
    BiLogoInstagramAlt,
    BiLogoDribbble,
    BiLogoLinkedin
} from "react-icons/bi"

const socials = [
   {
 icon:<BiLogoFacebook />,
 path:","
   },
    {
 icon:<BiLogoInstagramAlt />,
 path:","
   },
    {
 icon:<BiLogoDribbble />,
 path:","
   },
    {
 icon:<BiLogoLinkedin />,
 path:","
   },
]
export default function Social({containerStyles , iconsStyles}){
    return(
        <div className={containerStyles}>
      {socials.map((item , index)=>{
return(
    <div key={index} className={iconsStyles}>
{item.icon}
    </div>
)
      })}      

        </div>
    )
}