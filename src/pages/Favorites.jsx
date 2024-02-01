import React from 'react';
import AppContext from "../context";

const Favorites = () => {
  const state = React.useContext(AppContext)

  return (
    <div className={'p-35'}>
      <h1>Мои пожелания</h1>
    </div>
  );
};

export default Favorites;