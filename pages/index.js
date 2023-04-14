import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Three from "@/components/Three";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import {Press_Start_2P, Roboto} from "next/font/google";
export const roboto = Roboto({weight: "900", subsets: ["latin"],  variable: '--font-roboto', preload: false})
export const pressStart2P = Press_Start_2P({weight: "400", subsets:["latin"], variable: "--font-press", preload: false})

export default function Home() {

    return (
     <>
         <div className={"relative"}>
             <Canvas style={{background: "red", width: "100vw", height: "100vh",  backgroundImage: "radial-gradient(circle farthest-side at 70% 45%, #11131c, #030304, #0a0b11)",  backgroundSize: "100% 100%", backgroundPosition: "left center", backgroundRepeat: "no-repeat"}} shadows>
                 <Suspense fallback={null}>
                     <Three/>
                 </Suspense>
             </Canvas>
             <Hero/>
         </div>
        <About/>
         <Projects/>
     </>
    )
}
