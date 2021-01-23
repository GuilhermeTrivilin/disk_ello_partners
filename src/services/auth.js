import { post, get, setDefaultHeaders } from '~/services/http'
import { getToken, deleteToken } from './manageToken'

export const registerPartner = async (data) => {
    const response = await post(`partners`, buildPartnerFormData(data))
    console.log(response)
    if(response.success) return response.data
}

const buildPartnerFormData = (data) => {
    const formData = new FormData()
    
    if(data?.name) formData.append("partner[name]", data.name)
    if(data?.birth_date) formData.append("partner[birth_date]", data.birth_date)
    if(data?.cpf) formData.append("partner[cpf]", data.cpf)
    if(data?.email) formData.append("partner[email]", data.email)
    if(data?.phone) formData.append("partner[phone]", data.phone)
    if(data?.password) formData.append("partner[password]", data.password)
    if(data?.avatar) formData.append("partner[avatar]", data.avatar)
    
    if(data?.city) formData.append("partner[partner_address_attributes][city]", data.city)
    if(data?.neighborhood) formData.append("partner[partner_address_attributes][neighborhood]", data.neighborhood)
    if(data?.state) formData.append("partner[partner_address_attributes][state]", data.state)
    if(data?.street) formData.append("partner[partner_address_attributes][street]", data.street)
    if(data?.street_number) formData.append("partner[partner_address_attributes][street_number]", data.street_number)
    if(data?.zipcode) formData.append("partner[partner_address_attributes][zipcode]", data.zipcode)
    if(data?.zipcode) formData.append("partner[partner_address_attributes][country]", "BR")
    
    if(data?.rg_number) formData.append("partner[partner_document_attributes][rg_number]", data.rg_number)
    if(data?.expedition_date) formData.append("partner[partner_document_attributes][expedition_date]", data.expedition_date)
    if(data?.dispatching_agency) formData.append("partner[partner_document_attributes][dispatching_agency]", data.dispatching_agency)
    if(data?.mother_name) formData.append("partner[partner_document_attributes][mother_name]", data.mother_name)

    if(data?.card_number) formData.append("partner[partner_payment_information_attributes][card_number]", data.card_number)
    if(data?.card_holder_name) formData.append("partner[partner_payment_information_attributes][card_holder_name]", data.card_holder_name)
    if(data?.card_expiration_date) formData.append("partner[partner_payment_information_attributes][card_expiration_date]", data.card_expiration_date.replace(/[^a-zA-Z0-9 ]/g, ""))
    if(data?.card_cvv) formData.append("partner[partner_payment_information_attributes][card_cvv]", data.card_cvv)
    if(data?.payment_type) formData.append("partner[partner_payment_information_attributes][payment_type]", "0")
    
    return formData
}

export const login = async (email, password) => {
    const response = await post(`login`, {
        partner: {
            email,
            password
        },
    });

    if (response.success) return response
}

export const checkPartnerToken = async () => {
    const token = await getToken()
    if (!token) return false
    setDefaultHeaders(token)

    const response = await get(`auto_login`)
    if (response.success) return response.data
}

export const signOut = async () => {
    setDefaultHeaders('')
    await deleteToken()
}