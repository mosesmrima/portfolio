import {OrbitControls, PerspectiveCamera, useGLTF} from "@react-three/drei";
import gsap from "gsap"
import {useEffect, useRef} from "react";

export  default function Three() {
    const drone = useGLTF("./drone/scene.gltf")
    const orbitControlsRef = useRef(null)
    const sphereRef = useRef(null)
    useEffect(() => {
            gsap.set(sphereRef.current.position, {
                x: 0.5,
                y: 0,
                z: -1
            })
            let xTo = gsap.quickTo(sphereRef.current.position, "x", {
                duration: 0.6,
                ease: "power3",
            });
            let yTo = gsap.quickTo(sphereRef.current.position, "y", {
                duration: 0.6,
                ease: "power.inOut",
            });
            function handleMouseMove(e) {
                const screenWidth = window.innerWidth
                const screenHeight = window.innerHeight
                const mouseNdcX = (e.clientX / screenWidth) * 2 - 1
                const mouseNdcY = (e.clientY / screenHeight) * -2 + 1
                const clampedNdcX = Math.max(-1, Math.min(mouseNdcX, 1));
                const clampedNdcY = Math.max(-1, Math.min(mouseNdcY, 1));
                xTo(clampedNdcX>0?clampedNdcX*5:clampedNdcX*5.5);
                yTo(clampedNdcY>0?clampedNdcY * 2.2: clampedNdcY*2.7);
            }

            window.addEventListener("mousemove", handleMouseMove);
        // }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [])

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 5]}/>
            <OrbitControls ref={orbitControlsRef}
                           enableZoom={false}
                           enableRotate={false}
                           enablePan={true}
            />
            <mesh ref={sphereRef} scale={0.3}>
                <primitive  object={drone.scene} rotation={[0, 0, 0]}/>
            </mesh>

            <ambientLight args={["blue", 0.15]}/>
            <spotLight angle={0.5} args={["red", 1]} position={[-3, 7, 0]} castShadow={true}/>
        </>
    )
}