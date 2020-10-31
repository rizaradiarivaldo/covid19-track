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
  }, [dispatch])

  useEffect(() => {
    dispatch(GET_ALL_DATA_COVID(countries))
  }, [countries, dispatch])

    const handleChange = e => {
      setCountries(e.target.value)
      history.push(`?country=${e.target.value}`)
    }

  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col-lg-12">
          <Image src={imageHeader} alt="imageHeader" width='400px' fluid />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3 col-11">
              <div>Terakhir Update : {dataCovid.lastUpdate ? dataCovid.lastUpdate.slice(0,10) : ''}</div>
            {
              data.isLoading ?
                (
                  <div>Loading...</div>
                )
                :
                (
                  <div>
                    <select className="form-control" onClick={handleChange} required>
                      <option value={'Global'}>Negara</option>
                      {
                        data.listCountries.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}</option>
                        ))
                      }
                    </select>
                    <p>{countries}</p>
                  </div>
                )
              }

            </div>
          </div>
          <Cards data={dataCovid}/>
        </div>
      </div>
    </div>
  )
}

export default Home