'use client'

import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { Group } from "three";
import { OrbitControls } from '@react-three/drei';

useGLTF.preload("/3D/trash.glb");

export default function Trash(){
    return(
        <div className="w-[300px] h-[450px] lg:w-[350px] lg:h-[500px]">
            <Canvas camera={{ position: [0, 0, 10]}}>
                <Environment preset="city" />
                <ambientLight intensity={2} />
                <directionalLight position={[0, 0, 7]} />
                <Model url="/3D/trash.glb"/>
                <OrbitControls autoRotate enablePan={false} enableZoom={false} minDistance={1} maxDistance={5} autoRotateSpeed={0.4}/>
            </Canvas>
        </div>
    );
}


function Model({ url } : {url : string}){
    const { scene }: { scene: Group } = useGLTF(url);
    scene.scale.set(0.7, 0.7, 0.7);
    return <primitive object={scene} />;
}
