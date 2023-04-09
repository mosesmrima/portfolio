import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Three from "@/components/Three";
import Hero from "@/components/Hero";
import About from "@/components/About";


export default function Home() {

    return (
     <>
         <div className={"relative"}>
             <Canvas shadows>
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