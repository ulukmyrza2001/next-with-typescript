import { FC, PropsWithChildren } from 'react'
import { IMeta } from './meta.interface'
import Head from 'next/head'

const getTitle = (title: string) => `${title} | RED Cars`

const Meta: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	return (
		<>
			<Head>
				<title>{getTitle(title)}</title>
				{description ? (
					<>
						<meta name='description' content={description} />
						<meta name='og:description' content={description} />
						<meta name='og:title' content={title} />
					</>
				) : (
					<>
						<meta name='robots' content='noindex, nofollows' />
					</>
				)}
				{children}
			</Head>
		</>
	)
}

export default Meta
