import { useEffect, useRef } from 'react'
import { useMatcapTexture, Center, Text3D, OrbitControls, useTexture } from '@react-three/drei'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

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

	return (
		<>
			<OrbitControls makeDefault />
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
