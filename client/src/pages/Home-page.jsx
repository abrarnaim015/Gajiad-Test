import React from 'react'

export default function HomePage(props) {
  return (
    <div>
      <div className="container text-center">
        <h1>Hallo...</h1>
        <button style={{ borderRadius: '20px' }} className="btn btn-outline-danger"><i class="fas fa-user-minus mx-2"></i>DELETE</button>
      </div>
    </div>
  )
}