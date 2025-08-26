import React, { useState } from 'react';
import Checkbox from '../../components/Checkbox';
import { gundamTimeline } from './quiz-data';
import styles from './index.module.css';

interface TreeNode {
    id: string | number;
    name: string;
    checked: boolean;
    indeterminate: boolean;
    children?: TreeNode[];
}

export const getNodeStatus = (
    children?: TreeNode[]
): { checked: boolean; indeterminate: boolean } => {
    if (!children) return { checked: false, indeterminate: false };
    const checkedCount = children.filter((child) => child.checked).length;
    if (checkedCount <= 0) {
        return { checked: false, indeterminate: false };
    }
    if (checkedCount === children.length) {
        return { checked: true, indeterminate: false };
    }
    return { checked: false, indeterminate: true };
};

export const setCheckedRecursively = (
    node: TreeNode,
    checked: boolean
): TreeNode => {
    return {
        ...node,
        checked,
        indeterminate: false,
        children:
            node.children?.map((child) =>
                setCheckedRecursively(child, checked)
            ) ?? [],
    };
};

const TreeQuizFeature = () => {
    const [treeData, setTreeData] = useState<TreeNode[]>(
        structuredClone(gundamTimeline)
    );

    const updateNodeState = (
        nodes: TreeNode[] | undefined,
        targetId: string | number,
        checked: boolean | null
    ): TreeNode[] | undefined => {
        return nodes?.map((node) => {
            if (node.id === targetId) {
                return setCheckedRecursively(node, checked as boolean);
            }

            if (node.children?.length) {
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
    };

    const handleClickCheckbox = (id: string | number, checked: boolean) => {
        setTreeData((prev) => updateNodeState(prev, id, checked) as TreeNode[]);
    };

    const renderTree = (nodes?: TreeNode[]): React.ReactNode => {
        return nodes?.map((it) => (
            <div key={it.id}>
                <Checkbox
                    id={it.id.toString()}
                    name="favorite-gundam"
                    label={it.name}
                    checked={it.checked}
                    indeterminate={it.indeterminate}
                    onChange={(checked: boolean) => {
                        handleClickCheckbox(it.id, checked);
                    }}
                />
                {it.children && it.children.length > 0 && (
                    <div className={styles.children}>{renderTree(it.children)}</div>
                )}
            </div>
        ));
    };

    return <div>{renderTree(treeData)}</div>;
};

export default TreeQuizFeature;
