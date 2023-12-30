import React from 'react';

type Props = {
	params: {
		slug: string;
	};
};

export default function ProductsPage({ params }: Props) {
	return <div>{params.slug}Page</div>;
}
