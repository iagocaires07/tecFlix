import React from 'react';

import './App.css';

import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carouser from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: "#141414"}} >
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem a final? Descubra com a Vanessa!"}
      />

      <Carouser 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carouser 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carouser 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carouser 
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carouser 
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carouser 
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

    </div>
  );
}

export default App;
