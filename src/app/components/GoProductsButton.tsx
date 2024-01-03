'use client';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router'; 사용하면 에러생김
import React from 'react';

export default function GoProductsButton() {
	const router = useRouter();
	return (
		<button
			onClick={() => {
				router.push('/products');
			}}
		>
			제품 페이지로 이동
		</button>
	);
}
