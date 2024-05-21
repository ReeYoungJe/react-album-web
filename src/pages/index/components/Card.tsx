import styles from './Card.module.scss'

function Card() {
    const openDialog = ()=> {
        console.log('asdasdsd');
    }
    return (
        <div className={styles.card} onClick={openDialog}>
            <div className={styles.card__image}></div>
        </div>
    );
}

export default Card;