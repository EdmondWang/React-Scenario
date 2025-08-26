import React, { useState, useEffect, useRef } from 'react';
import styles from './index.module.css';

/**
 * useEffect 闭包陷阱示例与解法
 * 
 * 问题: 当在useEffect回调中引用外部状态变量，但未将其添加到依赖数组时，
 * 回调函数会捕获初始渲染时的变量值，而不是最新的值。
 */
const UseEffectTrap: React.FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<string[]>([]);
  const countRef = useRef(count);

  // 更新ref以保持最新值
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  // 错误做法: 未添加依赖项
  useEffect(() => {
    const timer = setInterval(() => {
      // 闭包陷阱: 始终使用初始值0
      console.log('错误做法 - 始终为初始值:', count);
      setData(prevData => [...prevData, `错误: ${count}`]);
    }, 1000);

    return () => clearInterval(timer);
  }, []); // 空依赖数组导致闭包陷阱

  // 正确做法1: 添加正确的依赖项
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('正确做法1 - 最新值:', count);
      setData(prevData => [...prevData, `正确1: ${count}`]);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]); // 添加count到依赖数组

  // 正确做法2: 使用useRef获取最新值(不添加依赖项)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('正确做法2 - 通过ref获取最新值:', countRef.current);
      setData(prevData => [...prevData, `正确2: ${countRef.current}`]);
    }, 1000);

    return () => clearInterval(timer);
  }, []); // 空依赖数组，但通过ref避免闭包陷阱

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className={styles['effect-trap-example']}>
      <h3>useEffect 闭包陷阱示例</h3>
      <p>当前计数: {count}</p>
      <button onClick={incrementCount}>增加计数</button>
      <div className={styles['data-list']}>
        <h4>数据列表:</h4>
        <ul>
          {data.slice(-5).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className={styles.note}>只显示最近5条数据</p>
      </div>
      <div className={styles.explanation}>
        <h4>说明:</h4>
        <ul>
          <li>错误做法: 定时器回调始终使用初始count值(0)</li>
          <li>正确做法1: 通过添加依赖项，让effect在count变化时重新运行</li>
          <li>正确做法2: 使用useRef保存最新count值，避免添加依赖项</li>
        </ul>
      </div>
    </div>
  );
};

export default UseEffectTrap;
