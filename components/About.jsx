import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {TextPlugin} from  "gsap/dist/TextPlugin"
import {useEffect} from "react"
import {Roboto} from "next/font/google";

const roboto = Roboto({weight: "900", subsets: ["latin"],  variable: '--font-inter', preload: false})
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

export default function About () {


    useEffect(()=>{

        gsap.to(".hello", {
            text: {
                value: "I am a cyber security researcher and software engineer. With a passion for both fields, I have been continually developing my skills in reverse engineering malware and performing threat intelligence, including tracking ransomware gangs. As a software engineer, I specialize in building user-friendly and scalable applications with security in mind.",
            },
            duration: 3,
            delay: 2,
            scrollTrigger: {
                trigger: ".hello",
                start: "bottom bottom"
            },
        })
    }, [])
    return (
        <div className={"about p-8"}>
            <h1 className={`${roboto.variable} font-extrabold sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-white to-neutral-500 text-center w-full mx-auto p-12`} >$whomai</h1>
            <div className={"flex justify-around items-center p-8 md:flex-row flex-col"}>
             <div className={"bg-gradient-to-tl from-white to-neutral-500 rounded-2xl p-0.5"}>
                 <div className={"about-text rounded-2xl"}>
                     <div className={"bg-white bg-opacity-5 backdrop-blur-lg max-w-[350px] sm:min-w-[450px] min-w-[250px] min-h-[200px] h-auto rounded-2xl p-4 flex justify-center items-center"}>
                         <p className={"hello text-lg text-transparent bg-clip-text bg-gradient-to-tl from-white to-neutral-300"}>
                             0 01 1 1010101010101 1010101010 010 01010101 101010101 1010 0 0101010 010 0101 1010101 1 1010 0101 10101010101 1010101010 01 101010 01 1010101 10101010101 1010101 101 1010101010 010101 1010101010101 101010101 10101010 0101010101 101010 01 1 10101010 010101010 0 0101010101 10 01010101 1010101010101 101 10101010 010101010101 1010 01010101 10 01010
                         </p>
                     </div>
                 </div>
             </div>
            </div>
        </div>
    )
}


