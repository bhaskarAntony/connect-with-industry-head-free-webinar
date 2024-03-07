import React from 'react'
import '../styles/info.css'

const data = [
    {
        title:"Unlock Your Potential: Free Trial for Our Software Training",
        content:"Embark on a journey of skill enhancement with our free trial offer for software training. Before committing to the full program, experience the power of our training modules firsthand. Dive into interactive lessons, hands-on exercises, and expert guidance to elevate your proficiency. Start your learning adventure today and unlock your full potentia"
    },
    {
        img:"https://img.freepik.com/free-vector/peace-mind-concept-illustration_114360-7308.jpg?t=st=1709727345~exp=1709730945~hmac=58d094db3b0c5a0cfc0e14ada42a938e78fd799606741ab94a1b67230d1a61f3&w=740"
    },
    {
        title:"Experience Excellence: Try Our Software Training for Free trial",
        content:"Elevate your skills with our complimentary trial of software training. Dive into our comprehensive modules, designed to empower learners of all levels. From beginners to advanced users, explore the depth of our training resources and unleash your proficiency. Take the first step towards mastery today with our free trial offer!"
    }
]
function Info() {
  return (
    <div className='info-container p-3 container-fluid'>
        <div className="row justify-content-center align-items-center">
            {
                data.map((item,index)=>(
                    <div className="col-12 col-md-4" data-aos="zoom-out-up">
                        {
                            index==1?(
                                <img src={item.img} className='w-100'/>
                            ):(
                                <>
                                 <div className={`info-card ${index%2==0?'info-card-left ':'info-card-right'}`}>
                            <h1 className="fs-4 text-main">{item.title}</h1>
                            <p className="fs-6">{item.content}</p>
                        </div>
                                </>
                            )
                        }
                       
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Info
