import React, { useState, useEffect, useCallback } from 'react';
import { Post, PostState } from './post.model';
import './index.css';

// API Constants - Using JSONPlaceholder as reliable free data source
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const POSTS_ENDPOINT = `${API_BASE_URL}/posts`;
const ITEMS_PER_PAGE = 6;

// Time format converter: ISO string to 'YYYY-MM-DD HH:MM:SS AM/PM'
const formatDateTime = (isoString: string): string => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    const formattedHours = String(hours).padStart(2, '0');

    return `${year}-${month}-${day} ${formattedHours}:${minutes}:${seconds} ${period}`;
};

const CardListFromTrae = () => {
    const [idList, setIdList] = useState<number[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [initialLoadComplete, setInitialLoadComplete] =
        useState<boolean>(false);
    const [postList, setPostList] = useState<PostState[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch initial ID list
    useEffect(() => {
        const fetchIdList = async () => {
            try {
                const response = await fetch(POSTS_ENDPOINT);
                if (!response.ok) throw new Error('Failed to fetch ID list');
                const data = await response.json();
                // Extract IDs from response
                const ids = data.map((item: { id: number }) => item.id);
                setIdList(ids);
            } catch (err) {
                setError(
                    'Failed to load initial data. Please try again later.'
                );
                console.error('ID list fetch error:', err);
            }
        };

        fetchIdList();
    }, []);

    // Fetch post details by ID
    // Note: This function was previously duplicated and has been consolidated
    const fetchPostDetails = useCallback(
        async (id: number): Promise<Post | null> => {
            try {
                const response = await fetch(`${POSTS_ENDPOINT}/${id}`);
                if (!response.ok) throw new Error(`Failed to fetch post ${id}`);
                const data = await response.json();
                return {
                    id: data.id,
                    title: data.title,
                    body: data.body || 'No content available',
                    createdAt: formatDateTime(data.createdAt),
                };
            } catch (err) {
                console.error(`Error fetching post ${id}:`, err);
                return null;
            }
        },
        []
    );

    // Load more posts when button is clicked
    const loadMorePosts = useCallback(async () => {
        if (isLoading || currentIndex >= idList.length) return;

        setIsLoading(true);
        setError(null);

        try {
            // Get next 6 IDs
            const endIndex = Math.min(
                currentIndex + ITEMS_PER_PAGE,
                idList.length
            );
            const idsToFetch = idList.slice(currentIndex, endIndex);

            // Fetch all 6 posts in parallel
            const postPromises = idsToFetch.map((id) => fetchPostDetails(id));
            const results = await Promise.all(postPromises);

            // Filter out failed requests and add to list
            const newPosts = results
                .filter((post): post is Post => post !== null)
                .map((post) => ({ post, error: null }));

            setPostList((prev) => [...prev, ...newPosts]);
            setCurrentIndex(endIndex);
        } catch (err) {
            setError('Failed to load posts. Please try again.');
            console.error('Post loading error:', err);
        } finally {
            setIsLoading(false);
        }
    }, [idList, currentIndex, isLoading, fetchPostDetails]);

    // Load initial 6 posts
    useEffect(() => {
        const loadInitialPosts = async () => {
            if (idList.length > 0 && !initialLoadComplete) {
                await loadMorePosts();
                setInitialLoadComplete(true);
            }
        };
        loadInitialPosts();
    }, [idList, loadMorePosts, initialLoadComplete]);

    return (
        <div className="card-list-container">
            <h2>GitHub Issues Feed</h2>
            {error && <div className="error-message">{error}</div>}

            <button
                className="add-cards-btn"
                onClick={loadMorePosts}
                disabled={isLoading || currentIndex >= idList.length}
            >
                {isLoading ? 'Loading...' : 'Add 6 Cards'}
                {currentIndex >= idList.length &&
                    !isLoading &&
                    ' (All posts loaded)'}
            </button>

            <div className="cards-grid">
                {postList.map(({ post, error }) => (
                    <div key={post.id} className="card">
                        <div className="card-header">
                            <h3>{post.title}</h3>
                            <span className="post-date">{post.createdAt}</span>
                        </div>
                        <div className="card-body">
                            <p>{post.body.substring(0, 150)}...</p>
                        </div>
                        {error && <div className="card-error">{error}</div>}
                    </div>
                ))}
            </div>

            {postList.length === 0 && !isLoading && !error && (
                <div className="empty-state">
                    Click the button above to load posts
                </div>
            )}
        </div>
    );
};

export default CardListFromTrae;
