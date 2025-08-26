import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NewsFeature: React.FC = () => {
    const nav = useNavigate();
    const params = useParams();
    console.log(params);
    return (
        <div>
            <button onClick={() => nav('/')}>Home</button>
            <h1>News</h1>
        </div>
    );
};

export default NewsFeature;
