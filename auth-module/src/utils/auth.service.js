import axios from 'axios'
import { baseUrl } from './constants'

export const handleLoginService = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}auth/signin`, data)
    return response;
  } catch (error) {
    console.error(error.message);
    throw error.response.data
  }
}

export const handleSignupService = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}auth/signup`, data)
    return response;
  } catch (error) {
    console.error(error.message);
    throw error.response.data
  }
}
