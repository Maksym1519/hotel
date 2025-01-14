import styles from './page.module.css';
import Image from 'next/image';

export default async function Home() {
  
    return (
        <div className={styles.page}>
            <h2 className={styles.title}>Page</h2>
            <Image src="file.svg" width={32} height={32} alt="img" />

          
        </div>
    );
}
