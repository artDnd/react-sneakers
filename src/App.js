import './index.scss';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Driwer";
import React, {useState} from "react";

const store = [
  {title: ' Мужские Кроссовки Nike Blazer Mid Suede', imgUrl: '/img/sneakers/1.jpg', price: 12999, id:1},
  {title: ' Мужские Кроссовки Nike Air Max 270', imgUrl: '/img/sneakers/2.jpg', price: 12999, id:2},
  {title: ' Мужские Кроссовки Nike Blazer Mid Suede', imgUrl: '/img/sneakers/3.jpg', price: 8499, id:3},
  {title: ' Кроссовки Puma X Aka Boku Future Rider', imgUrl: '/img/sneakers/4.jpg', price: 8999, id:4}
]
let createElementCard = store.map(el => <Card key={el.id} title={el.title} url={el.imgUrl} price={el.price}/>)


const App = () => {
  const [cartOpened, setCartOpened] = useState(false)

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClickCart={() => setCartOpened(false)}/> }
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search"/>
            <input type="text" placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex">
          {createElementCard}
        </div>
      </div>
    </div>
  );
}

export default App;
