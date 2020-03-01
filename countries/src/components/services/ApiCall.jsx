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


export const specificCountry = async (name)=>{
  try {
    const countryData = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
    return countryData.data
  } catch (error) {
    throw error
  }
}