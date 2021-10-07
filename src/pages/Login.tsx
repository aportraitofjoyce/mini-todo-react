import React, {FormEvent, useContext} from 'react'
import {AuthContext} from '../context/context'

export const Login = () => {
    const {setIsAuth} = useContext(AuthContext)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder={'Login...'}/>
                <input type='password' placeholder={'Password...'}/>
                <button type={'submit'}>Login</button>
            </form>
        </div>
    )
}