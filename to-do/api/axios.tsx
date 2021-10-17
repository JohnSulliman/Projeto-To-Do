import axios from 'axios';

const baseUrl = 'https://bluetodo20211015130137.azurewebsites.net/api'

export const register = async(userName:string, email:string, passwordHash:string) => {
    return await axios.post(baseUrl + '/Auth/Register', {
        userName,
        email,
        passwordHash
    });
}

export const login = async (userName:string, passwordHash:string) => {
    return await axios.post(baseUrl + "/Auth/Token", {
      userName,
      passwordHash,
    });
 };