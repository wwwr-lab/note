import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/service/products';
import styles from './layout.module.css';
export const revalidate = 3;
export default async function ProductsPage() {
	const products = await getProducts();
	const res = await fetch('http://meowherokuapp.com', {
		next: { revalidate: 0 }, //	cache: 'force-cache', //SSR
	});
	const data = res.json();
	const factText = data.data[0];
	return (
		<div>
			<h1>ProductsPage</h1>
			<nav>
				<ul>
					{products.map((product, index) => (
						<li key={index}>
							<Link href={`/products/${product.id}`}>{product.name}</Link>
						</li>
					))}
				</ul>
				<article className={styles.article}> {factText}</article>
			</nav>
		</div>
	);
}
