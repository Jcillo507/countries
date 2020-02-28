import axios from 'axios'

const url = `https://restcountries.eu/rest/v2/all`;

export const allCountryData = async ()=>{
try {
  const allCountryData= await axios.get(url)
  return allCountryData.data
} catch (error) {
  throw error
}
}