import api from "./axiosInstance"
export async function register() {

    const response = await api.get('/register')
    return response?.data
}

export async function getAllUsers(){

}

export async function userProfile(){
    
}