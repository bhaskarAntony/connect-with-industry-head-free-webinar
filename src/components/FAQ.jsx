import React from 'react'
import Registration from './Registration'

const allFaqs = {
  "faq": [
    {
        "title": "quest1",
        "quest": "What is the purpose of the 3-day free trial classes?",
        "ans":  "The 3-day free trial classes are designed to give participants a glimpse into our software training programs, allowing them to experience our teaching style, course content, and instructor expertise before committing to the full course"
    },
    {
        "title": "quest2",
        "quest": "How do I register for the free trial classes?",
        "ans":  "You can register for the free trial classes by filling out the registration form on our website or contacting our registration team directly."
    },
    {
        "title": "quest3",
        "quest": "Is there any cost associated with the trial classes?",
        "ans":  "No, the 3-day trial classes are completely free of charge. There are no hidden fees or obligations."
    },
    {
        "title": "quest4",
        "quest": "What topics will be covered during the trial period?",
        "ans":  "The trial classes will cover introductory topics in full-stack development, digital marketing, data science, and cloud computing/DevOps, giving participants a broad overview of each field."
    },
    {
        "title": "quest5",
        "quest": "Are the trial classes conducted online or in-person?",
        "ans":  "Currently, the trial classes are conducted online through virtual classrooms to ensure accessibility for participants from anywhere."
    },
    {
        "title": "quest6",
        "quest": "What are the requirements to participate in the trial classes?",
        "ans":  "There are no specific requirements to participate in the trial classes. However, having a basic understanding of computer operations and internet usage would be beneficial."
    },
    {
      "title": "quest7",
      "quest": "Will I receive a certificate after completing the trial classes?",
      "ans":  "As the trial classes are short introductory sessions, we do not provide certificates for completion. However, participants will receive a participation acknowledgment."
  },
  {
    "title": "quest8",
    "quest": "What happens after the trial period ends?",
    "ans":  "At the end of the trial period, you will have the option to enroll in the full course if you wish to continue your learning journey with us. Our enrollment team will provide you with further information on how to proceed."
},
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
