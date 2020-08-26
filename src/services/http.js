import axios from "axios";
import { server } from "~/commons";

export const get = async (endpoint = "") => {
  try {
    const response = await axios.get(`${server}/${endpoint}`);
    return successObject(response);
  } catch (error) {
    return errorObject(error);
  }
};

export const post = async (endpoint = "", body = {}) => {
  try {
    const response = await axios.post(`${server}/${endpoint}`, body);
    return successObject(response);
  } catch (error) {
    return errorObject(error);
  }
};

export const postFormData = async (endpoint = "", body = {}) => {
  try {
    const response = await axios.post(`${server}/${endpoint}`, body, { headers: {'Content-Type': 'multipart/form-data'} });
    return successObject(response);
  } catch (error) {
    return errorObject(error);
  }
};

export const put = async (endpoint = "", body = {}) => {
  try {
    const response = await axios.put(`${server}/${endpoint}`, body);
    return successObject(response);
  } catch (error) {
    return errorObject(error);
  }
};

export const putFormData = async (endpoint = "", body = {}) => {
  try {
    const response = await axios.put(`${server}/${endpoint}`, body, { headers: {'Content-Type': 'multipart/form-data'} });
    return successObject(response);
  } catch (error) {
    return errorObject(error);
  }
};

export const destroy = async (endpoint = "", body) => {
  try {
    const response = await axios.delete(`${server}/${endpoint}`, body);
    return successObject(response);
  } catch (error) {
    return errorObject(error);
  }
};

const successObject = (response) => {
  return {
    success: true,
    status: response.status,
    data: response.data,
  };
};

const errorObject = (error) => {
  return {
    success: false,
    status: error.request.status,
    errors: errorsResponse(error),
  };
};

const errorsResponse = (error) => {
  try {
    const response = JSON.parse(error.request.response);
    return response.errors;
  } catch {
    return { error: "undefinied" };
  }
};

export const setDefaultHeaders = (token) => {
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete axios.defaults.headers.common["Authorization"]
    }
}