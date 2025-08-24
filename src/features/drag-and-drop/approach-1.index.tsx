import { useRef, useState, useEffect, useCallback } from 'react';
import styles from './index.module.css';

const Approach1 = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (
        e: React.MouseEvent
    ) => {
        const div = divRef.current;
        if (!div) {
            return;
        }
        e.preventDefault(); // prevent text selection
        const bbBox = div.getBoundingClientRect();
        setOffset({
            x: e.clientX - bbBox.left,
            y: e.clientY - bbBox.top,
        });
        setDragging(true);
    };

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!dragging) {
                return;
            }

            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        },
        [dragging, offset]
    );

    const handleMouseUp = useCallback((e: MouseEvent) => {
        setDragging(false);
    }, []);

    useEffect(() => {
        if (dragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging, handleMouseMove, handleMouseUp]);

    return (
        <div className={styles.approach}>
            <div
                ref={divRef}
                className={styles.draggableBox}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                onMouseDown={handleMouseDown}
            >
                Drag Me
            </div>
        </div>
    );
};

export default Approach1;
