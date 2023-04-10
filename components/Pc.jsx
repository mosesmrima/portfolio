import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera, Preload, useGLTF} from "@react-three/drei";


const Computers = ({ isMobile }) => {
    const computer = useGLTF("./pc/scene.gltf");

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 3, 10]}/>
            <OrbitControls
                enableZoom={false}
                enableRotate={true}
                enablePan={false}
            />
            <ambientLight args={["white", 0.75]}/>
            <mesh>
                <primitive
                    object={computer.scene}
                    position={[0, -1, 0]}
                    rotation={[0, -1.9, 0]}
                    scale={0.75}
                />
            </mesh>
        </>
    );
};

const Pc = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            gl={{ preserveDrawingBuffer: true }}

        >
            <Suspense>
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default Pc;