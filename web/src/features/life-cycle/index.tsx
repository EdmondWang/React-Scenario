import React, { useState } from 'react';
import LifeCycle from './life-cycle';

let count = 0;
let prefixMsg = '===life cycle feature===';

const LifeCycleFeature: React.FC = () => {
    const [prefix, setPrefix] = useState<string>('');

    return (
        <>
            <button
                onClick={() => {
                    setPrefix(`${prefixMsg} *${count++}*`);
                }}
            >
                Increase Prefix
            </button>
            <LifeCycle prefix={prefix}></LifeCycle>
        </>
    );
};

export default LifeCycleFeature;
