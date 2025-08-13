import React, { useState, useEffect } from 'react';
import './index.css';

const AnimationEventFeature = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationCount, setAnimationCount] = useState(0);
    const [eventLog, setEventLog] = useState<string[]>([]);
    const [animationType, setAnimationType] = useState<'bounce' | 'fade' | 'slide'>('bounce');

    // 添加日志并限制长度
    const addEventLog = (message: string) => {
        setEventLog(prev => [message, ...prev].slice(0, 10));
    };

    // 重置动画
    const resetAnimation = () => {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 100);
        setAnimationCount(prev => prev + 1);
    };

    // 动画事件处理函数
    const handleAnimationStart = () => {
        const message = '✅ onAnimationStart: 动画开始';
        console.log(message);
        addEventLog(message);
    };

    const handleAnimationEnd = () => {
        const message = '✅ onAnimationEnd: 动画结束';
        console.log(message);
        addEventLog(message);
    };

    const handleAnimationIteration = () => {
        const message = '✅ onAnimationIteration: 动画重复播放';
        console.log(message);
        addEventLog(message);
    };

    const handleTransitionEnd = () => {
        const message = '✅ onTransitionEnd: 过渡效果结束';
        console.log(message);
        addEventLog(message);
    };

    // 当动画类型改变时重置动画
    useEffect(() => {
        resetAnimation();
    }, [animationType]);

    return (
        <div className="animation-demo-container">
            <h2>React 动画事件演示</h2>
            <p>此示例展示了 React 支持的所有动画事件及其触发时机</p>

            <div className="controls">
                <div className="animation-type-selector">
                    <label>选择动画类型:</label>
                    <select
                        value={animationType}
                        onChange={(e) => setAnimationType(e.target.value as 'bounce' | 'fade' | 'slide')}
                    >
                        <option value="bounce">弹跳动画</option>
                        <option value="fade">淡入淡出</option>
                        <option value="slide">滑动动画</option>
                    </select>
                </div>

                <button onClick={resetAnimation} className="reset-button">
                    重置动画
                </button>
            </div>

            <div className="animation-container">
                <div
                    key={`animated-box-${animationCount}`}
                    className={`animated-box ${isVisible ? 'visible' : ''} ${animationType}`}
                    onAnimationStart={handleAnimationStart}
                    onAnimationEnd={handleAnimationEnd}
                    onAnimationIteration={handleAnimationIteration}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {animationType === 'bounce' && '弹跳效果'}
                    {animationType === 'fade' && '淡入淡出'}
                    {animationType === 'slide' && '滑动效果'}
                </div>
            </div>

            <div className="event-log-container">
                <h3>事件日志</h3>
                <ul className="event-log">
                    {eventLog.map((log, index) => (
                        <li key={index} className="log-entry">{log}</li>
                    ))}
                </ul>
            </div>

            <div className="event-description">
                <h3>React 支持的动画事件</h3>
                <ul className="event-list">
                    <li><strong>onAnimationStart</strong>: 当 CSS 动画开始时触发</li>
                    <li><strong>onAnimationEnd</strong>: 当 CSS 动画结束时触发</li>
                    <li><strong>onAnimationIteration</strong>: 当 CSS 动画完成一次迭代时触发</li>
                    <li><strong>onTransitionEnd</strong>: 当 CSS 过渡效果结束时触发</li>
                </ul>
            </div>
        </div>
    );
};

export default AnimationEventFeature;
