const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

// ao invés de criarmos uma função separada para cada caso, criamos um objeto de classe, já que o contexto de token vale para todos.
export class ArmazenadorToken {
    static definirTokens(accessToken, refreshToken) {
        sessionStorage.setItem(ACCESS_TOKEN, accessToken);
        sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
    }
    static efetuarLogout () {
        sessionStorage.removeItem(ACCESS_TOKEN);
        sessionStorage.removeItem(REFRESH_TOKEN);
    }
    static get obterAccessToken() {
        return sessionStorage.getItem(ACCESS_TOKEN);
    }
    static get obterRefreshToken() {
        return sessionStorage.getItem(REFRESH_TOKEN);
    }
}