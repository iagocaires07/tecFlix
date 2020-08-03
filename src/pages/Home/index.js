import React, {useEffect, useState} from 'react';

import './App.css';
import BannerMain from '../../components/BannerMain';
import Carouser from '../../components/Carousel';
import categoriasRepository from '../../repositores/categorias';
import PageDefualt from '../../components/PageDefault';

function Home() {
  const [dadeosIniciais, setDadosIniciais] = useState([]);


  //http://localhost:8080/categorioas?_embed=videos 

  useEffect(() =>{
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) =>{
      setDadosIniciais(categoriasComVideos);
      console.log(categoriasComVideos);
    }).catch((error) =>{
      console.log(error.message);
    });
  },[]);

  return (
    <PageDefualt paddingAll={0} >

      {dadeosIniciais.length === 0 && (<div>Loading..</div>)}

      {dadeosIniciais.map((categoria, indice) =>{
        if(indice === 0){
          return(
            <div key={categoria.id}>
              <BannerMain 
                videoTitle={dadeosIniciais[0].videos[0].titulo}
                url={dadeosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem a final? Descubra com a Vanessa!"
              />
              <Carouser 
                ignoreFirstVideo
                category={dadeosIniciais[0]}
              />
            </div>
          );
        }

        return(
          <Carouser 
            key={categoria.id}
            category={categoria}
          />
        );
      })}


      {/* <BannerMain
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

      <Footer /> */}

  </PageDefualt>
  );
}

export default Home;
