import Link from 'next/link';
import styles from './page.module.css';
import fetchData from '@/api/fetchData';
import { MainData } from './types/mainType';
import RoomItem from './components/main/roomItem';

const ITEMS_PER_PAGE = 9;

export default async function Home({ searchParams }: { searchParams: { page: string } }) {
    const myData = await fetchData();
    const page: number = parseInt(searchParams?.page || '1'); 
    const items = myData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
    const nextPageParams = new URLSearchParams({ page: (page + 1).toString() });

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>Page {page}</h2>
            <Link className={styles.page__link} href={'./pages/about'}>
                Click
            </Link>
            <div className={styles.main}>
                {items &&
                    items.map((item: MainData, index: number) => {
                        return (
                         <RoomItem title={item.title} body={item.body} key={index}/>
                        );
                    })}
               
                <Link href={`/?${nextPageParams.toString()}`}>Next page</Link>
            </div>
        </div>
    );
}
