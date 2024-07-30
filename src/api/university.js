import API from "./api"
import {University } from "./endpoints"


export const getallUniversity = () => {
    return API.get(`${University}/public`)
}
export const getFilterUniversity = (data) => {
  return API.put(`${University}/publicGetFilterUniversity`, data);
};
export const getSingleUniversity = (data) => {
    return API.get(`${University}/publicGetSingleUniversity`, { params: { _id: data } });
  };
 


