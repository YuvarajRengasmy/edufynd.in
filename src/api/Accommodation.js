import API from "./api"
import { Accommodation } from "./endpoints"

export const saveAccommodationEnquiry = (data) => {
    return API.post(`${Accommodation}`, data)
}
