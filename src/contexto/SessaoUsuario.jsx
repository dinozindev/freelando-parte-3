import { createContext, useContext, useState } from "react";
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

    // estado responsável por gerenciar se o usuário está logado ou não. 
    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(!!ArmazenadorToken.accessToken);
    // requisição post responsável por enviar os dados de login do usuário. 
    const login = (email, senha) => {
        http.post('auth/login', {
            email,
            senha
        })
            .then(response => {
                ArmazenadorToken.definirTokens(response.data.access_token, response.data.refresh_token);
                setUsuarioEstaLogado(true);
            })
            .catch(error => console.error(error)) 
    }

    // quando o botão de logout é pressionado, remove a sessionStorage dos tokens, e define o usuário como não logado. 
    const logout = () => {
        ArmazenadorToken.efetuarLogout();
        setUsuarioEstaLogado(false);
    }

    // o que será compartilhado para os componentes filhos. 
    const value = {
        login,
        logout,
        usuarioEstaLogado
    }

    return (
        <SessaoUsuarioContext.Provider value={value}>
            {children}
        </SessaoUsuarioContext.Provider>
    )
}