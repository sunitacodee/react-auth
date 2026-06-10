import api from "./axiosInstance"
export async function register(data) {

    const response = await api.post('/auth/register',data)
    return response?.data
}

export async function getAllUsers(){

}

export async function userProfile(){
    
}