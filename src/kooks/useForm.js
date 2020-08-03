import {useState} from 'react'

export function useForm(valoresIniciais){
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

    function clearForm(){
        setValues(valoresIniciais);
    }

    return {
        handleChange,
        values,
        clearForm
    }
}

export default useForm;