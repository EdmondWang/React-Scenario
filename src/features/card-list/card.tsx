import React from 'react';
import './index.css';
import { Post } from './post.model';

interface CardProps {
    post: Post;
    error: string | null;
}

const Card: React.FC<CardProps> = ({ post, error }) => {
    console.log(`render card #${post.id}`);

    return (
        <div className="card" key={post.id}>
            {error && (
                <div className="error">
                    #{post.id} {error}
                </div>
            )}
            {!error && (
                <>
                    <h4>
                        #{post.id} {post.title}
                    </h4>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    );
};

export default React.memo(Card);
