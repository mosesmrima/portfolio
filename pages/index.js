import {Canvas} from "@react-three/fiber";
import Image from "next/image"
import me from "../public/me.jpeg"
import {Suspense, useEffect} from "react";
import Three from "@/helpers/components/Three";
import SplitType from 'split-type'
import gsap from "gsap";
export default function Home() {
    useEffect(()=> {
        new SplitType("#hello")
        let tl = gsap.timeline()
        gsap.to("#hello", {
            opacity: 1,
            duration: 0.1
        })
        tl.to(".char", {
            y: 0,
            x: -70,
            stagger: 0.05,
            delay: 2.5,
            duration: 1.5
        })
        gsap.set("#hello2", {
            x: -1000
        })
        tl.to("#hello2", {
            opacity: 1,
            x: 0,
            ease: "power1",
            duration: 1
        }, ">")
        tl.to("#hello3", {
            opacity: 1,
            x: 90,
            duration: 1
        }, ">")
        gsap.to("#me", {
            opacity: 1,
            duration: 10,
            delay: 2
        })

    }, [])
    return (
        <div className={"relative"}>

                <Canvas shadows >
                    <Suspense fallback={null}>
                        <Three/>
                    </Suspense>
                </Canvas>

            <div className={"hero  absolute top-0 right-0  w-screen p-4 flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-4"}>
                <div>
                    <div className={"z-1 relative sm:text-3xl text-xl text-green-900 max-w-[900px] w-[450px]  text-center p-8 rounded-lg min-h-[350px] m-4"}>
                       <h1 id={"hello"} className={"sm:text-4xl text-3xl sm:px-1 px-2 opacity-0 text-[#F0F0F0]"}>Moses Mrima</h1>
                        <h1 id={"hello2"} className={"opacity-0"}>Security Researcher</h1>
                        <h1 id={"hello3"} className={"opacity-0 sm:px-1, px-3"}>Software Engineer</h1>
                    </div>
                </div>
                <div className={"max-w-[200px]"}>
                    <Image id={"me"} alt={""} src={me} className={"rounded-full drop-shadow-lg opacity-0"}/>
                </div>
            </div>

        </div>
    )
}