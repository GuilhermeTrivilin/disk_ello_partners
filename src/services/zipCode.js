import axios from "axios";

export const getAddress = async (zip_code) => {
    const response = await axios.post(`https://viacep.com.br/ws/${zip_code}/json/`);
    console.log(response)
    return response
}
