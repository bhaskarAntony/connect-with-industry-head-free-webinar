import React, { useEffect } from 'react'
import '../styles/highlights.css'
import Aos from 'aos'

const highlights = [
    {
        image:"https://cdn-icons-png.flaticon.com/128/10789/10789560.png",
        title:"Actionable Knowledge",
        content:"Acquire valuable, hands-on insights to launch your  career in AWS  effectively"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/7257/7257539.png",
        title:"Q&A Sessions",
        content:"Get your burning questions answered by industry experts in real time"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/9464/9464456.png",
        title:"Industry Demand",
        content:"Learn from experts about the current job market's robust demand for careers in AWS "
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/11060/11060995.png",
        title:"Flexible Learning",
        content:"Attend our Bootcamp conveniently from your own home"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/3660/3660781.png",
        title:"Engage and Connect",
        content:"Interact with seasoned industry professionals and fellow enthusiasts for an interactive learning experience"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/3387/3387740.png",
        title:"E-Certificate and study Material",
        content:"We offer E-certificates upon completion of the Bootcamp and provide study materials"
    },
]

function Highlights() {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <section className='highlights text-center mt-5' id='highlight'>
        <h1 className="heading text-dark mb-5" data-aos="zoom-out-up">What is 3 Days<span className='text-main'> Free Trial</span></h1>
        <div className="container mt-3">
            <div className="d-flex flex-column h-container">
            {
                highlights.map((item, index)=>(
                    <div className={`highlight-card h-100 d-flex align-items-center ${index%2? 'align-self-end h-card-right':'align-self-start h-card-left'}`} data-aos="fade-up">
                            <div className="h-card-header text-center">
                                <img src={item.image} alt="" className="" />
                            </div>
                            <div className="h-card-body">
                                <h1 className="p-large-xl text-700"> <i class="bi bi-stars  mx-2"></i>{item.title}</h1>
                                <p className="p-large">{item.content}</p>
                            </div>
                    </div>
                ))
            }
            </div>
        </div>
        <div className="text-center mt-5">
        <a href="#register" className='text-decoration-none'><button className="main-btn px-5 text-700">Register Now for <big>Free</big></button></a>
        </div>
    </section>
  )
}

export default Highlights
