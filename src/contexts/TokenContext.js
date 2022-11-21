import { useState, createContext } from "react";

export const TokenContext = createContext()

export default function UserProvider({ children }) {

    const [token, setToken] = useState()

    return (
        <TokenContext.Provider value={{ token, setToken}}>
            {children}
        </TokenContext.Provider>
    )
}