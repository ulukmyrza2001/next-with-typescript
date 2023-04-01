import CarItem from '@/components/UI/CarItem'
import Layout from '@/components/layout/Layout'
import { ICarDataSingle } from '@/interfaces/car.interfaces'
import { FC } from 'react'

const CarDetail: FC<ICarDataSingle> = ({ car }) => {
	return (
		<Layout title={car.title}>
			<CarItem car={car} />
		</Layout>
	)
}

export default CarDetail
