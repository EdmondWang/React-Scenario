import styles from './use-grid.module.css';

const UseGrid = () => {
    return (
        <div className={styles.page}>
            <div className={styles.header}>Header</div>
            <div className={styles.main}>Main</div>
            <div className={styles.left}>Left</div>
            <div className={styles.right}>Right</div>
            <div className={styles.footer}>Footer</div>
        </div>
    );
};

export default UseGrid;
