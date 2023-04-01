export interface ICar {
	id: number
	albumId: number
	title: string
	url: string
	thumbnailUrl: string
}

export interface ICarData {
	cars: ICar[]
}

export interface ICarDataSingle {
	car: ICar
}
