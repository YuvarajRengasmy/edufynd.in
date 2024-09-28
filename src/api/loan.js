import API from "./api"
import { Loan } from "./endpoints"

export const saveLoanEnquiry = (data) => {
    return API.post(`${Loan}/public`, data)
}
