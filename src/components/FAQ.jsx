import React from 'react'
import Registration from './Registration'

const allFaqs = {
  "faq": [
    {
        "title": "quest1",
        "quest": "How do I know whether this program is right for me? ",
        "ans":  "After reviewing the information on the program landing page, we recommend you	 submit the short form above to gain access to the program. If you still have questions on whether this program is a good fit for you, please email admin@be-practical.com, and a dedicated program advisor will follow up with you very shortly. "
    },
    {
        "title": "quest2",
        "quest": "Are there any prerequisites for this program? ",
        "ans":  "Some programs do have prerequisites, While there are no strict prerequisites, participants should have basic knowledge of cloud computing concepts and familiarity with AWS services.  "
    },
    {
        "title": "quest3",
        "quest": "What are the requirements to earn a certificate?  ",
        "ans":  "This is a graded program. You must complete a combination of individual assignments, online test, and a final project. Each component carries a certain number of points, and a cumulative score of 60% percent is required to pass and obtain your professional certificate. "
    },
    {
        "title": "quest4",
        "quest": "Can I download the program videos?",
        "ans":  "You can download video transcripts, assignment templates, readings, at the end of the workshop. However, the video lectures are only available for streaming and require an internet connection"
    },
    {
        "title": "quest5",
        "quest": "What type of certificate will I receive?",
        "ans":  "The digital certificate will be sent after the program, once grading is complete. "
    },
    {
        "title": "quest6",
        "quest": "Can I get the hard copy of the certificate?",
        "ans":  "No, only verified digital certificates will be issued upon successful completion. This allows you to share your credentials on social platforms such as LinkedIn, Facebook, and Twitter."
    },
    {
      "title": "quest7",
      "quest": "Do I receive alumni status after completing this program?",
      "ans":  "No, there is no alumni status granted for this program. In some cases, there are credits that count toward a higher level of certification. We provide alumni status for those who joined for full time program.  "
  }
]
}

function FAQ() {
  return (
    <section id='faq' className='p-3 p-lg-5 bg-light'>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
                <h1 className="text-center text-dark mb-5">
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
                            <div className="accordion-item bg-transparent mt-2 mb-2" key={index}>
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
