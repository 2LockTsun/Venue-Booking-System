import Link from "next/link";
import styles from './page.module.css';

export default function TestPage() {
    return <div className={styles.main}>
        <div className={styles.center}>
            <div>
                This is the test page
            </div>
            <div className={styles.card}>
                <Link href={'/'}>Back to Home</Link>
            </div>
        </div>
    </div>
}