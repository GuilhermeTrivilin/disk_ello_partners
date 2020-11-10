import { showToast } from "~/helpers/showToast"

export const validateForm = (serviceContractsStates) => {
    if(isEmpty(serviceContractsStates)){
        showToast("Preencha todos os campos")
        return false
    }

    return true
}

const isEmpty = (fields) => {
    let isEmpty = false

    const arrayFields = Object.keys(fields)

    arrayFields.forEach(field => {
        if (fields[field] === "" || fields[field] === null) isEmpty = true
    })

    return isEmpty
}