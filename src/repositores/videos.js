import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(objetoDoVideo){
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headersd: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    }).then(async(respostaDoServidor) =>{
        if(respostaDoServidor.ok){
            const response = await respostaDoServidor.json();
            return response;
        }

        throw new Error('Não foi possivel pegar os dados do servidor :(');
    });
}

export default{
    create,
};