import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {TextPlugin} from  "gsap/dist/TextPlugin"
import {useEffect} from "react"
import {Press_Start_2P, Roboto} from "next/font/google";

const roboto = Roboto({weight: "900", subsets: ["latin"],  variable: '--font-roboto', preload: false})
const pressStart2P = Press_Start_2P({weight: "400", subsets:["latin"], variable: "--font-press", preload: false})

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

export default function About () {

    useEffect(()=>{

        let expanders = gsap.utils.toArray(".expander")
        let active // keep track of which expander is open
        expanders.forEach(function(expander){
            let content = expander.querySelector(".content")
            let heading = expander.querySelector(".heading")
            //create animation for each expander
            let animation = gsap.timeline({paused:true})
            animation.to(expander, {width: 350, duration:0.4})
            animation.to(heading, {rotation: 360, top: 5, left: 50})
            animation.to(content, {opacity: 1, duration: 0.5})
            //apply the timeline animation to an animation property on the expander
            expander.animation = animation
            expander.addEventListener("click", function() {
                if(active) {
                    //close the active expander if there is one by reversing it
                    active.animation.reverse()
                }
                expander.animation.play() // play the animation of the element you clicked on (this opens it)
                active = expander // keep track of which expander is open
            })
            //close this expander when you click the close button by reversing the animation

        })

// learn all my GreenSock tricks at
// http://www.creativeCodingClub.com
// access the world's larest collection of premium GreenSock tutorials


        gsap.set(".expander", {backgroundColor:gsap.utils.wrap(["#f5ce5b", "#c570b6", "#78d6e0"])})
        gsap.to(".hello", {
            text: {
                value: "I am a cyber security researcher and software engineer. With a passion for both fields, I have been continually developing my skills in reverse engineering malware and performing threat intelligence, including tracking ransomware gangs. As a software engineer, I specialize in building user-friendly and scalable applications with security in mind.",
            },
            duration: 3,
            delay: 1,
            scrollTrigger: {
                trigger: ".hello",
                start: "bottom bottom",
            },
        })
    }, [])
    return (
        <div className={"about p-8"}>
            <h2 className={`${pressStart2P.variable} font-serif sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-white to-neutral-500 text-center w-full mx-auto p-4`} >$whomai</h2>
            <div className={"flex justify-around items-center p-8 md:flex-row flex-col"}>
             <div className={"bg-gradient-to-tl from-white to-neutral-500 rounded-2xl p-0.5"}>
                 <div className={"about-text rounded-2xl"}>
                     <div className={"bg-white bg-opacity-5 backdrop-blur-lg max-w-[450px] min-w-[300px] rounded-2xl p-4 flex justify-center items-center"}>
                         <p className={`hello ${roboto.variable} font-sans text-base text-transparent bg-clip-text bg-gradient-to-tl from-neutral-400 to-white`}>
                             0 01 1 1010101010101 1010101010 010 01010101 101010101 1010 0 0101010 010 0101 1010101 1 1010 0101 10101010101 1010101010 01 101010 01 1010101 10101010101 1010101 101 1010101010 010101 1010101010101 101010101 10101010 0101010101 101010 01 1 10101010 010101010 0 0101010101 10 01010101 1010101010101 101 10101010 010101010101 1010 01010101 10 01010
                         </p>
                     </div>
                 </div>
             </div>
                <div className="sm:w-6/12 w-screen flex justify-center items-center sm:gap-6 gap-2">
                    <div className="expander relative sm:w-[60px] w-[35px] min-h-[350px]  max-h-[350px] rounded-3xl overflow-hidden bg-black p-8">
                        <h1 className={`${pressStart2P.variable}  heading absolute rotate-90 left-0 top-[50%]`}>Security Researcher</h1>
                        <p className={`${roboto.variable} content opacity-0`}>0 01 1 1010101010101 1010101010 010 01010101 101010101 1010 0 0101010 010 0101 1010101 1 1010 0101 10101010101 1010101010 01 101010 01 1010101 10101010101 1010101 101 1010101010 010101 1010101010101 101010101 10101010 0101010101 101010 01 1 10101010 010101010 0 0101010101 10</p>
                    </div>
                    <div className="expander relative sm:w-[60px] w-[45px] min-h-[350px]  max-h-[350px] rounded-3xl overflow-hidden bg-black">
                        <h1 className={`${pressStart2P.variable} align-bottom whitespace-nowrap rotate-90 heading absolute  sm:left-0 -left-10 top-[50%]`}>Software Engineer</h1>
                        <p className={`${roboto.variable} content opacity-0 `}>0 01 1 1010101010101 1010101010 010 01010101 101010101 1010 0 0101010 010 0101 1010101 1 1010 0101 10101010101 1010101010 01 101010 01 1010101 10101010101 1010101 101 1010101010 010101 1010101010101 101010101 10101010 0101010101 101010 01 1 10101010 010101010 0 0101010101 10</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


