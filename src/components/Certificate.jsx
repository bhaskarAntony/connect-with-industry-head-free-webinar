import React from 'react'
import certificate from '../images/badge.svg'

function Certificate() {
  return (
  <section className="bg-light overflow-hidden">
      <section className='container py-4 mt-5' id="certificate">
        <h1 className="text-center text-dark mb-5" data-aos="zoom-out-up">
        Get a certificate of completion on an <br /> Intensive Bootcamp from <span className="text-main">Be-practical</span>
                </h1>
        <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-6">
                <img src={certificate} alt="" className='w-100 cerificate border-0'data-aos="zoom-in-down" />
            </div>
            <div className="col-12 col-md-12 col-lg-6">
            <h1 className="p-large-xl text-900 text-main mb-3 mt-4" data-aos="zoom-in-right">
            Certificate of Participation:
                    </h1>
                <p className='text-dark p-large' data-aos="zoom-in-right">
                    
                This certificate is awarded in recognition of the participant's active engagement and dedication during the Free Trial. Throughout the trial, participants explored various topics, gaining valuable insight and laying the foundation for further learning and development.
                </p>
                <h1 className='p-large-xl text-900 text-main mb-3' data-aos="zoom-in-right"> 3 Days Free Trial Program:</h1>
                <p className="p-large text-dark" data-aos="zoom-in-right">
                The trial program spanned across 3 days, offering participants introductory sessions into a range of subjects. Participants had the opportunity to delve into different areas of interest, gaining exposure to key concepts and practical applications. This trial served as a platform for participants to discover new interests and potentials, fostering curiosity and setting the stage for continued learning and growth.
                </p>

                <h1 className='p-large-xl text-900 text-main mb-3' data-aos="zoom-in-right">Upon completion of the full-time course:</h1>
                <p className="p-large text-dark" data-aos="zoom-in-right">
                The trial program spanned across 3 days, offering participants introductory sessions into a range of subjects. Participants had the opportunity to delve into different areas of interest, gaining exposure to key concepts and practical applications. This trial served as a platform for participants to discover new interests and potentials, fostering curiosity and setting the stage for continued learning and growth.
                </p>
            </div>
        </div>
    </section>
  </section>
  )
}

export default Certificate
