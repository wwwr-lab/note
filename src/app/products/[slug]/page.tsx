import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
	params: {
		slug: string;
	};
};

export default function ProductsPage({ params }: Props) {
	if (params.slug === 'nothing') {
		notFound();
	}
	return <div>제품 {params.slug}Page</div>;
}

export function generateStaticParams() {
	const products = ['pants', 'skirts'];
	return products.map((product) => ({
		slug: product,
	}));
}
