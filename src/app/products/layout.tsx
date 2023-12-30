import React, { PropsWithChildren } from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
interface Props extends PropsWithChildren {}
export default function ProductsLayout({ children }: Props) {
	return (
		<>
			<nav className={styles.nav}>
				<Link href="/products/women">여성옷</Link>
				<a href="/products/men">남성옷</a>
			</nav>

			<section className={styles.product}>{children}</section>
		</>
	);
}
