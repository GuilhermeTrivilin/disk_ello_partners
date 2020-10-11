import React, { createContext, useState, useContext } from 'react'

const RegisterContext = createContext()

export const RegisterProvider = ({ children }) => {

    const [name, setName] = useState("Guilherme Trivilin")
    const [birth_date, setBirth_date] = useState("08/05/2002")
    const [cpf, setCpf] = useState("167.632.907-21")
    const [email, setEmail] = useState("trivilin.dev@hotmail.com")
    const [phone, setPhone] = useState("(27) 99257-3600")
    const [password, setPassword] = useState("123456")
    const [avatar, setAvatar] = useState("")

    const [city, setCity] = useState("Vila Velha")
    const [neighborhood, setneighborhood] = useState("Itapuã")
    const [state, setState] = useState("ES")
    const [street, setStreet] = useState("Jair de Andrade")
    const [street_number, setStreet_number] = useState("740")
    const [zipcode, setZipcode] = useState("29101700")

    const [rg_number, setRg_number] = useState("")
    const [expedition_date, setExpedition_date] = useState("")
    const [dispatching_agency, setDispatching_agency] = useState("")
    const [mother_name, setMother_name] = useState("")

    return <RegisterContext.Provider value={{
        name,
        birth_date,
        cpf,
        email,
        phone,
        password,
        avatar,
        city,
        neighborhood,
        state,
        street,
        street_number,
        zipcode,
        rg_number,
        expedition_date,
        dispatching_agency,
        mother_name,
        setName,
        setBirth_date,
        setCpf,
        setEmail,
        setPhone,
        setPassword,
        setAvatar,
        setCity,
        setneighborhood,
        setState,
        setStreet,
        setStreet_number,
        setZipcode,
        setRg_number,
        setExpedition_date,
        setDispatching_agency,
        setMother_name,
    }}>
        {children}
    </RegisterContext.Provider>
}

export const useRegisterProvider = () => {
    const context = useContext(RegisterContext)
    const {
        name,
        birth_date,
        cpf,
        email,
        phone,
        password,
        avatar,
        city,
        neighborhood,
        state,
        street,
        street_number,
        zipcode,
        rg_number,
        expedition_date,
        dispatching_agency,
        mother_name,
        setName,
        setBirth_date,
        setCpf,
        setEmail,
        setPhone,
        setPassword,
        setAvatar,
        setCity,
        setneighborhood,
        setState,
        setStreet,
        setStreet_number,
        setZipcode,
        setRg_number,
        setExpedition_date,
        setDispatching_agency,
        setMother_name,
    } = context

    return {
        name,
        birth_date,
        cpf,
        email,
        phone,
        password,
        avatar,
        city,
        neighborhood,
        state,
        street,
        street_number,
        zipcode,
        rg_number,
        expedition_date,
        dispatching_agency,
        mother_name,
        setName,
        setBirth_date,
        setCpf,
        setEmail,
        setPhone,
        setPassword,
        setAvatar,
        setCity,
        setneighborhood,
        setState,
        setStreet,
        setStreet_number,
        setZipcode,
        setRg_number,
        setExpedition_date,
        setDispatching_agency,
        setMother_name,
    }
}