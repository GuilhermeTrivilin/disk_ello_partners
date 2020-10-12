import { get, post, put } from './http'

export const getServices = async () => {
    const response = await get('services')
    if (response.success) return response.data
}

export const registerService = async (body) => {
    const response = await post('services', buildRegisterServiceBody(body))
    if (response.success) return response.data
}

export const getUserServices = async (user_id) => {
    const response = await get(`${user_id}/service`)
    if (response.success) return response.data
}

export const updateUserService = async (sub_service_id, body) => {
    const response = await put(`services/${sub_service_id}`, buildUpdateServiceBody(body))
    console.log(response)
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

const buildUpdateServiceBody = ({ price, serviceStatus }) => (
    {
        partner_service: {
            status: serviceStatus ? "active" : "inactive",
            price
        }
    }
)