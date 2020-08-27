import React, { createContext, useState, useContext } from 'react'
import Loading from '~/components/Loading'

const StateContext = createContext()

export const GlobalState = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)

    return <StateContext.Provider value={{ loading, setLoading, user, setUser }}>
        <Loading visible={loading} /> 
        {children}
    </StateContext.Provider>
}

export const useGlobalState = () => {
    const context = useContext(StateContext)
    const { loading, setLoading, user, setUser } = context

    return { loading, setLoading, user, setUser }
}