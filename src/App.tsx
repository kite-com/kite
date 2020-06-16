import React, {FC } from 'react';

import '@commonScss/index.scss';
import '@scss/home/main.scss';;

const App: FC = () => {

  const onHello = () => {
      console.log('hello'); 
  }


  return (
    <div className="home-page">
        <header onClick={onHello}>hello00</header>
    </div>
  );
}

export default App;
