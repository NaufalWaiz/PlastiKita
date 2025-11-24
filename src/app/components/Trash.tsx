'use client'

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { OrbitControls } from '@react-three/drei';

export default function Trash(){
    return(
        <Canvas style={{
            width : '350px',
            height : '500px',
        }} camera={{ position: [0, 0, 10]}}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[0, 0, 7]} />
            <Model url="/3D/trash.glb"/>
            <OrbitControls autoRotate enablePan={false} minDistance={1} maxDistance={5} autoRotateSpeed={0.4}/>
        </Canvas>
    );
}


function Model({ url } : {url : string}){
    const { scene }: { scene: Group} = useGLTF(url) as any;
    scene.scale.set(0.7, 0.7, 0.7)
    return <primitive object={scene} />;
}