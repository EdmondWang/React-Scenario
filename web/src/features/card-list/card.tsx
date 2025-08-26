import React from 'react';
import styles from './index.module.css';
import { Post } from './post.model';

interface CardProps {
    post: Post;
    error: string | null;
}

const format = (input: number) => {
    const date = new Date(input);

    const year = `${date.getFullYear()}`.padStart(4, '0');
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');

    const hours24 = date.getHours();
    let amPm = 'AM';
    if (hours24 >= 12) {
        amPm = 'PM';
    }
    const hours12 = hours24 % 12 || 12;

    const minutes = `${date.getMinutes()}`.padStart(2, '0');
    const seconds = `${date.getSeconds()}`.padStart(2, '0');

    return `${year}-${month}-${day} ${hours12}:${minutes}:${seconds} ${amPm}`;
};

const Card: React.FC<CardProps> = ({ post, error }) => {
    console.log(`render card #${post.id}`);

    const timestamp = Date.now();

    return (
        <div className={styles.card} key={post.id}>
            {error && (
                <div className={styles.error}>
                    #{post.id} {error}
                </div>
            )}
            {!error && (
                <>
                    <h4 className={styles['card-title']}>
                        #{post.id} {post.title}
                        <span className={styles['post-fetch-datetime-text']}>
                            {format(timestamp)}
                        </span>
                    </h4>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    );
};

export default React.memo(Card);
