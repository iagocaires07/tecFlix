import React from 'react';
import PageDefualt from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastrarVideo(){
    return(
        <PageDefualt>
            <h1>Cadastro de Vídeo</h1>

            <Link to="/cadastrar/categoria" >
                Cadastrar Categoria
            </Link>
        </PageDefualt>
    );
}

export default CadastrarVideo;