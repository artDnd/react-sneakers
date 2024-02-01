import React, {useState} from 'react';

import MyLoader from './IsLoadingCard'
import styles from './Card.module.scss'

const Card = ({url, title, price, onPlus, id, isLoading}) => {
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)


  const handleIsAdded = () => {
    onPlus({id, url, title, price})
    setIsAdded(!isAdded)
  }
  const handleIsFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    (isLoading) ? (<MyLoader/>) :
      (<>
        <div className={styles.card}>
          <div className={styles.favorite}>
            <img onClick={handleIsFavorite} src={!isFavorite ? "/img/heart-unliked.svg" : "/img/heart-liked.svg"}
                 alt="Unliked"/>
          </div>
          <img width={133} height={112} src={url} alt="Sneakers"/>
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className='d-flex flex-column'>
              <span>Цена</span>
              <b>{price} руб.</b>
            </div>
            <img className={styles.plus} onClick={handleIsAdded}
                 src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt="plus"/>
          </div>
        </div>
      </>)
  );
};

export default Card;