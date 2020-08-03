import config from '../config';

const URL_CATEGORIAS = `${config.URL}/categorioas`;

function getAll(){
    return fetch(`${URL_CATEGORIAS}`).then(async(respostaDoServidor) =>{
        if(respostaDoServidor.ok){
            const response = await respostaDoServidor.json();
            return response;
        }

        throw new Error('Não foi possivel pegar os dados do servidor :(');
    });
}


function getAllWithVideos(){
    return fetch(`${URL_CATEGORIAS}?_embed=videos`).then(async(respostaDoServidor) =>{
        if(respostaDoServidor.ok){
            const response = await respostaDoServidor.json();
            return response;
        }

        throw new Error('Não foi possivel pegar os dados do servidor :(');
    });
}

export default{
    getAllWithVideos,
    getAll,
};