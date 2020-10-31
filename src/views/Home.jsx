import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import imageHeader from '../assets/img/head3.png'
import { Image } from 'react-bootstrap'




import Cards from '../components/Card'

import { GET_ALL_COUNTRIES, GET_ALL_DATA_COVID} from '../redux/actions/countries'




const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()

 

  const data = useSelector((state) => state.countries)
  const [countries, setCountries] = useState()

  const dataCovid = {
    confirmed: data.confirmed.value,
    deaths: data.deaths.value,
    recovered: data.recovered.value,
    lastUpdate:  data.lastUpdate
  } 

  useEffect(() => {
    dispatch(GET_ALL_COUNTRIES())
    history.push(`?country=${'Global'}`)
  }, [dispatch, history, history.push])

  useEffect(() => {
    dispatch(GET_ALL_DATA_COVID(countries))
  }, [countries, dispatch])

    const handleChange = e => {
      setCountries(e.target.value)
      history.push(`?country=${e.target.value}`)
    }

    const dateNow = new Date(dataCovid.lastUpdate ? dataCovid.lastUpdate.slice(0,10) : Date.now())
    const yearNow = dateNow.getFullYear()
  
    let month = new Array([]);
    month[0] = "Januari";
    month[1] = "Februari";
    month[2] = "Maret";
    month[3] = "April";
    month[4] = "Mei";
    month[5] = "Juni";
    month[6] = "Juli";
    month[7] = "Agustus";
    month[8] = "September";
    month[9] = "Oktober";
    month[10] = "November";
    month[11] = "Desember";
    const monthNow = month[dateNow.getMonth()];
    const dayNow = dateNow.getDay()
  
    const lastUpdate = `${dayNow} ${monthNow} ${yearNow}`

  return (
    <div className="container-fluid">
      <div className="row text-center" style={{marginBottom:'70px'}}>
        <div className="col-lg-12">
          <Image src={imageHeader} alt="imageHeader" width='350px' fluid />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-11">
              <p>Terakhir Update : { lastUpdate }</p>
              <div className="mb-4 mt-3">
                <select onChange={handleChange} className="form-control">
                  <option value="Global">Global</option>
                    {
                    data.listCountries.map((item, index) => (
                    <option key={index} value={item.name ? item.name : 'Global'}>{item.name}</option>
                    ))
                    }
                </select>
              </div>
                {                  
                  data.isLoading ? 
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div> 
                  :
                  ''
                }
            </div>
          </div>
          <Cards data={dataCovid}/>
        </div>
      </div>
      <div className="fixed-bottom text-center text-white-50" style={{padding: '13px',backgroundColor: '#7F90FC'}}>Copyright 2020 | Riza Radia Rivaldo</div>
    </div>
  )
}

export default Home