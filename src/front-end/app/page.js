import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return <main className={styles.main}>
		<nav>
			<a herf={`https://www.google.com`}>
				<div style={styles.Home}>
					<h1>Home</h1>
				</div>
			</a>
			<div>Test</div>
		</nav>
		<div>
			Hello World!
		</div>
	</main>;
}
