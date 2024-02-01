import React, {useContext} from 'react';
import AppContext from "../context";

const Drawer = ({onClickCart, deleteItem, items}) => {
  const {cartItems} = useContext(AppContext)

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

  console.log(totalPrice)
  let itemsElement = items.map((obj) => {
    return (
      <div className="cartItem d-flex align-center">
        <div style={{backgroundImage: `url(${obj.url})`}}
             className="cardItemImg"></div>
        <div className="mr-20 flex">
          <p className="mb-5">{obj.title}</p>
          <b>{obj.price} руб.</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" onClick={() => deleteItem(obj.id)}/>
      </div>
    )
  })

  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between">Карзина
          <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={onClickCart}/>
        </h2>
        <div className="items">
          {itemsElement}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>{totalPrice} руб.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>{(totalPrice * 0.05).toFixed(2)} руб.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
        </div>

      </div>
    </div>
  );
};

export default Drawer;