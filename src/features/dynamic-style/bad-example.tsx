import React, { useEffect, useState } from 'react';

// 反面教材：不使用 useInsertionEffect 导致屏幕闪烁
const BadDynamicStyledText: React.FC<{ color: string }> = ({ color }) => {
    const styleTagId = 'bad-dynamic-text-style';
    const [elementId] = useState(`bad-dynamic-text-${Date.now()}`);
    const cssRule = `#${elementId} { color: ${color}; font-weight: bold; }`;

    // 错误：使用 useEffect 代替 useInsertionEffect
    useEffect(() => {
        console.log('[useEffect] 正在注入样式:', cssRule);

        // 创建一个 <style> 标签并插入到 head 中
        const styleElement = document.createElement('style');
        styleElement.id = styleTagId;
        styleElement.innerHTML = cssRule;
        document.head.appendChild(styleElement);

        // 清理函数
        return () => {
            const existingStyle = document.getElementById(styleTagId);
            if (existingStyle) {
                document.head.removeChild(existingStyle);
            }
        };
    }, [color, elementId]);

    // 故意添加一些内容，增加闪烁效果的可见性
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
            <h3>反面教材：使用 useEffect 注入样式</h3>
            <p id={elementId}>这段文字的颜色应该是 {color}，但可能会出现闪烁！</p>
            <div style={{ height: '100px', width: '100%', background: '#f0f0f0', marginTop: '10px' }}>
                注意观察上方文字颜色变化时的闪烁
            </div>
        </div>
    );
};

// 用于对比的正确示例
const GoodDynamicStyledText: React.FC<{ color: string }> = ({ color }) => {
    const styleTagId = 'good-dynamic-text-style';
    const [elementId] = useState(`good-dynamic-text-${Date.now()}`);
    const cssRule = `#${elementId} { color: ${color}; font-weight: bold; }`;

    // 正确：使用 useInsertionEffect
    React.useInsertionEffect(() => {
        console.log('[useInsertionEffect] 正在注入样式:', cssRule);

        const styleElement = document.createElement('style');
        styleElement.id = styleTagId;
        styleElement.innerHTML = cssRule;
        document.head.appendChild(styleElement);

        return () => {
            const existingStyle = document.getElementById(styleTagId);
            if (existingStyle) {
                document.head.removeChild(existingStyle);
            }
        };
    }, [color, elementId]);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
            <h3>正确示例：使用 useInsertionEffect 注入样式</h3>
            <p id={elementId}>这段文字的颜色应该是 {color}，不会出现闪烁！</p>
            <div style={{ height: '100px', width: '100%', background: '#f0f0f0', marginTop: '10px' }}>
                注意观察上方文字颜色变化时的平滑过渡
            </div>
        </div>
    );
};

export default function BadExampleApp() {
    const [color, setColor] = useState('blue');
    const [count, setCount] = useState(0);

    // 增加计数器以触发多次重渲染
    const toggleColor = () => {
        setColor(color === 'blue' ? 'red' : 'blue');
        setCount(count + 1);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>不使用 useInsertionEffect 导致屏幕闪烁的反面教材</h2>
            <p>点击按钮切换颜色，观察两种实现的区别：</p>
            <button 
                onClick={toggleColor} 
                style={{ padding: '10px 20px', marginBottom: '20px', cursor: 'pointer' }}
            >
                切换颜色（蓝色 ↔ 红色） (已切换 {count} 次)
            </button>

            <BadDynamicStyledText color={color} />
            <GoodDynamicStyledText color={color} />

            <div style={{ marginTop: '30px', padding: '15px', background: '#ffebee' }}>
                <h4>问题解释：</h4>
                <ol>
                    <li>useInsertionEffect 在 DOM 突变前执行，确保样式在元素渲染前就已准备好</li>
                    <li>useEffect 在 DOM 突变后执行，导致样式应用延迟，造成闪烁</li>
                    <li>在生产环境中，这种闪烁可能更加明显，特别是在大型应用或低性能设备上</li>
                </ol>
            </div>
        </div>
    );
};