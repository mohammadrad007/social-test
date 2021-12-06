import axios from "axios";
const baseUrl = "http://localhost:3030/socials";

//---------------Get Data ---------------

export const getList = async () => {
  const data = await axios
    .get(baseUrl)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return data;
};
//---------------Delete Item ---------------

export const deleteItem = async (Id: number) => {
  const data = await axios
    .delete(`${baseUrl}/${Id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return data;
};
//-------------------ADD Social-----------------------
export const addSocial = async (value: any) => {
  const data = await axios
    .post(baseUrl, { value })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
  return data;
};
//-------------------Edit Social-----------------------
export const editSocial = async (id: number, value: any) => {
  const data = await axios
    .put(`${baseUrl}/${id}`, { value })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
  return data;
};
