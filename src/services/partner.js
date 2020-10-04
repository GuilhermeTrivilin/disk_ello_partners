import { put } from './http'

export const updatePartner = async (id, body) => {
    const response = await put(`partners/${id}`, buildBody(body))
    if (response.success) return response.data
}

const buildBody = ({ name, phone, birth_date, email, cpf }) => (
    { name, phone, birth_date, email, cpf }
)