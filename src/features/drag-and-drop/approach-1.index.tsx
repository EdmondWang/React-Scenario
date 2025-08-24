import { useRef, useState, useEffect, useCallback } from 'react';
import styles from './index.module.css';

const Approach1 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Boundary states
    const [containerBoundary, setContainerBoundary] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });

    const [divBoundary, setDivBoundary] = useState({
        width: 0,
        height: 0,
    });

    // Calculate boundaries when components mount/update
    useEffect(() => {
        const handleResize = () => {
            // Update container boundary
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setContainerBoundary({
                    x: rect.left,
                    y: rect.top,
                    width: rect.width,
                    height: rect.height,
                });
            }

            // Update div boundary
            if (divRef.current) {
                const rect = divRef.current.getBoundingClientRect();
                setDivBoundary({
                    width: rect.width,
                    height: rect.height,
                });
            }
        };

        // Initial calculation
        handleResize();

        // Add resize listener for responsiveness
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Handle mouse down - start dragging
    const handleMouseDown: React.MouseEventHandler<HTMLDivElement> =
        useCallback((e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault(); // Prevent text selection

            if (divRef.current) {
                const rect = divRef.current.getBoundingClientRect();
                setOffset({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
                setDragging(true);
            }
        }, []);

    // Handle mouse move - update position with boundary checks
    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!dragging) return;

            // Calculate new position relative to container
            let newX = e.clientX - containerBoundary.x - offset.x;
            let newY = e.clientY - containerBoundary.y - offset.y;

            // Apply boundary constraints
            newX = Math.max(
                0,
                Math.min(newX, containerBoundary.width - divBoundary.width)
            );
            newY = Math.max(
                0,
                Math.min(newY, containerBoundary.height - divBoundary.height)
            );

            setPosition({ x: newX, y: newY });
        },
        [dragging, offset, containerBoundary, divBoundary]
    );

    // Handle mouse up - stop dragging
    const handleMouseUp = useCallback((_e: MouseEvent) => {
        setDragging(false);
    }, []);

    // Add/remove event listeners based on dragging state
    useEffect(() => {
        if (dragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging, handleMouseMove, handleMouseUp]);

    return (
        <div ref={containerRef} className={styles.approach}>
            <div
                ref={divRef}
                className={styles.draggableBox}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    cursor: dragging ? 'grabbing' : 'grab',
                }}
                onMouseDown={handleMouseDown}
            >
                Drag Me
            </div>
        </div>
    );
};

export default Approach1;
