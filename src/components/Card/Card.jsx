import React, {useState} from 'react';
import styles from './Card.module.scss'
const Card = (props) => {

  let [isAdded, setIsAdded] = useState(false)
  const handleIsAdded = () => {
    setIsAdded(!isAdded)
  }

  return (
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/img/heart-unliked.svg" alt="Unliked"/>
        </div>
        <img width={133} height={112} src={props.url} alt="Sneakers"/>
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className='d-flex flex-column'>
            <span>Цена</span>
            <b>{props.price} руб.</b>
          </div>
            <img className={styles.plus} onClick={handleIsAdded} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg' } alt="plus" />
        </div>
      </div>
  );
};

export default Card;