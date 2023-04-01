import { ICarDataSingle, ICar } from '@/interfaces/car.interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './CartItem.module.scss'

const CarItem: FC<ICarDataSingle> = ({ car }) => {
	return (
		<div className={styles.item}>
			<Image
				width={100}
				height={100}
				src={car.thumbnailUrl}
				alt='car-photo'
			/>
			<h2>{car.title}</h2>
			<small>{car.albumId}</small>
			<Link href={`car/${car.id}`}>Read More</Link>
		</div>
	)
}

export default CarItem
