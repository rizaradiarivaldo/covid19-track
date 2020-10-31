import axios from "axios";

export const GET_ALL_COUNTRIES = (country) => {
  return{
    type: 'GET_ALL_COUNTRY',
    payload: new Promise((resolve, reject) => {
      // let url = `https://api.covid19api.com/summary`
      let url = `https://covid.mathdro.id/api/countries/`
      axios.get(url)
      .then((response) => {
        resolve(response.data)
      }).catch((err) => {
        console.log(err)
      });
    }),
  }
}

export const GET_ALL_DATA_COVID = (country) => {
  return{
    type: 'GET_DATA_COVID',
    payload: new Promise((resolve, reject) => {
      let setUrl = null
      if(!country || country==='Global'){
        setUrl = `https://covid19.mathdro.id/api`
      }else {
        setUrl = `https://covid.mathdro.id/api/countries/${country}`
      }
      axios.get(setUrl)
      .then((response) => {
        resolve(response.data)
      }).catch((err) => {
        console.log(err)
      });
    }),
  }
}