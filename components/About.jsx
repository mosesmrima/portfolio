import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {TextPlugin} from  "gsap/dist/TextPlugin"
import {useEffect} from "react";



gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

export default function About () {


    useEffect(()=>{
        gsap.to(".hello", {
            text: {
                value: "Hello, Im Mrima, a software engineer by day and I track ransomware gangs and reverse engineer malware by night",
            },
            duration: 10,
            delay: 0.5,
            scrollTrigger: {
                trigger: ".hello",
                start: "bottom bottom"
            },
        })
    }, [])
    return (
        <div className={"about p-8 flex flex-col justify-center items-center"}>
            <h1 className={"text-white bg-red-100 justify-self-start"} >About Me</h1>
            <div className={"flex justify-center items-center"}>
                <div className={"hello max-w-[350px] bg-blue-400 h-auto"}>
                    01 01 01 00 10 10 10 01 01 01 01 00 10 01 01 01 01 00 10 10 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01
                </div>
            </div>
        </div>
    )
}