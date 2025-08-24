import { useState } from 'react';
import UseFlex from './use-flex';
import UseFloat from './use-float';
import styles from './index.module.css';

const HolyGrailLayoutFeature = () => {
    const [layout, setLayout] = useState('flex');
    return (
        <>
            <div className={styles.controller}>
                <h6>Holy Grail Layout</h6>
                <button onClick={() => setLayout('flex')}>Use Flex</button>
                <button onClick={() => setLayout('float')}>Use Float</button>
            </div>
            {layout === 'flex' && <UseFlex />}
            {layout === 'float' && <UseFloat />}
        </>
    );
};

export default HolyGrailLayoutFeature;
