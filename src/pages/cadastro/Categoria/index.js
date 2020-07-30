import React, {useState} from 'react';
import PageDefualt from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormFild';

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
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                /> 

                {/* <div>
                    
                    <label>
                        Descrição:<input type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />  

                {/* 
                <div> 
                    <label>
                        Cor:<input type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) =>{
                    return(
                    <li key={`${categoria}${indice}`} >{categoria.nome}</li>
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