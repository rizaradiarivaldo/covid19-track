import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import imageHeader from '../assets/img/head3.png'
import { Image } from 'react-bootstrap'
import Cards from '../components/Card'
import { GET_ALL_COUNTRIES, GET_ALL_DATA_COVID } from '../redux/actions/countries'

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const data = useSelector((state) => state.countries)
  const [countries, setCountries] = useState()

  const dataCovid = {
    confirmed: data.confirmed.value,
    deaths: data.deaths.value,
    recovered: data.recovered.value,
    lastUpdate: data.lastUpdate
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

  const lastUpdate = dataCovid.lastUpdate !== null ? dataCovid.lastUpdate.slice(0, 10) : 'Loading...'
  const yearUpdated = lastUpdate !== 'Loading...' ? lastUpdate.slice(0, 4) : 'Loading...'
  const monthUpdated = lastUpdate !== 'Loading...' ? lastUpdate.slice(5, 7) : ''
  const dateUpdate = lastUpdate !== 'Loading...' ? lastUpdate.slice(8, 10) : ''

  let month = new Array([]);
  month[1] = "Januari";
  month[2] = "Februari";
  month[3] = "Maret";
  month[4] = "April";
  month[5] = "Mei";
  month[6] = "Juni";
  month[7] = "Juli";
  month[8] = "Agustus";
  month[9] = "September";
  month[10] = "Oktober";
  month[11] = "November";
  month[12] = "Desember";

  const dataUpdated = `${dateUpdate} ${monthUpdated!==''?month[monthUpdated]:''} ${yearUpdated}`

  return (
    <div className="container-fluid">
      <div className="row text-center" style={{ marginBottom: '70px' }}>
        <div className="col-lg-12">
          <Image src={imageHeader} alt="imageHeader" width='350px' fluid />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-11">
              <p>Terakhir Update : {dataUpdated}</p>
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
          <Cards data={dataCovid} />
        </div>
      </div>
      <div className="fixed-bottom text-center text-white-50" style={{ padding: '13px', backgroundColor: '#7F90FC' }}>Copyright 2020 | Riza Radia Rivaldo</div>
    </div>
  )
}

export default Home