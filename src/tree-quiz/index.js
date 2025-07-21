import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';
import { gundamTimeline } from './quiz-data';
import './index.css';

const TreeQuiz = () => {
    const [treeData, setTreeData] = useState(structuredClone(gundamTimeline));

    const updateNodeState = (nodes, targetId) => {
        const newNodes = nodes?.map((node) => {
            return {
                ...node,
                checked: node.id === targetId ? !node.checked : node.checked,
                children: updateNodeState(node.children, targetId),
            };
        });
        return newNodes;
    };

    const handleClickCheckbox = (id) => {
        setTreeData((prev) => {
            const updatedNodes = updateNodeState(prev, id);
            return updatedNodes;
        });
    };

    const renderTree = (nodes) => {
        return (
            <div>
                {nodes?.map((it) => {
                    return (
                        <div key={it.id}>
                            <Checkbox
                                id={it.id}
                                label={it.name}
                                checked={it.checked}
                                handleClick={(e) => {
                                    e.stopPropagation();
                                    handleClickCheckbox(it.id);
                                }}
                            />
                            {it.children?.length > 0 && (
                                <div className="children">
                                    {renderTree(it.children)}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    return <div>{renderTree(treeData)}</div>;
};

export default TreeQuiz;
