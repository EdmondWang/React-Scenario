import React, { useState } from 'react';
import OriginalExample from './original-example.tsx';
import BadExample from './bad-example.tsx';

// 将原来的实现移动到 original-example.tsx

export default function App() {
    const [viewMode, setViewMode] = useState<'original' | 'bad-example'>('original');

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>动态样式注入示例</h2>
            <div style={{ marginBottom: '20px' }}>
                <button
                    onClick={() => setViewMode('original')}
                    style={{ padding: '8px 16px', marginRight: '10px',
                        backgroundColor: viewMode === 'original' ? '#4CAF50' : '#f0f0f0',
                        color: viewMode === 'original' ? 'white' : 'black' }}
                >
                    原始示例 (useInsertionEffect)
                </button>
                <button
                    onClick={() => setViewMode('bad-example')}
                    style={{ padding: '8px 16px',
                        backgroundColor: viewMode === 'bad-example' ? '#4CAF50' : '#f0f0f0',
                        color: viewMode === 'bad-example' ? 'white' : 'black' }}
                >
                    反面教材 (useEffect 导致闪烁)
                </button>
            </div>

            {viewMode === 'original' ? <OriginalExample /> : <BadExample />}

            <div style={{ marginTop: '30px', padding: '15px', background: '#f0f8ff' }}>
                <h4>关键知识点：</h4>
                <ul>
                    <li>useInsertionEffect 专为动态样式注入设计，在 DOM 突变前执行</li>
                    <li>useEffect 在 DOM 突变后执行，可能导致样式应用延迟，造成闪烁</li>
                    <li>对于动态 CSS 注入、字体加载等场景，应优先使用 useInsertionEffect</li>
                </ul>
            </div>
        </div>
    );
}
