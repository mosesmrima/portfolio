import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {TextPlugin} from  "gsap/dist/TextPlugin"
import {useEffect} from "react"
import {Roboto} from "next/font/google";

const roboto = Roboto({weight: "900", subsets: ["latin"],  variable: '--font-inter'})
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

export default function About () {


    useEffect(()=>{
        gsap.to(".hello", {
            text: {
                value: "Hello, Im Mrima, a software engineer by day and I track ransomware gangs and reverse engineer malware by night",
            },
            duration: 4,
            delay: 0.5,
            scrollTrigger: {
                trigger: ".hello",
                start: "bottom bottom"
            },
        })
    }, [])
    return (
        <div className={"about p-8"}>
            <h1 className={`${roboto.variable} font-extrabold sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-white to-neutral-500 text-center w-full mx-auto p-12`} >About Me</h1>
            <div className={"flex justify-center items-center"}>
             <div className={"bg-gradient-to-tl from-white to-neutral-500 rounded-2xl p-0.5"}>
                 <div className={"about-text rounded-2xl"}>
                     <div className={"bg-white bg-opacity-5 backdrop-blur-lg max-w-[350px] min-h-[200px] h-auto rounded-2xl p-4 flex justify-center items-center"}>
                         <p className={"hello text-lg text-transparent bg-clip-text bg-gradient-to-tl from-white to-neutral-300"}>
                             010101 10 010101 1 10101010 01010101 10 010 010 0 01010 0101010101 10101 101 1010101 10101010 0101010 01 10101
                         </p>
                     </div>
                 </div>
             </div>
            </div>
        </div>
    )
}


