import API from "./api"
import {University } from "./endpoints"


export const getallUniversity = () => {
    return API.get(`${University}`)
}
export const getFilterUniversity = (data) => {
  return API.put(`${University}/getFilterUniversity`, data);
};
export const getSingleUniversity = (data) => {
    return API.get(`${University}/getSingleUniversity`, { params: { _id: data } });
  };
 


