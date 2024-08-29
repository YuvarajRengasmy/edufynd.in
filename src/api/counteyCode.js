import API from "./api"
import {DialCode} from "./endpoints"


export const getallCode = () => {
    return API.get(`${DialCode}/publicGetAllDialCode`)
}


  export const getFilterSource = (data) => {
    return API.put(`${DialCode}/publicGetFilterDialCode`, data);
  };