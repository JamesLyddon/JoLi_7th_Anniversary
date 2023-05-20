import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import ConfettiExplosion from 'react-confetti-explosion'

const Confet = () => {
	const [pop, setPop] = useState(false)

	useEffect(() => {
		const popTimer = setTimeout(() => {
			setPop(true)
		}, 3300)
	}, [])

	return (
		<>
			{pop && (
				<>
					<Confetti />
					<div className='confetti'>
						<ConfettiExplosion
							force={0.8}
							duration={4000}
							particleCount={250}
							width={3000}
						/>
					</div>
				</>
			)}
		</>
	)
}

export default Confet
