import API from "./api"
import { Contact } from "./endpoints"

export const saveGeneralEnquiry = (data) => {
    return API.post(`${Contact}/public`, data)
}