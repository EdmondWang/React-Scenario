import Approach1 from './approach-1.index';
import styles from './index.module.css';

const DragAndDropFeature = () => {
    return (
        <div className={styles.dragAndDropFeature}>
            <h1>Drag and Drop Feature</h1>
            <h2>Approach #1</h2>
            <Approach1 />
        </div>
    );
};

export default DragAndDropFeature;
