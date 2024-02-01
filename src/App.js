import React, {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";

import AppContext from "./context";

import './index.scss';
import Header from "./components/Header";
import Drawer from "./components/Driwer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


const App = () => {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartSearchItem, setCartSearchItem] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    // axios.get('https://65b1d7e59bfb12f6eafc384b.mockapi.io/items').then(res => setItems(res.data)) // получаем данные с сервера (для карточки товаров)
    // axios.get('https://65b1d7e59bfb12f6eafc384b.mockapi.io/cart').then(res => setCartItems(res.data)) // Получаем данный с корзины
    async function fetchData() {
      const itemsResponse = await axios.get('https://65b1d7e59bfb12f6eafc384b.mockapi.io/items')
      const cartResponse = await axios.get('https://65b1d7e59bfb12f6eafc384b.mockapi.io/cart')

      setIsLoading(false)
      setCartItems(cartResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData()

  }, []);

  const deleteItemCart = (id) => { // удаляет карточку товара с корзины
    axios.delete(`https://65b1d7e59bfb12f6eafc384b.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }
  const onAddToCart = (obj) => { // отправляет карточку товара на сервер
    if (cartItems.find(item => Number(item.id) === Number(obj.id))) { // проверка и удаление повторяющихся товаров
      axios.delete(`https://65b1d7e59bfb12f6eafc384b.mockapi.io/cart/${obj.id}`)
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post('https://65b1d7e59bfb12f6eafc384b.mockapi.io/cart', obj)
      setCartItems(prev => [...prev, obj])
    }
  }


  return (

    <AppContext.Provider value={{items, cartSearchItem, setCartSearchItem, cartItems}}>
      <div className="wrapper clear">
        {cartOpened &&
          <Drawer deleteItem={deleteItemCart} items={cartItems} onClickCart={() => setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)}/>
        <Routes>
          <Route path={'/'} element={<Home onAddToCart={onAddToCart}
                                           isLoading={isLoading}
          />}
          />

          <Route path={"/favorites"} element={<Favorites/>}/>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
