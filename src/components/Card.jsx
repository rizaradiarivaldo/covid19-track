import React from 'react'

const Cards = (props) => {

  const confirmed = props.data.confirmed?props.data.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'):0
  const recovered = props.data.recovered?props.data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'):0
  const deaths = props.data.deaths?props.data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'):0
  return(
    <>
    {/* Responsive Dekstop */}
    <div className="d-sm-block d-none">
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center align-items-center">
          <div className="card text-left" style={{ width: '15rem'}}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Kasus</h6>
              <h5 className="">{confirmed}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka kasus COVID - 19</h5>
            </div>
            <div className="card-footer" style={{backgroundColor: '#7F90FC'}}></div>
          </div>
          <div className="card text-left ml-5" style={{ width: '15rem'}}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Sembuh</h6>
              <h5 className="">{recovered}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka sembuh COVID - 19</h5>
            </div>
            <div className="card-footer" style={{backgroundColor: '#90FE99'}}></div>
          </div>
          <div className="card text-left ml-5" style={{ width: '15rem'}}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Meninggal</h6>
              <h5 className="">{deaths}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka meninggal COVID - 19</h5>
            </div>
            <div className="card-footer" style={{backgroundColor: '#FE7F89'}}></div>
          </div>
        </div>
      </div>
    </div>
    {/* Responsive HP */}
    <div className="d-sm-none d-block">
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center align-items-center mt-3">
          <div className="card text-left" style={{ width: '90%'}}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Kasus</h6>
              <h5 className="">{confirmed}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka kasus COVID - 19</h5>
            </div>
            <div className="card-footer" style={{backgroundColor: '#7F90FC'}}></div>
          </div>
        </div>
        <div className="col-lg-12 d-flex justify-content-center align-items-center mt-3">
          <div className="card text-left" style={{ width: '90%'}}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Sembuh</h6>
              <h5 className="">{recovered}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka sembuh COVID - 19</h5>
            </div>
            <div className="card-footer" style={{backgroundColor: '#90FE99'}}></div>
          </div>
        </div>
        <div className="col-lg-12 d-flex justify-content-center align-items-center mt-3 mb-3">
          <div className="card text-left" style={{ width: '90%'}}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Meninggal</h6>
              <h5 className="">{deaths}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka meninggal COVID - 19</h5>
            </div>
            <div className="card-footer" style={{backgroundColor: '#FE7F89'}}></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards