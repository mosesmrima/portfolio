import {OrbitControls, PerspectiveCamera, useGLTF} from "@react-three/drei";
import gsap from "gsap"
import MotionPathPlugin from "gsap/dist/MotionPathPlugin"
import {useEffect, useRef, useState} from "react";


export  default function Three() {
    const [windowDimensions, setWindowWidth] = useState({width: window.innerWidth, height: window.innerHeight})
    const drone = useGLTF("./drone/scene.gltf")
    const sphereRef = useRef(null)
    gsap.registerPlugin(MotionPathPlugin);


    useEffect(() => {
        let proxy = document.createElement("div");
        const handleResize = () => {
            setWindowWidth({width: window.innerWidth, height: window.innerHeight})
        }
        const screenWidth = windowDimensions.width
        const screenHeight = windowDimensions.height
        let setX = gsap.quickSetter(sphereRef.current.position, "x");
        let setY = gsap.quickSetter(sphereRef.current.position, "y");
        let setZ = gsap.quickSetter(sphereRef.current.position, "z");
        let setRot = gsap.quickSetter(sphereRef.current.position, "z");
        let xTo = gsap.quickTo(sphereRef.current.position, "x", {
            duration: 0.8,
            ease: "power1.out",
        });
        let yTo = gsap.quickTo(sphereRef.current.position, "y", {
            duration: 1,
            ease: "power1.out",
        });
        window.addEventListener("resize", handleResize)
        function handleMouseMove(e) {
            const mouseNdcX = (e.clientX / screenWidth) * 2 - 1
            const mouseNdcY = (e.clientY / screenHeight) * -2 + 1
            const clampedNdcX = Math.max(-1, Math.min(mouseNdcX, 1));
            const clampedNdcY = Math.max(-1, Math.min(mouseNdcY, 1));
            xTo(clampedNdcX>0?clampedNdcX*(screenWidth<850?1:5):clampedNdcX*(screenWidth<850?1:5.5));
            yTo(clampedNdcY>0?clampedNdcY * 2.2: clampedNdcY*2.7);
        }
        if (screenWidth > 800) {
            proxy.remove()
            window.addEventListener("mousemove", handleMouseMove);
        } else {
            window.removeEventListener("mousemove", handleMouseMove)
            function updateMesh() {
                setX(gsap.getProperty(proxy, "x"));
                setY(gsap.getProperty(proxy, "y"));
                setZ(gsap.getProperty(proxy, "z"));
                setRot(gsap.getProperty(proxy, "rotation"));
            }
            gsap.to(proxy, {
                duration: 15,
                repeat: -1,
                repeatDelay: 2,
                motionPath: {
                    path: [{x: -2, y: -2}, {x: 1, y: 1}, {x: 1.2, y: 1.3}, {x: 1.3, y: 1.4},{x: 1.5, y: 1.6}, {x: 1.2, y: 1.6}, {x: 0.9, y: 1.7}, {x: - 2, y: 2}],
                },
                onUpdate: updateMesh
            })
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("resize", handleResize)
        };
    }, [windowDimensions.width, windowDimensions.height])

    return (
        <>
            <PerspectiveCamera makeDefault position={[-1, 0, 8]}/>
            <OrbitControls
                           enableZoom={false}
                           enableRotate={false}
                           enablePan={false}
            />
            <mesh ref={sphereRef} scale={0.3} >
                <primitive  object={drone.scene} rotation={[0, 0, 0]}/>
            </mesh>
            <ambientLight args={["#2b354f", 0.75]}/>
            <spotLight angle={0.5} args={["#4b5563", 1]} position={[-2, 6, 0]} castShadow={true}/>
        </>
    )
}