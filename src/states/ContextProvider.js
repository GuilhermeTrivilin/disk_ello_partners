import React, { createContext, useState, useContext } from 'react'
import Loading from '~/components/Loading'

const StateContext = createContext()

export const GlobalState = ({ children }) => {

    const [loading, setLoading] = useState(false)

    return <StateContext.Provider value={{ loading, setLoading }}>
        <Loading visible={loading} /> 
        {children}
    </StateContext.Provider>
}

export const useGlobalState = () => {
    const context = useContext(StateContext)
    const { loading, setLoading } = context

    return { loading, setLoading }
}