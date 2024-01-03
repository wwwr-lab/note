import Image from 'next/image';

export default function Home() {
	return (
		<>
			<h1>HomePage</h1>
			<Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" width={500} height={500} alt="Store" />
		</>
	);
}
