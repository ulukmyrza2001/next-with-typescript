import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

const NotFoundPage: NextPage = () => {
	return (
		<Layout title='Not Found'>
			<div style={{ textAlign: 'center' }}>
				<Image src='/404.png' alt='' width={450} height={433} />
			</div>
		</Layout>
	)
}

export default NotFoundPage
