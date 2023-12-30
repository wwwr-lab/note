import React from 'react';
import Link from 'next/link';
const products = ['shirt', 'pants', 'skirt', 'shoes'];
export default function ProductsPage() {
	return (
		<div>
			<h1>ProductsPage</h1>
			<nav>
				<ul>
					{products.map((product, index) => (
						<li key={index}>
							<Link href={`/products/${product}`}>{product}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
