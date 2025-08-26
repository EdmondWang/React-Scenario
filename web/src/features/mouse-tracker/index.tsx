import MouseTracker from './mouse-tracker';
import { useMousePosition } from './useMousePosition';
import styles from './index.module.css';

const MouseTrackerFeature = () => {
    const mouseP = useMousePosition();
    return (
        <div className={styles.mouseTrackerFeature}>
            <h1>Mouse Tracker Feature</h1>
            <p>Use mouse position</p>
            <p>
                [{mouseP.x}, {mouseP.y}]
            </p>
            <MouseTracker
                render={(position) => (
                    <div
                        className={styles.mouseTrackerBox}
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px)`,
                        }}
                    >
                        <p>
                            Mouse position: {position.x}, {position.y}
                        </p>
                    </div>
                )}
            />
        </div>
    );
};

export default MouseTrackerFeature;
