import axios from "axios";

export const getAddress = async (zip_code) => {
    const response = await axios.get(`https://viacep.com.br/ws/${zip_code}/json/`);
    if(response.status == 200) return response.data
}
