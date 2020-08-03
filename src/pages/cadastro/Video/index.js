import React, {useEffect, useState} from 'react';
import PageDefualt from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../kooks/useForm';
import FormFild from '../../../components/FormFild'
import Button from '../../../components/Button';
import videosRepository from '../../../repositores/videos';
import categoriasRepository from '../../../repositores/categorias';

function CadastrarVideo(){
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({titulo}) =>titulo)
    const {handleChange, values} = useForm({
        titulo: 'Video padrão',
        url: 'https://www.youtube.com/watch?v=3euNy-1gDhk',
        categoria: 'Front End'
    });

    useEffect(() =>{
        categoriasRepository
            .getAll()
            .then((categoriasFormServer) =>{
                setCategorias(categoriasFormServer);
            })
    }, []);

    return(
        <PageDefualt>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={(event)=>{
                event.preventDefault();
                // alert(`Video Cadastrado com sucesso!!!`);

                const categorioaEscolhida = categorias.find((categoria) =>{
                    return categoria.titulo === values.categoria;
                });

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: 1,
                }).then(() =>{
                    console.log('Video cadastrado com sucesso!');
                    history.push('/');
                });
            }} >
            <FormFild 
                label="Titulo do Video"
                name="titulo"
                value={values.titulo}
                onChange={handleChange}
            />
            <FormFild 
                label="URL"
                name="url"
                value={values.url}
                onChange={handleChange}
            />

            <FormFild 
                label="Categoria"
                name="categoria"
                value={values.categoria}
                onChange={handleChange}
                suggestions={categoryTitles}
            />

            <Button type="submit">
                Cadastrar
            </Button>


            </form>

            <Link to="/cadastrar/categoria" >
                Cadastrar Categoria
            </Link>
        </PageDefualt>
    );
}

export default CadastrarVideo;