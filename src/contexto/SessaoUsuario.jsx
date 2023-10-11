import { createContext, useContext } from "react";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";
import http from "../http";

export const SessaoUsuarioContext = createContext({
    usuarioEstaLogado: false,
    login: (email, senha) => null,
    logout: () => null,
    perfilUsuario: {},  
})

export const useSessaoUsuarioContext = () => {
    return useContext(SessaoUsuarioContext);
}

export const SessaoUsuarioProvider = ({ children }) => {

    // requisição post responsável por enviar os dados de login do usuário. 
    const login = (email, senha) => {
        http.post('auth/login', {
            email,
            senha
        })
            .then(response => {
                ArmazenadorToken.definirTokens(response.data.access_token, response.data.refresh_token);
            })
            .catch(error => console.error(error)) 
    }

    // o que será compartilhado para os componentes filhos. 
    const value = {
        login
    }

    return (
        <SessaoUsuarioContext.Provider value={value}>
            {children}
        </SessaoUsuarioContext.Provider>
    )
}