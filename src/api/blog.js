import API from "./api"
import {Blog } from "./endpoints"


export const getallBlog = () => {
    return API.get(`${Blog}/publicBlog`)
}
export const getFilterBlog = (data) => {
  return API.put(`${Blog}/publicGetFilterBlog`, data);
};
export const getSingleBlog = (data) => {
    return API.get(`${Blog}/publicGetSingleBlog`, { params: { _id: data } });
  };
 
 

