import { get } from './http'

export const getWaitingOrders = async () => {
    const response = await get('incoming_order_services')
    if(response.success) return response.data 
}

export const getFinishedOrders = async() => {
    const response = await get('finalized_order_services')
    if(response.success) return response.data 
}

export const acceptOrder = async (order_id) => {
    const response = await get(`${order_id}/accept_order_service`)
    if(response.success) return response.data
}

export const rejectOrder = async (order_id) => {
    const response = await get(`${order_id}/decline_order_service`)
    if(response.success) return response.data
}