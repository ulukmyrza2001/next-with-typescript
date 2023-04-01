import { FC } from 'react'
import Layout from '@/components/layout/Layout'
import { ICarData } from '@/interfaces/car.interfaces'
import CarItem from '@/components/UI/CarItem'

const Home: FC<ICarData> = ({ cars = [] }) => {
	return (
		<Layout title='Home'>
			<h1>Hello Next JS</h1>

			{cars.length ? (
				cars.map((car) => <CarItem key={car.id} car={car} />)
			) : (
				<div>Cars Not Found</div>
			)}
		</Layout>
	)
}

export default Home
