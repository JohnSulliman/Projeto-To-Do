import axios from 'axios';

const baseUrl = 'https://bluetodo20211015130137.azurewebsites.net/api'

export const register = async(userName:string, email:string, passwordHash:string) => {
    return await axios.post(baseUrl + '/Auth/Register', {
        userName,
        email,
        passwordHash
    });
}

export const login = async (email:string, passwordHash:string) => {
    return await axios.post(baseUrl + "/Auth/Token", {
      email,
      passwordHash,
    });
};

export const getUser = async () => {
    const response = await axios({
      method: "get",
      url: baseUrl + "/Users",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  
    return response.data;
}

export const postTasks = async (taskName:string, taskDate:string, priority:number) => {
  const response = await axios({
    method: "post",
    url: baseUrl + "/Todo",
    data: {
      taskName,
      taskDate,
      priority
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  return response.data;
}

export const getTasks = async () => {
  
}