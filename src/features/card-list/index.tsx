import React, { useEffect, useState } from 'react';
import Card from './card';
import { Post } from './post.model';
import styles from './index.module.css';

interface PostState {
    post: Post;
    error: string | null;
}

const CardListFeature = () => {
    const [initialLoadComplete, setInitialLoadComplete] =
        useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    const [idList, setIdList] = useState<string[]>([]);
    const [idIndex, setIdIndex] = useState<number>(0);
    const [postList, setPostList] = useState<PostState[]>([]);

    const fetchPosts = React.useCallback(
        async (reqIdList: string[]) => {
            if (isLoading) {
                return;
            }
            setIsLoading(true);

            console.log('fetchPosts', reqIdList);
            const newCardPromises = reqIdList.map((id) => {
                return fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                ).then((res) => res.json());
            });

            const res = await Promise.allSettled<Post>(newCardPromises);
            await new Promise((resolve) => setTimeout(() => resolve({}), 1000));

            const newPosts: PostState[] = [];
            res.forEach((r, index) => {
                let newVal: PostState | null = null;
                if (r.status === 'fulfilled') {
                    newVal = {
                        post: r.value,
                        error: null,
                    };
                } else if (r.status === 'rejected') {
                    newVal = {
                        post: { id: reqIdList[index] },
                        error: r.reason?.message ?? 'Failed to fetch',
                    };
                }
                if (newVal) {
                    newPosts.push(newVal);
                }
            });

            setPostList((prev) => [...prev, ...newPosts]);
            setIsLoading(false);
        },
        [isLoading]
    );

    const fetchPaginatedPosts = React.useCallback(async () => {
        const newIdIndex = idIndex + 6;
        const reqIdList = idList.slice(idIndex, newIdIndex);
        await fetchPosts(reqIdList);
        setIdIndex(newIdIndex);
    }, [idList, idIndex, fetchPosts]);

    const clickAddCards = async () => {
        await fetchPaginatedPosts();
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
            res.json().then(async (data) => {
                const newIdList = data.map((d: { id: string }) => d.id);
                setIdList(newIdList);
            });
        });
    }, []);

    useEffect(() => {
        const loadInitialPosts = async () => {
            if (idList.length > 0 && !initialLoadComplete) {
                await fetchPaginatedPosts();
                setInitialLoadComplete(true);
            }
        };
        loadInitialPosts();
    }, [idList, fetchPaginatedPosts, initialLoadComplete]);

    return (
        <div>
            <button
                className={styles['add-card-btn']}
                disabled={isLoading}
                onClick={clickAddCards}
            >
                Add Cards
            </button>
            <div className={styles['card-list']}>
                {postList.length > 0 &&
                    postList.map((postSt) => (
                        <Card
                            key={postSt.post.id}
                            post={postSt.post}
                            error={postSt.error}
                        />
                    ))}
            </div>
        </div>
    );
};

export default CardListFeature;
