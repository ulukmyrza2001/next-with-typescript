import CarDetail from '@/components/screens/car-detail/CarDetail'
import { ICarDataSingle } from '@/interfaces/car.interfaces'
import { CarService } from '@/services/car.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

const CarPage: NextPage<ICarDataSingle> = ({ car }) => {
	return <CarDetail car={car} />
}

interface Params extends ParsedUrlQuery {
	id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const cars = await CarService.getAll()

	return {
		paths: cars.map((car) => ({
			params: {
				id: car.id.toString(),
			},
		})),
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({
	params,
}) => {
	const car = await CarService.getById(String(params?.id))
	return {
		props: { car },
		revalidate: 20,
	}
}
export default CarPage
