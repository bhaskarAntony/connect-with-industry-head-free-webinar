import React, { useEffect } from 'react'
import '../styles/works.css'
import works from '../data/content.json'
import Aos from 'aos'

function Works() {
  useEffect(()=>{
    Aos.init()
},[])
  return (
    <section className='works' id='why'>
    
        <div className="container">
            {/* <h1 className=" text-center text-white mb-5">How Our AWS Bootcamp Works Over <span className="text-main">6 hours</span></h1> */}
            <div className="work-text-container p-3 p-lg-5 "  data-aos="zoom-out-right">
            <div className="badge-works">
        <span className="fs-6 text-white">in 3 days Free trial</span>
      </div>
            <h1 className="heading-subtitle text-main mb-3"> <i class="bi bi-star text-main mx-2"></i>in 3 days Free Trial</h1>
            {
                works.working.map((item)=>(
                    <p className='p-large'><i class="bi bi-check2 text-main"></i> {item.works}</p>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default Works
