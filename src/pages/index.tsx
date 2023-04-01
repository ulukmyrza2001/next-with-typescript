import Home from '@/components/screens/home/Home'
import { ICarData } from '@/interfaces/car.interfaces'
import { CarService } from '@/services/car.service'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import React from 'react'

const HomePage: NextPage<ICarData> = ({ cars }) => {
	return <Home cars={cars} />
}

// export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
// 	const cars = await CarService.getAll()
// 	return {
// 		props: {
// 			cars,
// 		},
// 	}
// }

export const getStaticProps: GetStaticProps<ICarData> = async () => {
	const cars = await CarService.getAll()
	return {
		props: { cars  },
		revalidate: 10,
	}
}

export default HomePage
