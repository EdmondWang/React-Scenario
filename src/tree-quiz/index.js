import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';
import { gundamTimeline } from './quiz-data';
import './index.css';

export const getNodeStatus = (children) => {
    if (!children) return { checked: false, indeterminate: false };
    const checkedCount = children.filter((child) => child.checked).length;
    if (checkedCount <= 0) {
        return { checked: false, indeterminate: false };
    }
    if (checkedCount === children.length) {
        return { checked: true, indeterminate: false };
    }
    if (checkedCount === 0) {
        return {
            checked: false,
            indeterminate: children.some((child) => child.indeterminate),
        };
    }
    return { checked: false, indeterminate: true };
};

export const setCheckedRecursively = (node, checked) => {
    return {
        ...node,
        checked,
        indeterminate: false,
        children:
            node.children?.map((child) => {
                return setCheckedRecursively(child, checked);
            }) ?? [],
    };
};

const TreeQuiz = () => {
    const [treeData, setTreeData] = useState(structuredClone(gundamTimeline));

    const updateNodeState = (nodes, targetId, checked = null) => {
        const newNodes = nodes?.map((node) => {
            if (node.id === targetId) {
                return setCheckedRecursively(node, checked);
            }

            if (node.children?.length > 0) {
                const newChildren = updateNodeState(
                    node.children,
                    targetId,
                    checked
                );
                const status = getNodeStatus(newChildren);
                return { ...node, ...status, children: newChildren };
            }

            return node;
        });
        return newNodes;
    };

    const handleClickCheckbox = (id, checked) => {
        setTreeData((prev) => {
            const updatedNodes = updateNodeState(prev, id, checked);
            return updatedNodes;
        });
    };

    const renderTree = (nodes) => {
        return nodes?.map((it) => {
            return (
                <div key={it.id}>
                    <Checkbox
                        id={it.id}
                        name="favorite-gundam"
                        label={it.name}
                        checked={it.checked}
                        indeterminate={it.indeterminate}
                        onChange={(e) => {
                            e.stopPropagation();
                            handleClickCheckbox(
                                it.id,
                                it.indeterminate ? true : !it.checked
                            );
                        }}
                    />
                    {it.children?.length > 0 && (
                        <div className="children">
                            {renderTree(it.children)}
                        </div>
                    )}
                </div>
            );
        });
    };

    return <div>{renderTree(treeData)}</div>;
};

export default TreeQuiz;
