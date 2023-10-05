import { createContext, useContext } from "react";
import httpInstance from "../http";

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
        httpInstance.post('auth/login', {
            email,
            senha
        })
            .then(response => console.log(response))
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