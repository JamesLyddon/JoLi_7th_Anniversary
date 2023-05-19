import { useEffect, useRef, useState } from 'react'
import { useMatcapTexture, Center, Text3D, OrbitControls, useTexture } from '@react-three/drei'
import { useSpring, animated, config } from '@react-spring/three'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Depth, LayerMaterial, Noise } from 'lamina'
// fonts
const paytone = './fonts/Paytone One_Regular.json'
const helvetiker = './fonts/helvetiker_regular.typeface.json'
const damion = './fonts/Damion_Regular.json'
const poppins = './fonts/Poppins_Regular.json'
const sigmar = './fonts/Sigmar One_Regular.json'

// materials
const material = new THREE.MeshMatcapMaterial()
const material2 = new THREE.MeshMatcapMaterial()
const material3 = new THREE.MeshMatcapMaterial()
const material4 = new THREE.MeshMatcapMaterial()

export default function Experience() {
	const [active, setActive] = useState(false)

	const myMesh = useRef()
	const sphereRef = useRef()
	// spring animation
	const { scale } = useSpring({ scale: active ? 1.5 : 1, config: config.wobbly })

	const matcap = useTexture('/matcaps/MatCapCopper.png')
	const matcap2 = useTexture('/matcaps/1.png')
	const matcap3 = useTexture('/matcaps/430404_BD9295_7E1E21_94544C.png')
	const matcap4 = useTexture('/matcaps/070B0C_B2C7CE_728FA3_5B748B.png')

	useEffect(() => {
		material.matcap = matcap
		material.needsUpdate = true

		material2.matcap = matcap2
		material2.needsUpdate = true

		material3.matcap = matcap3
		material3.needsUpdate = true

		material4.matcap = matcap4
		material4.needsUpdate = true
	}, [])

	useFrame((state, delta) => {
		sphereRef.current.rotation.x += delta * 0.5
		sphereRef.current.rotation.y += delta * 0.5
	})

	return (
		<>
			<OrbitControls makeDefault />

			<mesh
				scale={100}
				ref={sphereRef}
			>
				<sphereGeometry args={[1, 64, 64]} />
				<LayerMaterial side={THREE.BackSide}>
					<Depth
						colorA='#69b6ff'
						colorB='#42a3ff'
						alpha={1}
						mode='normal'
						near={130}
						far={200}
						origin={[100, 100, -100]}
					/>
					<Noise
						mapping='local'
						type='white'
						scale={100}
						colorA='white'
						colorB='black'
						mode='subtract'
						alpha={0.15}
					/>
				</LayerMaterial>
			</mesh>

			{/* <animated.mesh
				scale={scale}
				onClick={() => setActive(!active)}
				ref={myMesh}
			>
				<boxGeometry />
				<meshBasicMaterial />
			</animated.mesh> */}

			<Center
				position={[0, 1.5, 0]}
				rotation-x={-Math.PI * 0.1}
			>
				<Text3D
					material={material}
					font={paytone}
					size={0.8}
					height={0.1}
					curveSegments={12}
					bevelEnabled
					bevelThickness={0.02}
					bevelSize={0.02}
					bevelOffset={0}
					bevelSegments={5}
				>
					Happy 7th Anniversary!
				</Text3D>
			</Center>
			<Center
				position={0}
				rotation-x={-Math.PI * 0.1}
			>
				<Text3D
					material={material3}
					font={paytone}
					size={1}
					height={0.1}
					curveSegments={12}
					bevelEnabled
					bevelThickness={0.02}
					bevelSize={0.02}
					bevelOffset={0}
					bevelSegments={5}
				>
					Jon & Lisa
				</Text3D>
			</Center>
			<Center
				position={[0, -1.5, 0]}
				rotation-x={-Math.PI * 0.1}
			>
				<Text3D
					material={material}
					font={damion}
					size={0.4}
					height={0.05}
					curveSegments={12}
					bevelEnabled
					bevelThickness={0.02}
					bevelSize={0.02}
					bevelOffset={0}
					bevelSegments={5}
				>
					lots of love
				</Text3D>
			</Center>
			<Center
				position={[3, -2, 0]}
				rotation-x={-Math.PI * 0.25}
				rotation-z={Math.PI * 0.03}
			>
				<Text3D
					material={material4}
					font={damion}
					size={0.4}
					height={0.05}
					curveSegments={12}
					bevelEnabled
					bevelThickness={0.02}
					bevelSize={0.02}
					bevelOffset={0}
					bevelSegments={5}
				>
					James, Rachel, Jude, Gizmo & Gonzo
				</Text3D>
			</Center>
		</>
	)
}
