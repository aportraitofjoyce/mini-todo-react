import {createContext} from 'react'

type AuthContextType = {
    isAuth: boolean
    setIsAuth: (auth: boolean) => void
    isLoading: boolean
}

export const AuthContext = createContext<AuthContextType>({
    isAuth: false,
    setIsAuth: () => {
    },
    isLoading: false
})