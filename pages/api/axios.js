import axios from "axios"


export const api = axios.create({ 
  baseURL: 'https://siyaar.onrender.com'
})

export const getSiyar = async () => {
  const res = await api.get('/siayr');
  return res.data
}


console.log(getSiyar())