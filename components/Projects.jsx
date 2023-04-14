import {roboto, pressStart2P} from "@/pages";
import { Carousel} from 'flowbite-react';
import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi"
import Image from "next/image";
import vigil from "/public/vigil.png"
import hackA from "/public/hackA.png"
import kentronix from "/public/kentronix.png"
import mifuse from "/public/mifuse.png"
import Link from "next/link";

export default function Projects() {

    return (
        <div className={`projects p-8 flex flex-col justify-center items-center`}>
            <h2 className={`${pressStart2P.variable} font-serif sm:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-tl from-white to-neutral-500 text-center w-full mx-auto p-4`} >portfolio</h2>
            <div className="h-[350px] sm:h-64 xl:h-80 2xl:h-96 sm:w-[75vw] w-[90vw] max-w-[800px]">
                <Carousel className={"sm:w-[75vw] w-[90vw] max-w-[800px]"} slideInterval={6000}  leftControl={<FiArrowLeftCircle size={30} style={{ stroke: "url(#blue-gradient)" }}/>} rightControl={<FiArrowRightCircle size={30} style={{ stroke: "url(#blue-gradient)" }}/>} >
                    <div className="flex flex-col h-full items-center justify-center items center bg-zinc-300 bg-opacity-10 rounded-2l border border-zinc-500 w-full p-4">
                        <h2 className={`${pressStart2P.variable} font-serif sm:text-xl text-lg text-transparent bg-clip-text bg-gradient-to-tl from-white to-neutral-500`}>Vigil</h2>
                        <div className={"w-11/12 h-full flex sm:flex-row flex-col gap-4 justify-center items-center"}>
                            <div>
                                <Image src={vigil} alt={"vigil"} className={"rounded-xl"}/>
                            </div>
                            <p className={`${roboto.variable} font-sans text-base text-transparent bg-clip-text bg-gradient-to-tl from-neutral-400 to-white text-center`}>
                                A cyber threat intelligence dashboard and API to track significant cyber security incidents.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col h-full items-center justify-center items center bg-zinc-300 bg-opacity-10 rounded-2l border border-zinc-500 w-full p-4">
                        <h2 className={`${pressStart2P.variable} font-serif sm:text-xl text-lg text-transparent bg-clip-text bg-gradient-to-tl from-white to-neutral-500`}>Jackal</h2>
                        <div className={"w-11/12 h-full flex sm:flex-row flex-col gap-4 justify-center items-center"}>
                            <div>
                                <Image src={hackA} alt={"hackA"} className={"rounded-xl"}/>
                            </div>
                            <div className={"flex flex-col justify-between items-center"}>
                                <p className={`${roboto.variable} font-sans text-base text-transparent bg-clip-text bg-gradient-to-tl from-neutral-400 to-white text-center`}>
                                    A 2-pass assembler for the Hack assembly language designed to generate 16-bit machine code for the Hack computer platform.
                                </p>
                                <Link href={"https://github.com/mosesmrima/HackA"}>
                                    <button type="button" className="mt-2 text-black bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-zinc-300 shadow-lg shadow-zinc-500/50 dark:shadow-lg dark:shadow-zinc-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">View</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col h-full items-center justify-center items center bg-zinc-300 bg-opacity-10 rounded-2l border border-zinc-500 w-full p-4">
                        <h2 className={`${pressStart2P.variable} font-serif sm:text-xl text-lg text-transparent bg-clip-text bg-gradient-to-tl from-white to-neutral-500`}>Kentronix</h2>
                        <div className={"w-11/12 h-full flex sm:flex-row flex-col gap-4 justify-center items-center"}>
                            <div className={"w-[50%]"}>
                                <Image src={kentronix} alt={"kentronix"} className={"rounded-xl"}/>
                            </div>
                            <div className={"flex flex-col justify-between items-center"}>
                                <p className={`${roboto.variable} font-sans text-base text-transparent bg-clip-text bg-gradient-to-tl from-neutral-400 to-white text-center`}>
                                    A responsive website built using Tailwind and Nextjs
                                </p>
                                <Link href={"https://www.kentronix.tech/"}>
                                    <button type="button" className="mt-2 text-black bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-zinc-300 shadow-lg shadow-zinc-500/50 dark:shadow-lg dark:shadow-zinc-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">View</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col h-full items-center justify-center items center bg-zinc-300 bg-opacity-10 rounded-2l border border-zinc-500 w-full p-4">
                        <h2 className={`${pressStart2P.variable} font-serif sm:text-xl text-lg text-transparent bg-clip-text bg-gradient-to-tl from-white to-neutral-500`}>MiFUSE</h2>
                        <div className={"w-11/12 h-full flex sm:flex-row flex-col gap-4 justify-center items-center"}>
                            <div>
                                <Image src={mifuse} alt={"fuse"} className={"rounded-xl"}/>
                            </div>
                            <div className={"flex flex-col justify-between items-center"}>
                                <p className={`${roboto.variable} font-sans text-base text-transparent bg-clip-text bg-gradient-to-tl from-neutral-400 to-white text-center`}>
                                    A user-space Linux filesystem built using C and libFUSE3 that enables non-privileged users to mount a personalized filesystem.
                                </p>
                                <Link href={"https://github.com/mosesmrima/MiFUSE"}>
                                    <button type="button" className="mt-2 text-black bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-zinc-300 shadow-lg shadow-zinc-500/50 dark:shadow-lg dark:shadow-zinc-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">View</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}