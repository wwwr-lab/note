import { getProduct, getProducts } from '@/service/products';
import { notFound, redirect } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import GoProductsButton from '@/app/components/GoProductsButton';

type Props = {
	params: {
		slug: string;
	};
};
export function generateMetadata({ params }: Props) {
	return {
		title: `제품의 이름: ${params.slug}`,
	};
}
export const revalidate = 3;

export default async function ProductPage({ params: { slug } }: Props) {
	//서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
	const product = await getProduct(slug);

	if (!product) {
		//동적으로 redirect
		redirect('/products');
		//notFound()
	}

	//서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
	return (
		<div>
			<h3>{product.name} 제품 설명 페이지</h3>
			<Image src={`/images/${product.image}`} alt={product.name} width={300} height={300} />
			<GoProductsButton />
		</div>
	);
}

export async function generateStaticParams() {
	//모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
	const products = await getProducts();
	return products.map((product) => ({
		slug: product.id,
	}));
}
