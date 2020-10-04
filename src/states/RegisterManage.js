import React, { createContext, useState, useContext } from 'react'

const RegisterContext = createContext()

export const RegisterProvider = ({ children }) => {

    const [name, setName] = useState("")
    const [birth_date, setBirth_date] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [avatar, setAvatar] = useState("")

    const [city, setCity] = useState("")
    const [neighborhood, setneighborhood] = useState("")
    const [state, setState] = useState("")
    const [street, setStreet] = useState("")
    const [street_number, setStreet_number] = useState("")
    const [zipcode, setZipcode] = useState("")

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