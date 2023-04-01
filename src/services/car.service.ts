import { ICar } from '@/interfaces/car.interfaces'
import axios from 'axios'

axios.defaults.baseURL = process.env.API_URL

export const CarService = {
	async getAll() {
		const { data } = await axios.get<ICar[]>(`/photos?_limit=10`)
		return data
	},

	async getById(id: string) {
		const { data } = await axios.get<ICar>(`/photos/${id}`)
		return data
	},
}
