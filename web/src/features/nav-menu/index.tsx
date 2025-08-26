import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavMenuFeature: React.FC = () => {
    const nav = useNavigate();
    return (
        <div>
            <h1>Nav Menu</h1>
            <ul>
                <li>
                    <div
                        onClick={() => {
                            nav('/');
                        }}
                    >
                        Home
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default NavMenuFeature;
