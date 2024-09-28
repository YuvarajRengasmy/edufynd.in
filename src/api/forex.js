import API from "./api"
import { Forex } from "./endpoints"

export const saveForexEnquiry = (data) => {
    return API.post(`${Forex}/public`, data)
}