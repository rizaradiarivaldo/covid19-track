import React from 'react'

const Cards = (props) => {
  return(
    <>
    {/* Responsive Dekstop */}
    <div className="d-sm-block d-none">
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center align-items-center">
          <div className="card text-left" style={{ width: '15rem'}}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Kasus</h6>
              <h5 className="">{props.data.confirmed}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka kasus COVID - 19</h5>
            </div>
            <div className="card-footer bg-primary"></div>
          </div>
          <div className="card text-left ml-5" style={{ width: '15rem'}}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Sembuh</h6>
              <h5 className="">{props.data.recovered}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka sembuh COVID - 19</h5>
            </div>
            <div className="card-footer bg-danger"></div>
          </div>
          <div className="card text-left ml-5" style={{ width: '15rem'}}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Meninggal</h6>
              <h5 className="">{props.data.deaths}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka meninggal COVID - 19</h5>
            </div>
            <div className="card-footer bg-warning"></div>
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
              <h5 className="">{props.data.confirmed}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka kasus COVID - 19</h5>
            </div>
            <div className="card-footer bg-primary"></div>
          </div>
        </div>
        <div className="col-lg-12 d-flex justify-content-center align-items-center mt-3">
          <div className="card text-left" style={{ width: '90%'}}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Sembuh</h6>
              <h5 className="">{props.data.recovered}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka sembuh COVID - 19</h5>
            </div>
            <div className="card-footer bg-danger"></div>
          </div>
        </div>
        <div className="col-lg-12 d-flex justify-content-center align-items-center mt-3 mb-3">
          <div className="card text-left" style={{ width: '90%'}}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Meninggal</h6>
              <h5 className="">{props.data.deaths}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Orang</h6>
              <h5 className="card-text">Jumlah angka meninggal COVID - 19</h5>
            </div>
            <div className="card-footer bg-warning"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards