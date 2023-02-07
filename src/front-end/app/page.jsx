import Image from 'next/image';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Main() {
	return <main className={styles.main}>
		<Link href={'/sample'}>
			<div style={styles.Home}>
				<h1>Test</h1>
			</div>
		</Link>
		<div className={styles.center}>
			<div>
				Welcom to Classroom Booking System!<br/>
				Choose the function from the above.
			</div>
		</div>
		<div>
			Hello World!
		</div>
	</main>;
}
