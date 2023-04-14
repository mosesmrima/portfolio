import {roboto, pressStart2P} from "@/pages";
import { Carousel} from 'flowbite-react';
import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi"
import Image from "next/image";
import vigil from "/public/vigil.png"

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
                            <p className={`${roboto.variable} font-sans text-base text-transparent bg-clip-text bg-gradient-to-tl from-neutral-400 to-white`}>
                                A cyber threat intelligence dashboard and API to track significant cyber security incidents.
                            </p>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    )
}