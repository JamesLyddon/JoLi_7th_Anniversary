import { useEffect, useRef, useState } from 'react'
import { Center, Text3D, OrbitControls, useTexture, Float } from '@react-three/drei'
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

	// Spring animation
	const { moveUp1 } = useSpring({
		from: {
			moveUp1: -10,
		},
		to: [
			{
				moveUp1: -10,
				delay: 500,
			},
			{
				moveUp1: 1.5,
			},
		],
		config: {
			mass: 5,
			tension: 400,
			friction: 50,
		},
	})

	const { moveUp2 } = useSpring({
		from: {
			moveUp2: -10,
		},
		to: [
			{
				moveUp2: -10,
				delay: 750,
			},
			{
				moveUp2: 1.25,
			},
		],
		config: {
			mass: 5,
			tension: 400,
			friction: 50,
		},
	})

	const { moveIn1 } = useSpring({
		from: {
			moveIn1: -20,
		},
		to: [
			{
				moveIn1: -20,
				delay: 1500,
			},
			{
				moveIn1: 0,
			},
		],
		config: {
			mass: 5,
			tension: 400,
			friction: 50,
		},
	})

	const { moveIn2 } = useSpring({
		from: {
			moveIn2: 20,
		},
		to: [
			{
				moveIn2: 20,
				delay: 1750,
			},
			{
				moveIn2: 0,
			},
		],
		config: {
			mass: 5,
			tension: 400,
			friction: 50,
		},
	})

	return (
		<>
			<OrbitControls makeDefault />

			<Float
				speed={3}
				floatIntensity={1}
			>
				<animated.group position-y={moveUp1}>
					<Center
						position={[0, 1.5, 0]}
						rotation-x={-Math.PI * 0.1}
					>
						<Text3D
							material={material}
							font={paytone}
							size={0.9}
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
				</animated.group>

				<animated.group position-y={moveUp2}>
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
				</animated.group>

				<animated.group position-x={moveIn1}>
					<Center
						position={[0, -0.25, 0]}
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
				</animated.group>

				<animated.group position-x={moveIn2}>
					<Center
						position={[4, -1, 0]}
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
				</animated.group>
			</Float>
		</>
	)
}
