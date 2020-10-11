import { get, post } from './http'

export const getServices = async () => {
    const response = await get('services')
    if (response.success) return response.data
}

export const registerService = async (body) => {
    const response = await post('services', buildRegisterServiceBody(body))
    console.log(response)
    if (response.success) return response.data
}

const buildRegisterServiceBody = ({ partner_id, sub_service_id, price }) => (
    {
        partner_service: {
            partner_id,
            sub_service_id,
            price
        }
    }
)