import React from 'react'

export default function NavBar(props) {

  return (
    <>
      <nav className="navbar">
        <div className="p-2 mx-3">
          <img style={{ height: '50px', cursor: 'pointer' }} src="./logoGadjianNavbar.png" alt="logo"></img>
        </div>
        <div className="d-flex justify-content-end p-3 mx-3">
            <div style={{ fontSize: '20px'}} className="mx-3 d-flex align-items-center">Hallo, <span className="mx-2" style={{ color: '#33BDBE'}}>Gadjian User</span></div>
            <div>
              <img style={{ borderRadius: '50px', cursor: 'pointer' }} src={'https://randomuser.me/api/portraits/thumb/women/9.jpg'} alt="pic User"></img>
            </div>
        </div>
      </nav>
    </>
  )
}