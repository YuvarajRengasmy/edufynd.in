import API from "./api"
import {Program } from "./endpoints"


export const getallProgram = () => {
    return API.get(`${Program}/public`)
}
export const getFilterProgram = (data) => {
  return API.put(`${Program}/publicGetUniversityFilterProgram`, data);
};
export const getSingleProgram = (data) => {
    return API.get(`${Program}/publicGetSingleProgram`, { params: { _id: data } });
  };

  export const getAllProgramForWeb = (data) => {
    return API.get(`${Program}/publicGetAllProgramForWeb`, data);
  };
  export const getUniversityProgram = (data) => {
    return API.get(`${Program}/programDetails`, data);
  };
  

  export const getProgramUniversity = (data) => {
    return API.get(`${Program}/publicGetProgramUniversity`, { params: {universityId: data } });
  };