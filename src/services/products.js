import { get } from './http'

export const getProducts = async(category = "") => {
    const response = await get(`products?category=${category}`)
    if(response.success) return response.data
}