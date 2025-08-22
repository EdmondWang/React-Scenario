import React, { useInsertionEffect, useState } from 'react';

const DynamicStyledText: React.FC<{ color: string }> = ({ color }) => {
    // 模拟动态生成一个 style 标签的字符串
    const styleTagId = 'dynamic-text-style';
    const cssRule = `#dynamic-text-${Date.now()} { color: ${color}; font-weight: bold; }`;

    useInsertionEffect(() => {
        console.log('[useInsertionEffect] 正在注入样式:', cssRule);

        // 创建一个 <style> 标签并插入到 head 中
        const styleElement = document.createElement('style');
        styleElement.id = styleTagId;
        styleElement.innerHTML = cssRule;
        document.head.appendChild(styleElement);

        // 清理函数（可选）：组件卸载时移除该 style 标签
        return () => {
            const existingStyle = document.getElementById(styleTagId);
            if (existingStyle) {
                document.head.removeChild(existingStyle);
            }
        };
    }, [color]); // 当 color 变化时重新注入样式

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
            <h3>正确示例：使用 useInsertionEffect 注入样式</h3>
            {/* 注意 id 要和 CSS 规则中选择器匹配 */}
            <p id={`dynamic-text-${Date.now()}`}>
                这段文字的颜色是动态注入的！当前颜色: {color}
            </p>
            <div style={{ height: '100px', width: '100%', background: '#f0f0f0', marginTop: '10px' }}>
                使用 useInsertionEffect 不会导致闪烁
            </div>
        </div>
    );
};

export default function OriginalExample() {
    const [color, setColor] = useState('blue');

    return (
        <div>
            <DynamicStyledText color={color} />
            <button 
                onClick={() => setColor(color === 'blue' ? 'red' : 'blue')}
                style={{ padding: '10px 20px', cursor: 'pointer' }}
            >
                切换颜色（蓝色 ↔ 红色）
            </button>
        </div>
    );
};