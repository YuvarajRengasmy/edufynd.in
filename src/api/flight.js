import API from "./api"
import { Flight } from "./endpoints"

export const saveFlightEnquiry = (data) => {
    return API.post(`${Flight}/public`, data)
}