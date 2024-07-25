import React from 'react'
import '../styles/info.css'

const data = [
    {
        title: "Overview on HCL and IT Industry & Q&A Session",
        content: "Get a comprehensive overview of HCL and its role within the IT industry. Understand HCL’s operations, industry standards, and how they align with current market trends. Participate in interactive Q&A sessions where you can ask questions and get answers from industry experts in real time.",
      
    },
    {
        img:"https://img.freepik.com/free-vector/peace-mind-concept-illustration_114360-7308.jpg?t=st=1709727345~exp=1709730945~hmac=58d094db3b0c5a0cfc0e14ada42a938e78fd799606741ab94a1b67230d1a61f3&w=740"
    },
    {
        title: "Industry Expectations for IT Freshers & HR Hiring Process",
        content: "Learn about the current expectations and skills required by the IT industry for fresh graduates. Gain insights into what employers are looking for and how to prepare yourself for a successful career. Understand the HR hiring process, including what HR professionals look for during interviews and how you can stand out in the hiring process." ,
      
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
