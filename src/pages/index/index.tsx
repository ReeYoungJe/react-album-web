// import styles from './styles/index.module.scss';
import  styles from './styles/index.module.scss';

function Index() {
    return (
        <div>
            <div className={styles.page}>
                {/*공통헤더 UI 부분*/}
                {/*공통 네이게이션 UI 부분*/}
                <div className={styles.page__contents}>
                    <div className={styles.page__contents__introBox}>
                        <div className={styles.wrap}>
                            <span className={styles.wrap__title}>photo splash</span>
                            <span className={styles.wrap__desc}>인터넷 시각 자료 입니다</span>
                        </div>
                        {/*검색창 UI*/}
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>

                </div>
            </div>
            {/*공통푸터 UI 부분*/}

        </div>


    );
}

export default Index;

