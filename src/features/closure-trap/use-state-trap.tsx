import React, { useState, useEffect, useRef } from 'react';
import styles from './index.module.css';

/**
 * useState 闭包陷阱示例与解法
 *
 * 问题: 当在异步操作中引用状态变量时，由于闭包特性，
 * 变量会捕获定义时的值，而不是最新的值。
 */
const UseStateTrap: React.FC = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    // 更新ref以保持最新值
    useEffect(() => {
        countRef.current = count;
    }, [count]);

    // 错误做法: 直接引用状态变量
    const handleClickWrong = () => {
        setTimeout(() => {
            setCount(count + 1); // 闭包陷阱: 总是使用点击时的count值
            console.log('错误做法 - 点击时的值:', count);
        }, 1000);
    };

    // 正确做法1: 使用函数式更新
    const handleClickCorrect1 = () => {
        setTimeout(() => {
            setCount((prevCount) => prevCount + 1); // 函数式更新获取最新值
        }, 1000);
    };

    // 正确做法2: 使用useRef保存最新值
    const handleClickCorrect2 = () => {
        setTimeout(() => {
            setCount(countRef.current + 1); // 使用ref获取最新值
        }, 1000);
    };

    return (
        <div className={styles['state-trap-example']}>
            <h3>useState 闭包陷阱示例</h3>
            <p>当前计数: {count}</p>
            <div className={styles.buttons}>
                <button onClick={handleClickWrong}>错误做法</button>
                <button onClick={handleClickCorrect1}>
                    正确做法1 (函数式更新)
                </button>
                <button onClick={handleClickCorrect2}>
                    正确做法2 (useRef)
                </button>
            </div>
            <p className={styles.note}>
                尝试快速点击按钮多次，观察不同做法的区别。
                <br />
                错误做法只会增加一次，而正确做法会正确累加。
            </p>
        </div>
    );
};

export default UseStateTrap;
