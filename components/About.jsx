import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {TextPlugin} from  "gsap/dist/TextPlugin"
import {useEffect} from "react"
import {SiC, SiGnubash, SiLinux, SiPuppet} from "react-icons/si"
import {TbBrandJavascript, TbBrandPython} from "react-icons/tb"
import {FaGitSquare} from "react-icons/fa"
import {pressStart2P, roboto} from "@/pages"

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
            animation.to(expander, { width: 350, duration:0.4})
            animation.to(heading, {rotation: 360, top: 10, left: 50})
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
            <div className={"flex justify-around items-center gap-4 p-8 md:flex-row flex-col"}>
             <div className={"bg-gradient-to-tl from-white to-neutral-500 rounded-2xl p-0.5"}>
                 <div className={"about-text rounded-2xl"}>
                     <div className={"bg-white bg-opacity-5 backdrop-blur-lg max-w-[450px] min-w-[300px] rounded-2xl p-4 flex justify-center items-center"}>
                         <p className={`hello ${roboto.variable} font-sans text-base text-transparent bg-clip-text bg-gradient-to-tl from-neutral-400 to-white`}>
                             0 01 1 1010101010101 1010101010 010 01010101 101010101 1010 0 0101010 010 0101 1010101 1 1010 0101 10101010101 1010101010 01 101010 01 1010101 10101010101 1010101 101 1010101010 010101 1010101010101 101010101 10101010 0101010101 101010 01 1 10101010 010101010 0 0101010101 10 01010101 1010101010101 101 10101010 010101010101 1010 01010101 10 01010
                         </p>
                     </div>
                 </div>
             </div>
                <div className="hover:cursor-pointer sm:w-6/12 w-[95vw] flex justify-center items-center sm:gap-6 gap-2">
                    <div className="expander bg-neutral-300 bg-opacity-20 border border-zinc-300 relative sm:w-[60px] w-[45px] min-h-[350px] h-auto   max-h-[350px] rounded-3xl overflow-hidden flex justify-center items-center p-2">
                        <h1 className={`${pressStart2P.variable} font-serif text-xs align-bottom whitespace-nowrap rotate-90 heading absolute  sm:-left-20 -left-24 top-[50%] text-transparent bg-clip-text bg-gradient-to-tl from-neutral-100 to-neutral-300`}>Security Researcher</h1>
                        <div className={`${roboto.variable} font-sans content opacity-0 flex flex-col justify-between items-center gap-6`}>
                            <h4>Skills</h4>
                            <ul className={"list-disc"}>
                                <li>Reverse Engineering</li>
                                <li>Malware Analysis</li>
                                <li>Threat Intel & Hunting</li>
                                <li>Network Analysis</li>
                                <li>Digital Forensics</li>
                            </ul>
                            <button type="button" className="text-black bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-zinc-300 shadow-lg shadow-zinc-500/50 dark:shadow-lg dark:shadow-zinc-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Resume</button>
                        </div>
                    </div>
                    <div className="expander bg-neutral-300 bg-opacity-20 border border-zinc-300 relative sm:w-[60px] w-[45px] min-h-[350px] h-auto   max-h-[350px] rounded-3xl overflow-hidden flex justify-center items-center p-2">
                        <h1 className={`${pressStart2P.variable} font-serif text-xs align-bottom whitespace-nowrap rotate-90 heading absolute  sm:-left-20 -left-24 top-[50%] text-transparent bg-clip-text bg-gradient-to-tl from-neutral-100 to-neutral-300`}>Software Engineer</h1>
                        <div className={`${roboto.variable} font-sans content opacity-0 flex flex-col justify-between items-center gap-6`}>
                            <div className={"flex justify-between items-start gap-8"}>
                                <div className={"flex flex-col"}>
                                    <h4>Frontend</h4>
                                    <ul className={"list-disc"}>
                                        <li>React</li>
                                        <li>Nextjs</li>
                                        <li>Tailwindcss</li>
                                        <li>Ant Design</li>
                                        <li>Threejs</li>
                                    </ul>
                                </div>
                                <div className={"flex flex-col"}>
                                    <h4>Backend</h4>
                                    <ul className={"list-disc"}>
                                        <li>Node</li>
                                        <li>Expressjs</li>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                        <li>REST APIs</li>
                                    </ul>
                                </div>
                            </div>
                            <button type="button" className="text-black bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-zinc-300 shadow-lg shadow-zinc-500/50 dark:shadow-lg dark:shadow-zinc-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col justify-center items-center mt-6"}>
                <h3 className={`${pressStart2P.variable} font-serif text-center text-transparent bg-clip-text bg-gradient-to-tl from-white to-neutral-500`}>Languages & Other Skills</h3>
                <div className={"flex gap-4 p-4"}>
                    <SiC style={{ fill: "url(#blue-gradient)" }} size={28}/>
                    <TbBrandJavascript style={{ stroke: "url(#blue-gradient)" }} size={29}/>
                    <TbBrandPython style={{ stroke: "url(#blue-gradient)" }} size={29}/>
                    <SiGnubash style={{ fill: "url(#blue-gradient)" }} size={28}/>
                    <SiLinux style={{ fill: "url(#blue-gradient)" }} size={28}/>
                    <FaGitSquare style={{ fill: "url(#blue-gradient)" }} size={28}/>
                    <SiPuppet style={{ fill: "url(#blue-gradient)" }} size={28}/>
                </div>
            </div>
        </div>
    )
}


