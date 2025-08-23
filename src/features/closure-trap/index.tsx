import React, { useState } from 'react';
import UseStateTrap from './use-state-trap';
import UseEffectTrap from './use-effect-trap';

/**
 * 闭包陷阱示例与解法集合
 * 
 * 本组件展示了React中常见的闭包陷阱问题及其解决方法
 * 包括useState和useEffect两种情况下的闭包陷阱
 */
const ClosureTrapFeature: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'state' | 'effect'>('state');

  return (
    <div className="closure-trap-index">
      <h2>React 闭包陷阱示例与解法</h2>

      <div className="tabs">
        <button
          className={activeTab === 'state' ? 'active' : ''}
          onClick={() => setActiveTab('state')}
        >
          useState 闭包陷阱
        </button>
        <button
          className={activeTab === 'effect' ? 'active' : ''}
          onClick={() => setActiveTab('effect')}
        >
          useEffect 闭包陷阱
        </button>
      </div>

      <div className="content">
        {activeTab === 'state' ? (
          <UseStateTrap />
        ) : (
          <UseEffectTrap />
        )}
      </div>

      <div className="summary">
        <h3>闭包陷阱总结</h3>
        <p>
          闭包陷阱是React中常见的问题，当在异步操作或回调函数中引用状态变量时，
          由于JavaScript闭包的特性，变量会捕获定义时的值，而不是最新的值。
        </p>
        <h4>常见解决方法:</h4>
        <ul>
          <li>对于useState: 使用函数式更新或useRef保存最新值</li>
          <li>对于useEffect: 添加正确的依赖项或使用useRef保存最新值</li>
        </ul>
      </div>

      <style>{`
        .closure-trap-index {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .tabs {
          display: flex;
          margin-bottom: 20px;
        }
        .tabs button {
          padding: 10px 20px;
          cursor: pointer;
          background: #f0f0f0;
          border: 1px solid #ddd;
          border-right: none;
        }
        .tabs button.active {
          background: #4caf50;
          color: white;
        }
        .tabs button:first-child {
          border-radius: 4px 0 0 4px;
        }
        .tabs button:last-child {
          border-right: 1px solid #ddd;
          border-radius: 0 4px 4px 0;
        }
        .content {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 4px;
        }
        .summary {
          margin-top: 30px;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ClosureTrapFeature;
