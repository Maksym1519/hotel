'use client';
import Link from 'next/link';
import styles from '../../page.module.css';
import { useEffect, useState } from 'react';

type RoomItemType = {
    title: string;
    body: string;
};

const getLikeKey = (roomName: string) => `first-floor-${roomName}`;

const RoomItem = ({ title, body }: RoomItemType) => {
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        const likeKey = getLikeKey(title);
        const likeValue = localStorage.getItem(likeKey);
        console.log(likeValue)
        setLiked(likeValue === 'like')
    }, [title]);

    const like = () => {
        const likeKey = getLikeKey(title)
        localStorage.setItem(likeKey,'like')
         setLiked(true)
    }
    return (
        <div className={styles.mainItem}>
            <Link href={`./pages/rooms/${title}`}>{title}</Link>
            <p>{body}</p>
            <button type="button" onClick={like}>
                {liked ? '+' : '-'}
            </button>
        </div>
    );
};
export default RoomItem;
