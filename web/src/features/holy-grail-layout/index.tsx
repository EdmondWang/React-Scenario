import { useState } from 'react';
import UseGrid from './use-grid';
import UseFlex from './use-flex';
import UseFloat from './use-float';
import styles from './index.module.css';

const HolyGrailLayoutFeature = () => {
    const [layout, setLayout] = useState<'flex' | 'float' | 'grid'>('flex');
    return (
        <>
            <div className={styles.controller}>
                <h6>Holy Grail Layout</h6>
                <button onClick={() => setLayout('grid')}>Use Grid</button>
                <button onClick={() => setLayout('flex')}>Use Flex</button>
                <button onClick={() => setLayout('float')}>Use Float</button>
            </div>
            {layout === 'grid' && <UseGrid />}
            {layout === 'flex' && <UseFlex />}
            {layout === 'float' && <UseFloat />}
        </>
    );
};

export default HolyGrailLayoutFeature;
