const URL = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://iagoflix.herokuapp.com';

export default{
    URL,
}