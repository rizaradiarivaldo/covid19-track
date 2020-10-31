import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col-lg-12">
          <h1>About</h1>
          <Link to='/'>
              <button className="btn btn-primary">
                Home
              </button>
          </Link>
        </div>
      </div>
  </div>
  )
}

export default About