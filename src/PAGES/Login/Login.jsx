import  './Login.css'
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BiArrowToRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import LoginImage from '/src/assets/Images/Medical.png'


function Login() {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        password: "",
        phoneNumber: "",
        Email: "",
        reasonForVisit: null,
        department: "",
        preferredDate: new Date(),
        preferredTime: "",
      });
    
      
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
      };


  return (
   <>
    <section className='Login'>
        <div className="Login-title">
            <h2>LOGIN HERE</h2>
            <p>Login here if you Already have an Account</p>
        </div>
        <div className='Login-up-imagediv'>
            <img src={LoginImage} />
        </div>
    </section>

    <section className='signup-form'>
    <form onSubmit={handleSubmit} >
        <section className='contactform3'>
            <div className="contact-container3">
                <div className="contactinfo4">
                    <div className="Namediv3">
                    <div className="signup-group1">
                        <label>Email</label>
                        <input
                        className='input3'
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleInputChange}
                        placeholder="Example@gmail.com"
                        />
                    </div>
                    </div>
                
                    <div className="Namediv3">
                    <div className="signup-group1">
                        <label>Password</label>
                        <input
                        className='input3'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Johndoe2323"
                        />
                    </div>
                    </div>
                    <button type="submit" className="submit-button">
                        Login <BiArrowToRight />
                    </button>

                    <div className="signup-last">
                    <Link to='/Signup'><span>
                            <b>Signup <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-person-fill-check" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                                </svg></b>
                        </span></Link>

                        <span>
                            As <b>Manufacturer</b>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-person-fill-check" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                            </svg>
                            </span>
                    </div>
                </div>
            </div>
        </section>
    </form>
    </section>
   </>
  )
}

export default Login