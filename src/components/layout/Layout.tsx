import React, { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import Meta from '../seo/Meta'
import { IMeta } from '../seo/meta.interface'
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('./footer/Footer'), {
	ssr: false,
})

const Layout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title,
	description,
}) => {
	return (
		<div>
			<Meta title={title} description={description} />
			<Header />
			<main>{children}</main>
			<DynamicFooter />
		</div>
	)
}

export default Layout
