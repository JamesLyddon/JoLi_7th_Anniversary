import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Confet from './Confet.jsx'
import Celebrate from '../public/sounds/Celebrate.mp3'
import { FaMusic } from 'react-icons/fa'

const App = () => {
	const sfx = new Audio(Celebrate)

	function play() {
		sfx.play()
		console.log('hey')
	}

	return (
		<>
			<Confet />
			<div className='play--container'>
				<FaMusic
					onClick={play}
					className='play--btn'
				/>
			</div>
			<Canvas
				camera={{
					fov: 45,
					near: 0.1,
					far: 200,
					position: [0, -1, 11],
				}}
			>
				<Experience />
			</Canvas>
		</>
	)
}

export default App
