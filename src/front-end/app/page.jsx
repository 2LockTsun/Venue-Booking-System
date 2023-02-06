import Image from 'next/image';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Main() {
	return <main className={styles.main}>
		<Link href={'/test'}>
			<div style={styles.Home}>
				<h1>Test</h1>
			</div>
		</Link>
		<div>Home</div>
		<div>
			Hello World!
		</div>
	</main>;
}
