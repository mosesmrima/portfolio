import {roboto, pressStart2P} from "@/pages";
import { Carousel} from 'flowbite-react';
import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi"

export default function Projects() {

    return (
        <div className={`projects p-8 flex flex-col justify-center items-center`}>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 sm:w-[75vw] w-[90vw] max-w-[800px]">
                <Carousel className={"sm:w-[75vw] w-[90vw] max-w-[800px]"} slideInterval={6000}  leftControl={<FiArrowLeftCircle size={30} style={{ stroke: "url(#blue-gradient)" }}/>} rightControl={<FiArrowRightCircle size={30} style={{ stroke: "url(#blue-gradient)" }}/>} >
                    <div className="flex h-full items-center justify-center bg-yellow-400 w-full">
                        Slide 1
                    </div>
                    <div className="flex h-full items-center justify-center bg-green-400 w-full">
                        Slide 2
                    </div>
                    <div className="flex h-full items-center justify-center bg-red-400 w-full">
                        Slide 3
                    </div>

                </Carousel>
            </div>
        </div>
    )
}