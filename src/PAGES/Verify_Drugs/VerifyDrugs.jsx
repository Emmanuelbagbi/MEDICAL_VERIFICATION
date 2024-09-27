import  './VerifyDrugs.css'
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { BiArrowToRight } from 'react-icons/bi';
import { useState } from "react";
import VerifyImage1 from '/src/assets/Images/hero_img.png'
import VerifyImage2 from '/src/assets/contact/icon_1.svg'
import VerifyImage3 from '/src/assets/home_1/ambulance.svg'
import VerifyImage4 from '/src/assets/contact/icon_3.svg'
import VerifyImage5 from '/src/assets/Images/appointment.jpeg'


function VerifyDrugs() {

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
    <div className="verify-header">
        <div className="verifyheader">
          <h1 className='verifyh1'>Your Partner in Health and Wellness</h1>

          <p className='verifyp'>
          We are committed to providing you with the best medical and healthcare services to help you live healthier and happier.</p>

        </div>


        <img src={VerifyImage1} className='verify-img'/>
    </div>

    <div className="hotline">
        <div className="hotline1">
          <div className="hotline-icon">
            <div className="hotdiv"><img src={VerifyImage2} alt="" /></div>
            <div className="contentdiv">
            <h3 className='hth3'>Hotline</h3>
            <p className='htp'>123-456-7890</p>
            </div>
          </div>

          <div className="hotline-icon">
            <div className="hotdiv"><img src={VerifyImage3} alt="" /></div>
            <div className="contentdiv">
            <h3 className='hth3'>Ambulance</h3>
            <p className='htp'>123-456-7890</p>
            </div>
          </div>

          <div className="hotline-icon">
            <div className="hotdiv"><img src={VerifyImage4} alt="" /></div>
            <div className="contentdiv">
            <h3 className='hth3'>Location</h3>
            <p className='htp'>NEW YORK, US</p>
            </div>
          </div>
        </div>
    </div>

    <div className="ftwrp">
      <div className="ftwrp-card">
        <div className="ft-header">
          <h3 className='ft-header-h3'>VERIFY YOUR</h3>
          <h1 className='ft-title'>Products</h1>
        </div>
        
        <div className="ftwrp-content">
        <div className="verifyform"onSubmit={handleSubmit}>
                    <div className="Namediv1">
                    <div className="form-club">
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

                    <div className="form-club">
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
                    <div className="form-club1">
                        <label>Medical Record Number</label>
                        <input
                        className='input2'
                        type="text"
                        name="medicalRecordNumber"
                        value={formData.medicalRecordNumber}
                        onChange={handleInputChange}
                        placeholder="123456-7890-0987"
                        />
                    </div>
                    </div>
                    <div className="Namediv1">
                    <div className="form-club3">
                        <label>Reason for Visit</label>
                        <Select
                        className='select'
                        name="reasonForVisit"
                        options={reasonOptions}
                        value={formData.reasonForVisit}
                        onChange={handleSelectChange}
                        />
                    </div>

                    <div className="form-club">
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
                    <div className="Namediv1">
                    <div className="form-group2">
                        <label>Preferred Date</label>
                        <DatePicker
                        className='date2'
                        selected={formData.preferredDate}
                        onChange={handleDateChange}
                        dateFormat="MMMM d, yyyy"
                        />
                    </div>

                    <div className="form-club">
                        <label>Preferred Time</label>
                        <input
                        type="time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        />
                    </div>
                    </div>
                    <button type="submit" className="submit-button1">
                        Submit <BiArrowToRight />
                    </button>
                </div>

                <div className="verifyimage">
                  <img src={VerifyImage5} alt="" />
                </div>
        </div>
      </div>
    </div>


    <div className="frtcard-advert">
      <div className="frtcard-advert1">
      <div className="health1">
                    <span><h2 className='dont'>Don’t Let Your Health Take a Backseat!</h2></span>
                    <span><p className="m-0 cs_white_color cs_fs_20 cs_medium1">Schedule an appointment with one of our <br/>experienced medical  professionals today!</p></span>
                </div>
          
         <div className='ed'>
         </div>
      </div>
    </div>
   </>

  )
}

export default VerifyDrugs