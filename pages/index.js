import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Three from "@/components/Three";
import Hero from "@/components/Hero";
import About from "@/components/About";


export default function Home() {

    return (
     <>
         <div className={"relative"}>
             <Canvas style={{background: "red", width: "100vw", height: "100vh",  backgroundImage: "radial-gradient(circle farthest-side at 70% 45%, #11131c, #030304, #0a0b11)"}} shadows>
                 <Suspense fallback={null}>
                     <Three/>
                 </Suspense>
             </Canvas>
             <Hero/>
         </div>
        <About/>
     </>
    )
}