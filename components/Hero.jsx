import Image from "next/image";
import me from "@/public/me.jpeg";
import {useEffect} from "react";
import SplitType from "split-type";
import gsap from "gsap";
import {Roboto} from "next/font/google"
import {FiTwitter} from "react-icons/fi"
import {TbBrandGithub} from "react-icons/tb"
import {SlSocialLinkedin} from "react-icons/sl"
import Link from "next/link";

const roboto = Roboto({weight: "900", subsets: ["latin"], variable: "--font-inter", preload: false})

export default function Hero() {
    useEffect(()=> {
        new SplitType("#hello")
        let tl = gsap.timeline()
        gsap.to("#hello", {
            opacity: 1,
            duration: 0.1
        })
        tl.to(".char", {
            y: 0,
            x: -0,
            stagger: 0.05,
            delay: 2,
            duration: 1.5
        })
        gsap.set("#hello2", {
            x: -1000
        })
        gsap.set("#hello3", {
            scale: 0.3,
            opacity: 0
        })
        tl.to("#hello2", {
            opacity: 1,
            x: 30,
            ease: "power1",
            duration: 1
        }, ">")
        tl.to("#hello3", {
            opacity: 1,
            x: 75,
            scale: 1,
            duration: 1,
        }, ">")
        gsap.to("#me", {
            opacity: 0.5,
            duration: 10,
            delay: 2
        })

    }, [])
    return (
            <div className={"hero  absolute top-0 right-0  w-screen p-4 flex flex-col justify-center items-center"}>
                <div className={"flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-1 p-1"}>
                    <div>
                        <div className={`${roboto.variable} mx-auto z-1 relative sm:text-3xl text-xl text-[#F0F0F0] max-w-[900px] min-w-[450px]  text-center sm:p-4 p-12 rounded-lg min-h-[350px] m-4`}>
                            <h1 id={"hello"} className={"font-extrabold sm:text-5xl text-4xl sm:px-1 px-2 opacity-0 text-transparent bg-clip-text bg-gradient-to-tl from-white  to-neutral-500"}>Moses Mrima</h1>
                            <h1 id={"hello2"} className={"opacity-0 text-transparent bg-clip-text bg-gradient-to-br from-neutral-600  to-white"}>Security Researcher</h1>
                            <h1 id={"hello3"} className={"opacity-0 sm:px-1, px-3 text-transparent bg-clip-text bg-gradient-to-tr from-white to-neutral-600"}>Software Engineer</h1>
                        </div>
                    </div>
                    <div className={"flex gap-6 justify-between"}>
                        <div className={"sm:max-w-[250px] min-w-[150px] max-w-[200px]"}>
                            <Image placeholder={"blur"} priority={true} id={"me"} alt={""} src={me} className={"rounded-full drop-shadow-lg opacity-0"}/>
                        </div>
                        <div className={" flex flex-col lg:flex-row justify-center items-center gap-4"}>
                            <svg width="0" height="0">
                                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                    <stop stopColor="white" offset="0%" />
                                    <stop stopColor="#4b5563" offset="100%" />
                                </linearGradient>
                            </svg>
                            <Link href={"https://www.linkedin.com/in/mrima/"}>
                                <SlSocialLinkedin className={"mb-[8px] opacity-80 hover:opacity-100 cursor-pointer"} style={{ fill: "url(#blue-gradient)" }} size={28}/>
                            </Link>
                            <Link href={"https://github.com/mosesmrima"}>
                                <TbBrandGithub className={"opacity-80 hover:opacity-100 cursor-pointer"} style={{ stroke: "url(#blue-gradient)" }} size={28}/>
                            </Link>
                            <Link href={"https://twitter.com/kvltbyte"}>
                                <FiTwitter className={"opacity-80 hover:opacity-100 cursor-pointer"} style={{ stroke: "url(#blue-gradient)" }} size={28}/>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
    )
}