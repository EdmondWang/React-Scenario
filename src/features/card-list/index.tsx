import React, { useEffect, useState } from 'react';
import Card from './card';
import { Post } from './post.model';
import './index.css';

interface PostState {
    post: Post;
    error: string | null;
}

const CardListFeature = () => {
    const [idList, setIdList] = useState<string[]>([]);
    const [idIndex, setIdIndex] = useState<number>(0);
    const [postList, setPostList] = useState<PostState[]>([]);

    const fetchPosts = async (
        reqIdList: string[],
        { flush }: { flush: boolean } = { flush: false }
    ) => {
        console.log('fetchPosts', reqIdList);
        const newCardPromises = reqIdList.map((id) => {
            return fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            ).then((res) => res.json());
        });

        const res = await Promise.allSettled<Post>(newCardPromises);

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

        setPostList((prev) => (flush ? newPosts : [...prev, ...newPosts]));
    };

    const fetchPaginatedPosts = async () => {
        const newIdIndex = idIndex + 6;
        const reqIdList = idList.slice(idIndex, newIdIndex);
        await fetchPosts(reqIdList);
        setIdIndex(newIdIndex);
    };

    const clickAddCards = async () => {
        await fetchPaginatedPosts();
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
            res.json().then(async (data) => {
                const newIdList = data.map((d: { id: string }) => d.id);
                setIdList(newIdList);
                const newIdIndex = idIndex + 6;
                const reqIdList = newIdList.slice(idIndex, newIdIndex);
                await fetchPosts(reqIdList, { flush: true });
                setIdIndex(newIdIndex);
            });
        });
    }, []);

    return (
        <div>
            <button className="add-card-btn" onClick={clickAddCards}>
                Add Cards
            </button>
            <div className="card-list">
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
