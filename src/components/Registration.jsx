import React, { useEffect, useState } from 'react'
import '../styles/registration.css'
// import * as EmailValidator from 'node-email-validation'
import axios from 'axios';
import Email from '../template/email';
import UserEmail from '../template/confirmation';
import InfluenceEmail from '../template/influence';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const URL = "https://email-api-r1kd.onrender.com"
import success from '../images/success.gif'


const LoadingModal = () => {
    return (
      <div className="loading-modal">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  };
  const SpecialMessageModal = ({ show, onClose }) => {
    return (
      show && (
        <div className="modal border-0" style={{ display: show ? 'block' : 'none' }}>
          <div className="modal-dialog ">
            <div className="modal-content bg-white">
              {/* <div className="modal-header">
                <h5 className="modal-title text-success">Confirmation</h5>
                <button type="button" className="close btn" >
                  <span className='fs-1 text-white'>&times;</span>
                </button>
              </div> */}
              <div className="modal-body d-flex align-items-center justify-content-center flex-column gap-3">
                
              <img src= {success} alt="success" className='w-100 rounded-3'/>
              <p className='fs-4 text-dark mt-4'>
            Free webinar Registration is Success
              </p>
              <button className='btn bg-succss text-white p-3 w-100 d-block' style={{"backgroundColor":"#3bd382"}} onClick={onClose}>Close</button>
               </div>
            </div>
          </div>
        </div>
      )
    );
  };
  

function Registration() {
    const [influencers, setInfluencers] = useState([]);
    const [isCoupon, setIsCoupon] = useState(false)
    const [loading, setLoading] = useState(false)

    const [showModal, setShowModal] = useState(false);
    const [freeCoupon, setFreeCoupon] = useState(false)
    useEffect(() => {
      // Fetch influencer data from the API endpoint
      axios.get('https://emerald-sockeye-tux.cyclic.app/api/influencers/list')
        .then((response) => {
          setInfluencers(response.data);
          console.log("influencers", response.data);
        })
        .catch((error) => {
          console.error('Error fetching influencers:', error);
        });
    }, []);
    useEffect(()=>{
      axios.get('')
    },[])
    const [reg, setReg] = useState({
        StudentName: "",
        email: "",
        phonenumber: "",
        CollegeName: "",
        YearOfPassing:"",
      });
      if(reg.coupon===null){
        setIsCoupon(false)
      }
    
      const [err, setError] = useState(false);
      const [nameErr, setNameErr] = useState("");
      const [emailErr, setEmailErr] = useState("");
      const [mobileErr, setMobileErr] = useState("");
    
      const readValue = (e) => {
        const { name, value } = e.target;
        if (name === "StudentName") {
          validateName(value);
        }
        if (name === "email") {
          validateEmail(value);
        }
        if (name === "phonenumber") {
          validateMobile(value);
        }
        if (name === "coupon") {
          // List of exact match coupons for free registration
          const freeCoupons = ["AMC", "ACSE", "kavitha", "UVCE", "GCEM", "DSCE", "BIET", "BMSIT", "BPDS01", "AIT", "SP01", "JHC", "MBCAC", "BASKARANTONY123", "JNNC"];
      
          // Check if the entered coupon is one of the free ones (exact match)
          if (freeCoupons.includes(value)) {
            setFreeCoupon(true);
          } else {
            setFreeCoupon(false);
          }
        }
        // Check if the entered coupon code matches an influencer's coupon code
        const influencer = influencers.find((i) => i.couponCode === value);
        if (influencer) {
          setIsCoupon(true);
        } else {
          setIsCoupon(false);
        }
        console.log("b", value)
        
        setReg({ ...reg, [name]: value });
        console.log("a", value)
      };

      const validateName = (name) => {
        if (name === "") {
          setError(true);
          setNameErr("Name field cannot be empty");
        } else {
          let regex = /^[a-zA-Z\s]+$/;
          if (regex.test(name) === false) {
            setError(true);
            setNameErr("Please enter a valid name");
          } else {
            setError(false);
            setNameErr(false);
          }
        }
      };
    
      const validateMobile = (mobile) => {
        if (mobile === "") {
          setError(true);
          setMobileErr("Mobile field cannot be empty");
        } else {
          let regex = /^[6-9]\d{9}$/;
          if (regex.test(mobile) === false) {
            setError(true);
            setMobileErr("Invalid Mobile number");
          } else {
            setMobileErr("");
            setError(false);
          }
        }
      };
    
      const validateEmail = (email) => {
        if (email === "") {
          setError(true);
          setEmailErr("Email field cannot be empty");
        } else {
          let regex = /^\S+@\S+\.\S+$/;
          if (regex.test(email) === false) {
            setError(true);
            setEmailErr("Invalid Email format");
        //   } else if (EmailValidator.is_email_valid(email) === false) {
        //     setError(true);
        //     setEmailErr("Invalid Email service");
        //   } else {
            setError(false);
            setEmailErr("");
          }
        }
      };

    
      const submitHandler = async (e) => {
        setLoading(true)
          e.preventDefault();

          try {
              axios.post('https://register-backend-gaa6.onrender.com/api/register/add', reg)
              .then(response => {
                setLoading(false)
            //  if(reg.selectedCourse!=""){
            //   window.location.href =  `https://be-practical.com/${reg.selectedCourse}`
            //  }
                // Handle the response data here
                toast.success("Thank you for registering to AWS Bootcamp")
                setShowModal(true)
                console.log(response);
              })
              .catch(error => {
                // Handle any errors here
                setLoading(false)
                toast.error(error)
                console.error(error);
              });
          } catch (error) {
            // Handle any network errors or server-side errors here
            console.error('Error:', error);
            toast.error('An error occurred while creating the influencer. Please try again.');
          }
          console.log(reg)
         
      };
  return (
    <section className='registration p-1 px-lg-3' id='register'>
           {
        loading ? <LoadingModal/> : null
}
       <div className="registration-form-container text-center rounded-3">
                <div className="card register-form rounded-3 border-0"  data-aos="zoom-out">
                    <div className="card-header text-start bg-students">
                    {/* <h1 className="p-large-xl text-white">Enroll Our <br />AWS Bootcamp</h1>
            <div className="d-flex align-items-end">
            <h1 className="heading-text text-main mx-2">Free</h1>
            <h1 className="heading-subtitle text-white"><del className='text-danger'>&#8377;1000</del></h1>
           
            </div> */}
            <h1 className='fs-3 text-white'>Enroll Free Online Webinar</h1>
                    </div>
                    <div className="card-body bg-white">
                        <form action='post' autoComplete='false' onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3" name='StudentName' placeholder='Enter Name' value={reg.name} onChange={readValue} required />
                                <div>
                    { err && nameErr ? <p className="text-danger text-start"> { nameErr } </p> : null }
                             </div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="email" className="form-control p-3" name='email' placeholder='Enter Email'  value={reg.email} onChange={readValue} required/>
                                <div>
                                    { err && emailErr ? <p className="text-danger text-start"> { emailErr } </p> : null }
                              </div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3"  name='phonenumber' placeholder='Enter Mobile Number' value={reg.mobile} onChange={readValue} required/>
                                <div>
                    { err && mobileErr ? <p className="text-danger text-start"> { mobileErr } </p> : null }
                                 </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-12 col-md-12 mt-2">
                                <input type="text" className="form-control p-3" name='CollegeName' placeholder='College name'   value={reg.college} onChange={readValue}  required />
                                </div>
                                <div className="col-12 col-md-12 mt-2">
                                <input type="number" className="form-control p-3" name='YearOfPassing' placeholder='year of Passing'  value={reg.year} onChange={readValue} required />
                                </div>
                              </div>
                            </div>
                          
                              
                            <div className="form-group mt-3">
                               <button type="submit" className='main-btn text-white  w-100 bg-dark '>Register <i class="bi bi-hand-index-thumb"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <SpecialMessageModal show={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}

export default Registration
