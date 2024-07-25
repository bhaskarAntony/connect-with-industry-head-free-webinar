import React, { useEffect, useState } from 'react';
import '../styles/registration.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import success from '../images/success.gif';

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
                <div className="modal-dialog">
                    <div className="modal-content bg-white">
                        <div className="modal-body d-flex align-items-center justify-content-center flex-column gap-3">
                            <img src={success} alt="success" className='w-100 rounded-3'/>
                            <p className='fs-4 text-dark mt-4'>
                                Free webinar Registration is Success..
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
    const [isCoupon, setIsCoupon] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [freeCoupon, setFreeCoupon] = useState(false);

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

    const [reg, setReg] = useState({
        StudentName: "",
        email: "",
        phonenumber: "",
        CollegeName: "",
        YearOfPassing: "",
        coupon: ""
    });

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
            const freeCoupons = ["AMC", "ACSE", "kavitha", "UVCE", "GCEM", "DSCE", "BIET", "BMSIT", "BPDS01", "AIT", "SP01", "JHC", "MBCAC", "BASKARANTONY123", "JNNC"];
            if (freeCoupons.includes(value)) {
                setFreeCoupon(true);
            } else {
                setFreeCoupon(false);
            }

            const influencer = influencers.find((i) => i.couponCode === value);
            if (influencer) {
                setIsCoupon(true);
            } else {
                setIsCoupon(false);
            }
        }

        setReg({ ...reg, [name]: value });
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
                setNameErr("");
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
                setError(false);
                setMobileErr("");
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
            } else {
                setError(false);
                setEmailErr("");
            }
        }
    };

    const submitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            await axios.post('https://register-backend-gaa6.onrender.com/api/register/add', reg)
                .then(response => {
                    setLoading(false);
                    toast.success("Thank you for registering");
                    setShowModal(true);
                    console.log(response);
                })
                .catch(error => {
                    setLoading(false);
                    toast.error("An error occurred while registering. Please try again.");
                    console.error(error);
                });
        } catch (error) {
            setLoading(false);
            toast.error('An error occurred while creating the influencer. Please try again.');
            console.error('Error:', error);
        }
    };

    return (
        <section className='registration p-1 px-lg-3' id='register'>
            {loading && <LoadingModal />}
            <div className="registration-form-container text-center rounded-3">
                <div className="card register-form rounded-3 border-0" data-aos="zoom-out">
                    <div className="card-header text-start bg-students">
                        <h1 className='fs-3 text-white'>Enroll Free Online Webinar</h1>
                    </div>
                    <div className="card-body bg-white">
                        <form action='post' autoComplete='false' onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3" name='StudentName' placeholder='Enter Name' value={reg.StudentName} onChange={readValue} required />
                                <div>
                                    {err && nameErr && <p className="text-danger text-start"> {nameErr} </p>}
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="email" className="form-control p-3" name='email' placeholder='Enter Email' value={reg.email} onChange={readValue} required />
                                <div>
                                    {err && emailErr && <p className="text-danger text-start"> {emailErr} </p>}
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3" name='phonenumber' placeholder='Enter Mobile Number' value={reg.phonenumber} onChange={readValue} required />
                                <div>
                                    {err && mobileErr && <p className="text-danger text-start"> {mobileErr} </p>}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-12 col-md-12 mt-2">
                                        <input type="text" className="form-control p-3" name='CollegeName' placeholder='College Name' value={reg.CollegeName} onChange={readValue} required />
                                    </div>
                                    <div className="col-12 col-md-12 mt-2">
                                        <input type="number" className="form-control p-3" name='YearOfPassing' placeholder='Year of Passing' value={reg.YearOfPassing} onChange={readValue} required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className='main-btn text-white w-100 bg-dark'>Register <i className="bi bi-hand-index-thumb"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <SpecialMessageModal show={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
}

export default Registration;
