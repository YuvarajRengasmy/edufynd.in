import API from "./api"
import { StudnetEnquiry } from "./endpoints"

export const saveStudnetEnquiry = (data) => {
    return API.post(`${StudnetEnquiry}`, data)
}