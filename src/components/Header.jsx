import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import AppContext from "../context";

const Header = (props) => {
  const {cartItems} = useContext(AppContext)

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

  return (
    <header className='d-flex justify-between align-center p-40'>
      <Link to={'/'} className="d-flex align-center">
        <img width={40} height={40} src='/img/logo.png' alt={'logo'}></img>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className='opacity-5'>Магазин лучших кроссовок</p>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt=""/>
          <span>{totalPrice} руб.</span></li>
        <Link to={'/favorites'}>
          <img width={18} height={18} src="/img/favorites.svg" alt=""/>
          <span className={'mr-30'}>Мои пожелания</span>
        </Link>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt=""/>
        </li>
      </ul>
    </header>
  );
};

export default Header;