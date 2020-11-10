import { get, post, destroy } from './http'

export const addToCart = async (body) => {
    const response = await post("cart_items", buildAddCartBody(body))
    return response
}

export const removeFromCart = async (itemId) => {
    const response = await destroy(`cart_items/${itemId}`)
    return response
}

export const showCartItems = async() => {
    const response = await get(`cart_items`)
    return response
}

export const paymentCartItems = async (body) => {
    const response = await post('order_product', buildPaymentCartItems(body))
    return response
}

const buildPaymentCartItems = ({ 
    state,
    city,
    neighborhood,
    street,
    street_number,
    zipcode,
    card_number,
    card_holder_name,
    card_expiration_date,
    card_cvv,
    credits,
 }) => ({
    order_product: {
        country: "br",
        state,
        city,
        neighborhood,
        street,
        street_number,
        zipcode,
        card_number,
        card_holder_name,
        card_expiration_date,
        card_cvv,
        credits,
    }
})

const buildAddCartBody = ({ 
    quantity,
    partner_cart_id,
    product_id, 
 }) => ({
    cart_item: {
        quantity,
        partner_cart_id,
        product_id,
    }
})