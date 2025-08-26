import styles from './index.module.css';

const BlockFormattingContextFeature = () => {
    return (
        <div className={styles.page}>
            <h1>Block Formatting Context</h1>
            <p>
                具有BFC特性的容器可以看成一个独立的隔绝容器，里面的元素不会影响外面的元素
            </p>

            <h2>父子margin 重叠（son 影响了 father 的上边距）</h2>
            <h3>Before</h3>
            <div className={styles['sample-1-before-father']}>
                <div className={styles['sample-1-before-son']}></div>
            </div>
            <h3>After</h3>
            <div className={styles['sample-1-after-father']}>
                <div className={styles['sample-1-before-son']}></div>
            </div>

            <h2>外边距折叠</h2>
            <h3>Before</h3>
            <div className={styles['sample-2-before-gege']}></div>
            <div className={styles['sample-2-before-didi']}></div>
            <h3>After</h3>
            <div className={styles['sample-2-before-gege']}></div>
            <div className={styles['sample-2-after-wrap']}>
                <div className={styles['sample-2-after-didi']}></div>
            </div>

            <h2>自适应两栏布局</h2>
            <h3>Before</h3>
            <div className={styles['sample-3-before-container']}>
                <div className={styles['sample-3-before-left']}></div>
                <div className={styles['sample-3-before-right']}></div>
            </div>

            <h3>After</h3>
            <div className={styles['sample-3-before-container']}>
                <div className={styles['sample-3-before-left']}></div>
                <div className={styles['sample-3-after-right']}></div>
            </div>
        </div>
    );
};

export default BlockFormattingContextFeature;
