import Link from 'next/link';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Main() {
	return <main className={styles.main}>
		<div style={styles.home}>
			<Link href={'/test'}>
				<h1>Test</h1>
			</Link>
			<Link href={'/'}>
				<div style={styles.h1}>
					Check booked
				</div>
			</Link>
		</div>
		<div className={styles.center}>
			<div>
				Welcom to Classroom Booking System!<br/>
				Choose the function from the above.
			</div>
		</div>
		<div>
			This is the footer.
		</div>
	</main>;
}
