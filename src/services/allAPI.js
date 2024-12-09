import commonAPI from "./commonAPI"
import SERVER_URL from './serverURL'

//registerAPI called by Auth
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, reqBody)
}
//loginAPI called by Auth
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/login`, reqBody)
}
//addProfileAPI-
export const  addProfileAPI =  async(reqBody,reqHeader)=>{
    return await commonAPI("POST", `${SERVER_URL}/add-profile`, reqBody,reqHeader)
}
//getHomeProfilesAPI
export const getHomeProfilesAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/home-Profiles`,{} )
}
//allProfilesAPI
export const allProfilesAPI = async (searchKey,reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/all-Profiles?search=${searchKey}`,{},reqHeader )
}
//userDetaulsAPI
export const userDetailsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-Profile`,{},reqHeader)
}
//userProfileUpdatingAPI
export const userProfileUpdatingAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)
}
//editProfileApi
export const editProfileApi = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/profile/${id}/edit`,reqBody,reqHeader)
}
//deleteProfileAPI
export const deleteProfileAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/profile/${id}/delete`,{},reqHeader)
}

