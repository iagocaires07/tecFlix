import React, {useState, useEffect} from 'react';
import PageDefualt from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormFild';
import Button from '../../../components/Button';

function CadastroCategoria(){
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    
    const [categorias, setCategoria] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValores(chave, valor){
        setValues({
            ...values,
            [chave]: valor, //nome: 'valor'
        });
    }

    function handleChange(infosDoEvento){
        setValores(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    useEffect(()=>{
    
        const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorioas'
        : 'https://iagoflix.herokuapp.com/categorioas';

        fetch(URL).then(async(respostaDoServidor) =>{
            const response = await respostaDoServidor.json();
            setCategoria([
                ...response
            ]);
        });

        // setTimeout(() => {
        //     setCategoria([
        //         ...categorias,
        //         {
        //             "id": 1,
        //             "nome": "Front End",
        //             "descricao": "Uma categoria bacanuda",
        //             "cor": "#cbd1ff"
        //         },
        //         {
        //             "id": 2,
        //             "nome": "Back End",
        //             "descricao": "Outra categoria bacanuda",
        //             "cor": "#cbd1ff"
        //         }
        //     ])
        // }, 4000);
    },[
        
    ]);

    return(
        <PageDefualt>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategoria([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />  

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                /> 

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />   

                <Button>
                    Cadastrar
                </Button>

                {categorias.length === 0 && (
                    <div>
                        Carregando
                    </div>
                )}

            </form>

            <ul>
                {categorias.map((categoria) =>{
                    return(
                        <li key={`${categoria.nome}`}>
                            {categoria.nome}
                        </li>
                   );
                })}
            </ul>

            <Link to="/" >
                Ir para home
            </Link>
        </PageDefualt>
    );
}

export default CadastroCategoria;