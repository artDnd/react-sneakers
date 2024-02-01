import React from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

const Home = ({onAddToCart, isLoading}) => {
  const {setCartSearchItem, items, cartSearchItem} = React.useContext(AppContext)

  const onChangeSearchItem = (event) => { // для работы с инпутом
    setCartSearchItem(event.target.value)
  }
  const onClearSearchItem = () => { // при крестике очищает поле
    setCartSearchItem('')
  }
  const renderItems = () => {
    const filteredItem = items.filter(item => item.title.toLowerCase().includes(cartSearchItem.toLowerCase()))
    return (
      filteredItem
        .map((el) =>
          <Card key={el.id} title={el.title}
                id={el.id}
                url={el.url}
                price={el.price}
                onPlus={(obj) => {
                  onAddToCart(obj)
                }}
                isLoading={isLoading}
          />)
    )
  }


  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{cartSearchItem ? `Поиск запроса по: "${cartSearchItem}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search"/>
          {cartSearchItem &&
            <img onClick={onClearSearchItem} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>}

          <input onChange={onChangeSearchItem} value={cartSearchItem} type="text" placeholder="Поиск..."/>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {renderItems()}
      </div>
    </div>
  );
};

export default Home;