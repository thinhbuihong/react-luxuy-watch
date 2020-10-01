import Axios from "axios";
const { API_ULR } = require("../constants/config")

const callApi = (endpoint, method="GET", data) => async ()=>{
  const res = await Axios({
    url:API_ULR+endpoint,
    method,
    data,
  })
  return res ;
}

export default callApi;