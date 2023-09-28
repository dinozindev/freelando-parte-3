import { createContext, useContext } from "react";

export const SessaoUsuarioContext = createContext({
    usuarioEstaLogado: false,
    login: () => null,
    logout: () => null,
    perfilUsuario: {},  
})

export const useSessaoUsuarioContext = () => {
    return useContext(SessaoUsuarioContext);
}

export const SessaoUsuarioProvider = ({ children }) => {
    const value = {}

    return (
        <SessaoUsuarioContext.Provider value={value}>
            {children}
        </SessaoUsuarioContext.Provider>
    )
}