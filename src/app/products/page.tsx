import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/service/products';
import MeowArticle from '../components/MeowArticle';

//export const revalidate = 3;
export default async function ProductsPage() {
	const products = await getProducts();

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
			<MeowArticle/>
			</nav>
		</div>
	);
}
