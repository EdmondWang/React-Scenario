import styles from './use-flex.module.css';

const UseFlex = () => {
    return (
        <div className={styles.page}>
            <div className={styles.header}>Header</div>
            <div className={styles.container}>
                <div className={styles.main}>Main</div>
                <div className={styles.left}>Left</div>
                <div className={styles.right}>Right</div>
            </div>
            <div className={styles.footer}>Footer</div>
        </div>
    );
};

export default UseFlex;
