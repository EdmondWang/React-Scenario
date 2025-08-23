import React, { useState } from 'react';
import UseStateTrap from './use-state-trap';
import UseEffectTrap from './use-effect-trap';
import ListWithAddButton from './list-with-add';
import styles from './index.module.css';

/**
 * 闭包陷阱示例与解法集合
 *
 * 本组件展示了React中常见的闭包陷阱问题及其解决方法
 * 包括useState和useEffect两种情况下的闭包陷阱
 */
const ClosureTrapFeature: React.FC = () => {
    const [activeTab, setActiveTab] = useState<
        'state' | 'effect' | 'list-with-add'
    >('state');

    return (
        <div className={styles['closure-trap-index']}>
            <h2>React 闭包陷阱示例与解法</h2>

            <div className={styles.tabs}>
                <button
                    className={activeTab === 'state' ? styles.active : ''}
                    onClick={() => setActiveTab('state')}
                >
                    useState 闭包陷阱
                </button>
                <button
                    className={
                        activeTab === 'list-with-add' ? styles.active : ''
                    }
                    onClick={() => setActiveTab('list-with-add')}
                >
                    useState 闭包陷阱 (List with add button)
                </button>
                <button
                    className={activeTab === 'effect' ? styles.active : ''}
                    onClick={() => setActiveTab('effect')}
                >
                    useEffect 闭包陷阱
                </button>
            </div>

            <div className={styles.content}>
                {activeTab === 'state' ? (
                    <UseStateTrap />
                ) : activeTab === 'list-with-add' ? (
                    <ListWithAddButton />
                ) : (
                    <UseEffectTrap />
                )}
            </div>

            <div className={styles.summary}>
                <h3>闭包陷阱总结</h3>
                <p>
                    闭包陷阱是React中常见的问题，当在异步操作或回调函数中引用状态变量时，
                    由于JavaScript闭包的特性，变量会捕获定义时的值，而不是最新的值。
                </p>
                <h4>常见解决方法:</h4>
                <ul>
                    <li>对于useState: 使用函数式更新或useRef保存最新值</li>
                    <li>
                        对于useEffect: 添加正确的依赖项或使用useRef保存最新值
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ClosureTrapFeature;
