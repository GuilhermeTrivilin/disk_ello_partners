import { get, post } from './http'

export const getServices = async () => {
    const response = await get('services')
    if (response.success) return response.data
}

export const registerService = async (body) => {
    const response = await post('services', buildRegisterServiceBody(body))
    console.log(response.data)
    if (response.success) return response.data
}

const buildRegisterServiceBody = ({ user, selectedSubService, price }) => (
    {
        partner_service: {
            partner_id: user.id,
            sub_service_id: selectedSubService.key,
            price
        }
    }
)