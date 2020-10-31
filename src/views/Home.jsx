import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import imageHeader from '../assets/img/head3.png'
import { Image } from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Cards from '../components/Card'

import { GET_ALL_COUNTRIES, GET_ALL_DATA_COVID} from '../redux/actions/countries'

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const data = useSelector((state) => state.countries)
  const classes = useStyles();
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
            <div className="col-lg-12 col-11">
              <p>Terakhir Update : {dataCovid.lastUpdate ? dataCovid.lastUpdate.slice(0,10) : ''}</p>
              <div className="mb-4 mt-3">
                <FormControl className="col-lg-3 col-sm-4 col-11">
                  <InputLabel shrink id="countries-label">
                    Negara
                  </InputLabel>
                  <Select
                    labelId="countries-label"
                    id="demo-simple-select-placeholder-label"
                    value={countries}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                  >
                    <MenuItem value="Global">
                      Global
                    </MenuItem>
                    {
                    data.listCountries.map((item, index) => (
                    <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                    ))
                  }
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <Cards data={dataCovid}/>
        </div>
      </div>
    </div>
  )
}

export default Home