import React, { PropsWithChildren } from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '멋진 제품 사이트 | 전체 제품 확인',
	description: '멋진 제품을 확인해보세요.',
};

interface Props extends PropsWithChildren {}
export default function ProductsLayout({ children }: Props) {
	return (
		<>
			<nav className={styles.nav}>
				<Link href="/products/women">여성옷</Link>
				<Link href="/products/men">남성옷</Link>
			</nav>

			<section className={styles.product}>{children}</section>
		</>
	);
}
