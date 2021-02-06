import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../store/actions'
import { NavBar, Loading } from '../components'
import { Toast } from '../config/swal'
import '../style/css/style.css'

export default function HomePage(props) {
  const dispatch = useDispatch()
  const { allData, loading } = useSelector(state => state)
  const [dataShow, setDataShow] = useState([])
  const [stepPrevious, setStepPrevious] = useState(0)
  const [stepNext, setStepNext] = useState(4)
  const [stName, setStName] = useState('')

  useEffect(() => {
    dispatch(getAllData())
    filterShowData(allData, 'PreviAndNext')
    // setDataShow(allData.slice(stepPrevious,stepNext))
  }, [dispatch])

  function handlePrevious() {
    if((stepPrevious - 4) < 0) {
      Toast.fire({
        icon: 'error',
        title: 'Sorry...'
      })
    } else {
      setStepNext(stepNext - 4)
      setStepPrevious(stepPrevious - 4)
      filterShowData(allData, 'PreviAndNext')
    }
  }

  function handlenext() {
    if((stepNext + 4) > allData.length) {
      Toast.fire({
        icon: 'error',
        title: 'Sorry...'
      })
    } else {
      setStepNext(stepNext + 4)
      setStepPrevious(stepPrevious + 4)
      filterShowData(allData, 'PreviAndNext')
    }
  }

  function handleChange(e) {
    let value = e.target.value
    setStName(value)
  }

  function handlegetName() {
    // filterShowData(allData, 'stName')
    setDataShow(allData.filter(show => show.name.first === stName))
    setStName('')
  }

  function filterShowData(arr, category) {
    if(category === 'PreviAndNext') {
      setDataShow(arr.slice(stepPrevious,stepNext))
      // console.log(arr.slice(stepPrevious,stepNext), stepPrevious, stepNext, dataShow, '<<<<<')
    } else if(category === 'stName') {
      setDataShow(arr.filter(show => show.name.first === stName))
    }
    dispatch(getAllData())
  }


  if(loading) {
    return <Loading/>
  }
  
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
        {/* <p>{JSON.stringify(allData)}</p> */}
          <div className="container mb-3">
            <div style={{ backgroundColor: 'white' }} className="p-3 mb-5 mt-4 d-flex justify-content-between">
              <div>
                <h3 style={{ color: '#33BDBE' }}><b>PERSONNEL LIST</b></h3>
                <h5 className="mt-0">List of all Personnels</h5>
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <div className="input-group mx-2" style={{ width: '50%'}}>
                  <span className="input-group-text" id="inputGroup-sizing-default"><i style={{ color: "#33BDBE" }} className="fas fa-search"></i></span>
                  <input value={stName} name="name" onChange={(e) => handleChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Find Personnel"></input>
                </div>
                <button onClick={() => handlegetName()} style={{ backgroundColor: '#33BDBE', color: 'white' }} className="btn"><small><b>ADD PERSONNEL</b></small><i style={{ marginLeft: '10px' }} class="fas fa-plus"></i></button>
              </div>
            </div>
            <div className="d-flex">
              <div className="row">
                {dataShow.map((personnelData, i) => (
                  <div key={i} className="col-3">
                    <div className="my-2 p-2" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                      <div style={{ fontSize: '15px' }} className="d-flex justify-content-between align-items-center border-bottom">
                        <span>
                          Personnel ID: <span style={{ color: '#33BDBE' }}>{personnelData.id.value}</span>
                        </span>
                          <i style={{ fontSize: '15px'}} class="fas fa-ellipsis-h"></i>
                      </div>
                      <div className="my-2 d-flex justify-content-center">
                        <img style={{ borderRadius: '50%', width: '60%' }} src={personnelData.picture.large} alt="foto"></img>
                      </div>
                      <div className="p-2">
                        <h6 style={{ fontSize: '15px'}} className="mb-0"><b>Name</b></h6>
                        <h6 className="mt-0">{personnelData.name.title} {personnelData.name.first} {personnelData.name.last}</h6>
                        <h6 style={{ fontSize: '15px'}} className="mb-0"><b>Telephone</b></h6>
                        <h6 className="mt-0">{personnelData.phone}</h6>
                        <h6 style={{ fontSize: '15px'}} className="mb-0"><b>Brithday</b></h6>
                        <h6 className="mt-0">{(personnelData.dob.date.toString()).slice(0, 10)}</h6>
                        <h6 style={{ fontSize: '15px'}} className="mb-0"><b>Email</b></h6>
                        <h6 className="mt-0">{personnelData.email}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center my-2">
                <button onClick={() => handlePrevious()} className="btn btnbwh"><i class="fas fa-chevron-left mx-2"></i>Previous Page</button>
                <button onClick={() => handlenext()} className="btn btnbwh">Next Page<i class="fas fa-chevron-right mx-2"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}