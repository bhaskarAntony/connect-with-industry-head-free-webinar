import React from 'react'
import Registration from './Registration'

const allFaqs = {
  "faq": [
    {
        "title": "quest1",
        "quest": "What is the focus of the webinar?",
        "ans": "The webinar focuses on providing an overview of HCL, ways of working in the IT industry, industry expectations from freshers, and the HR hiring process."
    },
    {
        "title": "quest2",
        "quest": "Who is the speaker?",
        "ans": "Mr. Gururaj Godakindi, Global Program Manager at HCL Technologies."
    },
    {
        "title": "quest3",
        "quest": "How can I join the webinar?",
        "ans": "You can join the webinar by registering on our website and using the provided link to attend on the specified date and time."
    },
    {
        "title": "quest4",
        "quest": "Will there be an opportunity to ask questions?",
        "ans": "Yes, there will be a Q & A session where you can clear your doubts with the industry expert."
    },
    {
        "title": "quest5",
        "quest": "Is there any cost to attend the webinar?",
        "ans": "No, the webinar is free of charge."
    },
    {
        "title": "quest6",
        "quest": "What topics will be covered during the webinar?",
        "ans": "The webinar will cover an overview of HCL, ways of working in the IT industry, industry expectations from freshers, and the HR hiring process."
    },
    {
        "title": "quest7",
        "quest": "Are the webinars conducted online or in-person?",
        "ans": "Currently, the webinars are conducted online through virtual classrooms to ensure accessibility for participants from anywhere."
    },
    {
        "title": "quest8",
        "quest": "What happens after the webinar?",
        "ans": "After the webinar, you will have the opportunity to enroll in further courses if you wish to continue your learning journey with us. Our enrollment team will provide you with further information on how to proceed."
    }
  ]
}


function FAQ() {
  return (
    <section id='faq' className='p-3 p-lg-5 bg-light'>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
                <h1 className="text-center text-dark mb-5" data-aos="zoom-out-up">
                    Frequently Asked <span className="text-main">Questions</span>
                </h1>
            </div>
          </div>

          <div className="row mt-3 mb-3">
           <div className="col-12 col-md-12 col-lg-8">
           <div className="accordion accordion-flush" id='faq'>
                    {
                        allFaqs.faq.map((item,index) => {
                          return (
                            <div className="accordion-item bg-transparent mt-2 mb-2" key={index}  data-aos="zoom-out-right">
                              <div className="accordion-header ">
                                <div className="accordion-button collapsed text-dark  border-0 bg-main mb-1" data-bs-target={`#${item.title}`} data-bs-toggle="collapse">
                                    <h6 className="text-dark"> { item.quest } </h6>
                                </div>
                              </div>
      
                              <div id={item.title} className="accordion-collapse collapse bg-white" data-bs-parent="#faq">
                                  <div className="accordion border-0 body p-4">
                                  
                                      <p className="text-black text-justify"> { item.ans } </p>
                                  </div>
                              </div>
                          </div>
                          )
                        })
                    }
                </div>
           </div>
           <div className="col-12 col-md-12 col-lg-4">
            <Registration/>
           </div>
          </div>
        </div>
    </section>
  )
}

export default FAQ
