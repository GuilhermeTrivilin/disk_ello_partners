import React, { createContext, useState, useContext } from 'react'

const RegisterContext = createContext()

export const RegisterProvider = ({ children }) => {

    const [name, setName] = useState(null)
    const [birth_date, setBirth_date] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [photo, setPhoto] = useState(null)

    const [city, setCity] = useState(null)
    const [district, setDistrict] = useState(null)
    const [state, setState] = useState(null)
    const [street, setStreet] = useState(null)
    const [street_number, setStreet_number] = useState(null)
    const [zip_code, setZip_code] = useState(null)

    const [rg_number, setRg_number] = useState(null)
    const [expedition_date, setExpedition_date] = useState(null)
    const [dispatching_agency, setDispatching_agency] = useState(null)
    const [mother_name, setMother_name] = useState(null)

    return <RegisterContext.Provider value={{
        name,
        birth_date,
        cpf,
        email,
        phone,
        password,
        photo,
        city,
        district,
        state,
        street,
        street_number,
        zip_code,
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
        setPhoto,
        setCity,
        setDistrict,
        setState,
        setStreet,
        setStreet_number,
        setZip_code,
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
        photo,
        city,
        district,
        state,
        street,
        street_number,
        zip_code,
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
        setPhoto,
        setCity,
        setDistrict,
        setState,
        setStreet,
        setStreet_number,
        setZip_code,
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
        photo,
        city,
        district,
        state,
        street,
        street_number,
        zip_code,
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
        setPhoto,
        setCity,
        setDistrict,
        setState,
        setStreet,
        setStreet_number,
        setZip_code,
        setRg_number,
        setExpedition_date,
        setDispatching_agency,
        setMother_name,
    }
}