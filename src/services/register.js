import { postFormData } from '~/services/http'

export const registerPartner = async (data) => {
    const response = await postFormData(`partners`, buildPartnerFormData(data))
    if (response.success) return response.data
}

const buildPartnerFormData = (data) => {
    const formData = new FormData()
    
    if(data?.name) formData.append("partner[name]", data.name)
    if(data?.birth_date) formData.append("partner[birth_date]", data.birth_date)
    if(data?.cpf) formData.append("partner[cpf]", data.cpf)
    if(data?.email) formData.append("partner[email]", data.email)
    if(data?.phone) formData.append("partner[phone]", data.phone)
    if(data?.password) formData.append("partner[password]", data.password)
    if(data?.photo) formData.append("partner[photo]", data.photo)
    
    if(data?.city) formData.append("partner[partner_address_attributes][city]", data.city)
    if(data?.district) formData.append("partner[partner_address_attributes][district]", data.district)
    if(data?.state) formData.append("partner[partner_address_attributes][state]", data.state)
    if(data?.street) formData.append("partner[partner_address_attributes][street]", data.street)
    if(data?.street_number) formData.append("partner[partner_address_attributes][street_number]", data.street_number)
    if(data?.zip_code) formData.append("partner[partner_address_attributes][zip_code]", data.zip_code)
    
    if(data?.rg_number) formData.append("partner[partner_document_attributes][rg_number]", data.rg_number)
    if(data?.expedition_date) formData.append("partner[partner_document_attributes][expedition_date]", data.expedition_date)
    if(data?.dispatching_agency) formData.append("partner[partner_document_attributes][dispatching_agency]", data.dispatching_agency)
    if(data?.mother_name) formData.append("partner[partner_document_attributes][mother_name]", data.mother_name)
    
    return formData
}