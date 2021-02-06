import React from 'react'
import { NavBar } from '../components'
import '../style/css/style.css'

export default function HomePage(props) {
  return (
    <div>
      <NavBar/>
      <div className="d-flex">
        <div class="sidenav p-3">
          <a href="#"><i class="fas fa-home" style={{ marginRight: '10px' }}></i>Beranda</a>
          <a href="#"><i class="fas fa-users" style={{ marginRight: '10px' }}></i>Personnel List</a>
          <a href="#"><i class="far fa-calendar-alt" style={{ marginRight: '10px' }}></i>Daily Attendance</a>
        </div>
        <div style={{ backgroundColor: '#E9ECEF', color: '#6B757D', width: '80%'}} class="main p-3">
          <div className="container mb-3">
            <div style={{ backgroundColor: 'white' }} className="p-3 mb-5 mt-4 d-flex justify-content-between">
              <div>
                <h3 style={{ color: '#33BDBE' }}><b>PERSONNEL LIST</b></h3>
                <h5 className="mt-0">List of all Personnels</h5>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <div className="input-group mx-2" style={{ width: '50%'}}>
                  <span className="input-group-text" id="inputGroup-sizing-default"><i style={{ color: "#33BDBE" }} className="fas fa-search"></i></span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Find Personnel"></input>
                </div>
                <button style={{ backgroundColor: '#33BDBE', color: 'white' }} className="btn"><small><b>ADD PERSONNEL</b></small><i style={{ marginLeft: '10px' }} class="fas fa-plus"></i></button>
              </div>
            </div>
            <div>
              <div className="col-3 p-2" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                <div style={{ fontSize: '15px' }} className="d-flex justify-content-between align-items-center border-bottom">
                  <span>
                    Personnel ID: <span style={{ color: '#33BDBE' }}>12345</span>
                  </span>
                    <i style={{ fontSize: '15px'}} class="fas fa-ellipsis-h"></i>
                </div>
                <div className="my-2 d-flex justify-content-center">
                  <img style={{ borderRadius: '50%', width: '60%' }} src="https://randomuser.me/api/portraits/women/9.jpg" alt="foto"></img>
                </div>
                <div className="p-2">
                  <h6 style={{ fontSize: '15px'}} className="mb-0"><b>Name</b></h6>
                  <h6 className="mt-0">Abrar Na'im</h6>
                  <h6 style={{ fontSize: '15px'}} className="mb-0"><b>Telephone</b></h6>
                  <h6 className="mt-0">+6282218328778</h6>
                  <h6 style={{ fontSize: '15px'}} className="mb-0"><b>Brithday</b></h6>
                  <h6 className="mt-0">15-juli-1997</h6>
                  <h6 style={{ fontSize: '15px'}} className="mb-0"><b>Email</b></h6>
                  <h6 className="mt-0">aabrarnaim@gmail.com</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center my-2">
                <button className="btn btnbwh"><i class="fas fa-chevron-left mx-2"></i>Previous Page</button>
                <button className="btn btnbwh">Next Page<i class="fas fa-chevron-right mx-2"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}