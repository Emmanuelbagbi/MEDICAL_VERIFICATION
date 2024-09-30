import'./Contact.css'
import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { BiArrowToRight } from 'react-icons/bi';
import Geolocation from '../../COMPONENTS/GeoLocation/Location'
import contactImage1 from '/src/assets/Images/banner_img (1).png'

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        medicalRecordNumber: "",
        reasonForVisit: null,
        department: "",
        preferredDate: new Date(),
        preferredTime: "",
      });
    
      const reasonOptions = [
        { value: "Routine Checkup", label: "Routine Checkup" },
        { value: "Consultation", label: "Consultation" },
        { value: "Follow-up", label: "Follow-up" },
      ];
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleDateChange = (date) => {
        setFormData({ ...formData, preferredDate: date });
      };
    
      const handleSelectChange = (option) => {
        setFormData({ ...formData, reasonForVisit: option });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
      };
    

  return (
    <>
    <form onSubmit={handleSubmit} >
        <section className='contact'>
            <div className="contact-image">
                <img src={contactImage1} alt="" />
            </div>
            <div className="contactHeader">
                <h1>Contact Us</h1>
                <p>Kindly reach us to get faster response and treatment</p>
            </div>
        </section>
        <section className='contactform'>
            <div className="contact-container">
                <div className="contactinfo">
                    <div className="Namediv">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="David John"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="(123) 456 - 789"
                        required
                        />
                    </div>
                    </div>
                    <div className="Namediv">
                    <div className="form-group1">
                        <label>Medical Record Number</label>
                        <input
                        className='input1'
                        type="text"
                        name="medicalRecordNumber"
                        value={formData.medicalRecordNumber}
                        onChange={handleInputChange}
                        placeholder="123456-7890-0987"
                        />
                    </div>
                    </div>
                    <div className="Namediv">
                    <div className="form-group3">
                        <label>Reason for Visit</label>
                        <Select
                        className='select'
                        name="reasonForVisit"
                        options={reasonOptions}
                        value={formData.reasonForVisit}
                        onChange={handleSelectChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Department</label>
                        <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        placeholder="Cardiology"
                        required
                        />
                    </div>
                    </div>
                    <div className="Namediv">
                    <div className="form-group2">
                        <label>Preferred Date</label>
                        <DatePicker
                        className='date1'
                        selected={formData.preferredDate}
                        onChange={handleDateChange}
                        dateFormat="MMMM d, yyyy"
                        />
                    </div>

                    <div className="form-group">
                        <label>Preferred Time</label>
                        <input
                        type="time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        />
                    </div>
                    </div>
                    <button type="submit" className="submit-button">
                        Submit <BiArrowToRight />
                    </button>
                </div>
            </div>
        </section>
    </form>

    <section className='find'>
        <div className="findus">
            <div className="find-title">
                <h1 className='findh1'>Find Us Here</h1>
            </div>
            <div className="findicons">
                    <div className="icon-container">
                        <div className="icon-cont"></div>
                        <div className="icon-details">
                            <h3>Phone</h3>
                            <p>123-4567890</p>
                        </div>
                    </div>


                    <div className="icon-container">
                        <div className="icon-cont1"></div>
                        <div className="icon-details">
                            <h3>Email</h3>
                            <p>hellocallcenter@gmail.com</p>
                        </div>
                    </div>

                    <div className="icon-container">
                        <div className="icon-cont2"></div>
                        <div className="icon-details">
                            <h3>Location</h3>
                            <p>123 Anywhere St., Any City</p>
                        </div>
                    </div>
            </div>
            <br />
            <div className="geolocation-container">
                <Geolocation/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact