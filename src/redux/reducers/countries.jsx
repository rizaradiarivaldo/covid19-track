const initialState = {
  listCountries:[],
  isLoading: false,
  isError: false,
  errMessage: null,
  confirmed: 0,
  recovered: 0,
  deaths: 0,
  lastUpdate: null
}

const countriesReducer = (state=initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COUNTRY_PENDING":
      return {...state, isLoading:true}
    case "GET_ALL_COUNTRY_FULFILLED":
      return {...state, isLoading:false, listCountries: action.payload.countries}
    case "GET_ALL_COUNTRY_REJECTED":
      return {...state, isLoading:false, isError: true, errMessage: 'Server error!'}

    case "GET_DATA_COVID_PENDING":
      return {...state, isLoading:true}
    case "GET_DATA_COVID_FULFILLED":
      return {...state, isLoading:false, confirmed: action.payload.confirmed, recovered:action.payload.recovered, deaths:action.payload.deaths, lastUpdate:action.payload.lastUpdate}
    case "GET_DATA_COVID_REJECTED":
      return {...state, isLoading:false, isError: true, errMessage: 'Server error!'}

    default:
      return state
  }
}

export default countriesReducer