import API from "./api"
import { SuperAdmin } from "./endpoints"



export const getSuperAdminForSearch = (data) => {
    return API.get(`${SuperAdmin}/publicGetSuperAdminForSearch`, { params: { search: data } })
}


