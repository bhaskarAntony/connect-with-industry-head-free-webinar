import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <header className='bg-dark'>
      {/* <marquee behavior="scroll" direction="right" scrollamount="10" className="m-0 bg-main">
        <div className="free-container d-flex gap-5 fs-5 m-0 fw-bold  text-white">
          <span>Free AWS  Bootcamp</span>
          <span>Free AWS  Bootcamp</span>
          <span>Free AWS  Bootcamp</span>
          <span>Free AWS  Bootcamp</span>
          <span>Free AWS  Bootcamp</span>
          <span>Free AWS  Bootcamp</span>
          <span>Free AWS  Bootcamp</span>
          <span>Free AWS  Bootcamp</span>
          <span>Free AWS  Bootcamp</span>
          <span>Free AWS  Bootcamp</span>
          <span>Free AWS  Bootcamp</span>
        </div>
      </marquee> */}
    <nav className="navbar navbar-expand-lg navbar-dark  p-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#home"><img src="https://res.cloudinary.com/dfogisedz/image/upload/v1696400519/webinar/wuxjubwtp8csymfqv28t.png" alt="" /> </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <a className="nav-link mx-2 active" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#enroll">Enroll</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link mx-2" href="#why">why this?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#certificate">Certificate</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#highlight">Highlights</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#faq">FAQ's</a>
          </li>
          <li className="nav-item dropdown">
            <a className=" mx-2 main-btn px-3 py-2 text-decoration-none" href="#register">
              Register Now <del className='text-danger'>&#8377;1000</del> Free
            </a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    </header>
  )
}

export default Header
