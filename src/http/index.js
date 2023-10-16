import axios from "axios";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";

const http = axios.create({
    baseURL: 'http://localhost:8080/'
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
    // Do something before request is sent 
    const token = ArmazenadorToken.obterAccessToken;
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("Token foi adicionado ao cabeçalho.")
    }
    return config;
}, function (error) {
    // Do something with request error return
    return Promise.reject(error);
});

// rotas que não serão tratadas caso retornem 401.
const rotasIgnoradasPelosErros = [
    'auth/login', 'auth/refresh'
]

// faz uma requisição get à API, que tem como função atualizar os tokens de access e refresh, passando o token de refresh atual como autorizador, atualizando a sessionStorage com os novos tokens. 
const tentarRenovarToken = async () => {
    const token = ArmazenadorToken.obterRefreshToken;
    return axios.get('http://localhost:8080/auth/refresh', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        ArmazenadorToken.definirTokens(response.data.access_token, response.data.refresh_token);
    })
}

// função que será chamada caso o erro retorne como 401, ou seja, quando o token for expirado. Chama e aguarda o término da execução da function tentarRenovarToken, e faz outra requisição, passando as configurações da requisição anterior novamente. 
const lidarComErro401 = async (error) => {
    await tentarRenovarToken()
    .then(() => http(error.config))
    return Promise.reject(error);
}

// Add a response interceptor
http.interceptors.response.use( (response) => {
    return response;
  }, function (error) {
    if (!rotasIgnoradasPelosErros.includes(error.config.url) && error.response.status === 401) {
        // caso a rota não esteja inclusa dentro do array rotasIgnoradasPelosErros, ou seja, ela precisa lidar com o erro 401, chamamos a function lidarComErro401.
        return lidarComErro401(error);
    }
    return Promise.reject(error);
  });


export default http