import './Contact.css'
import Vhome from "../../assets/Images/hero_bg.svg"
import Vgirl from "../../assets/Images/hero_img_1.png"
import Vlove from "../../assets/Images/hero_img_4.svg"
import Vpat from "../../assets/Images/hero_img_3.svg"
import Vhours from "../../assets/Images/hero_img_20.svg"
import Vdoc from "../../assets/Images/doc-screen.png"
import Vprofile from "../../assets/Images/profile-img.png"
import Vphone from "../../assets/Images/phone-img.png"
import Vfolder from "../../assets/Images/folder-img.png"
import Vmenu from "../../assets/Images/menu-img.png"
import Vcalender from "../../assets/Images/calender-img.png"
import Vtime from "../../assets/Images/time-img.png"
import Vdoc1 from "../../assets/Images/doctor_1.png"
import Vdoc2 from "../../assets/Images/doctor_2.png"
import Vdoc3 from "../../assets/Images/doctor_3.png"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import OurValues from '../../COMPONENTS/OurValues/OurValues'
import DepartmentSection from '../../COMPONENTS/DepartmentSection/DepartmentSection'
import ContactComponent from '../../COMPONENT2/ContactComponent/ContactComponent'
import BlogPosts from '../../COMPONENTS/BlogPosts/BlogPosts'
import ContactFAQ from '../../COMPONENT2/ContactFAQ/ContactFAQ'
import "bootstrap-icons/font/bootstrap-icons.css";
import {FaYoutube, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus("Please enter a valid email address.");
      return;
    }

    // Example submission logic (replace with your API or backend endpoint)
    console.log("Email submitted:", email);

    setStatus("Thank you for subscribing!");
    setEmail("");
  };

    return(
        <>
        <div className='about-all'>
            <Navbar/>
        <section  style={{
            backgroundImage: `url(${Vhome})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
           className='about-sec23'>
        <div className='about-div23'>
           <div>
             <div>
                <h1 className="cs_hero_title cs_fs_94343">Your Partner in Health and Wellness</h1>
             </div>
             <div className='pro-txt'>
                <p>At ProHealth, we prioritize our patient's health and</p>
                <p>well-being, and we strive to provide compassionate</p>
                <p>care with exceptional results.</p>
             </div>
           </div>
           <div className='doc-girl'>
           <img src={Vgirl} alt="" />
           </div>
           <div className='love-img'>
            <img src={Vlove} alt="" />
           </div>
           <div className='pat-div'>
            <img src={Vpat} alt="" />
           </div>
           <div className='hours-div'>
            <img src={Vhours} alt="" />
           </div>
           <div className='doc-div'>
            <img src={Vdoc} alt="" />
           </div>
         </div>
        </section>

        <section className='Appointment-sec'>
           <div className='app-div'>
            <h1>Book Appoinment Now</h1>
            <div className='ped-div'>
                <div className='ped-box'>
                    <p className='ped-ac'>Pediatric</p>
                    <p className='pd-txt'>Obstetrics and Gynecology</p>
                    <p className='pd-txt'>Cardiology</p>
                    <p className='pd-txt'>Neurology</p>
                </div>
                <button>Book Now</button>
            </div>
            <div className='pro-grid'>
             <div className='indiv-pro'>
                <img src={Vprofile} alt="" />
                 <div>
                    <p className='name-txt'>Name</p>
                    <p className='john-txt'>David John</p>
                 </div>
             </div>
             <div className='indiv-pro'>
                <img src={Vphone} alt="" />
                 <div>
                    <p className='name-txt'>Phone Number</p>
                    <p className='john-txt'>(123)456-789</p>
                 </div>
             </div>
             <div className='indiv-pro'>
                <img src={Vfolder} alt="" />
                 <div>
                    <p className='name-txt'>Medical Record Number</p>
                    <p className='john-txt'>123456-7890-0987</p>
                 </div>
             </div>
             <div className='indiv-pro'>
                <img src={Vmenu} alt="" />
                 <div>
                    <p className='name-txt'>Reason for Visit</p>
                    <p className='john-txt'>Routine Checkup</p>
                 </div>
             </div>
             <div className='indiv-pro'>
                <img src={Vcalender} alt="" />
                 <div>
                    <p className='name-txt'>Preferred Date</p>
                    <p className='john-txt'>August 23, 2023</p>
                 </div>
             </div>
             <div className='indiv-pro'>
                <img src={Vtime} alt="" />
                 <div>
                    <p className='name-txt'>Preferred Time</p>
                    <p className='john-txt'>10:00AM</p>
                 </div>
             </div>
            </div>
           </div>
        </section>

    <div className="cs_height_190 cs_height_xl_14H5 cs_height_lg_105"></div>
    <div className="Partner-container">
      <h2 className="cs_fs_40 text-center mb-0 cs_semiboldjgjk">Our Partners</h2>
      <div className="cs_height_60"></div>
      <div className="cs_brandsut cs_style_1">
        <div className="cs_brandut cs_center">
          <img
            decoding="async"
            src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_1.png"
            alt=""
          />
        </div>
        <div className="cs_brandut cs_center">
          <img
            decoding="async"
            src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_2.png"
            alt=""
          />
        </div>
        <div className="cs_brandut cs_center">
          <img
            decoding="async"
            src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_3.png"
            alt=""
          />
        </div>
        <div className="cs_brandut cs_center">
          <img
            decoding="async"
            src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_4.png"
            alt=""
          />
        </div>
        <div className="cs_brandut cs_center">
          <img
            decoding="async"
            src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_5.png"
            alt=""
          />
        </div>
        <div className="cs_brandut cs_center">
          <img
            decoding="async"
            src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_6.png"
            alt=""
          />
        </div>
        <div className="cs_brandut cs_center">
          <img
            decoding="async"
            src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_7.png"
            alt=""
          />
        </div>
        <div className="cs_brandut cs_center">
          <img
            decoding="async"
            src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_8.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="cs_height_200 cs_height_xl_150 cs_height_lg_110"></div>

    <section className="cs_about cs_style_1 cs_type_1 cs_shape_wrap">
      <div className="cs_shape_1 cs_position_4"></div>
      <div className="container-professional">
        <div className="row-prof align-items-center cs_gap_y_50">
          <div className="col-lg-6jdj">
            <div className="cs_about_img">
              <img
                decoding="async"
                src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/about-1.png"
                alt=""
              />
              <div className="cs_about_mini_img">
                <img
                  decoding="async"
                  src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/home_1/about_mini.svg"
                  alt="Mini"
                  className="cs_rotate_animation"
                />
                <img
                  decoding="async"
                  src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/icons/tick.svg"
                  alt="Right"
                  className="cs_right_icon"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="cs_about_content">
              <div className="cs_section_heading cs_style_1">
                <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_fs_32">
                  ABOUT US
                </h3>
                <div className="cs_height_5"></div>
                <h2 className="cs_section_titlejhfdj cs_fs_72 m-0">
                  ProHealth is a team of experienced medical professionals
                </h2>
                <div className="cs_height_85 cs_height_xl_50"></div>
                <p className="mb-09797">
                  Dedicated to providing top-quality healthcare services. We
                  believe in a holistic approach to healthcare that focuses on
                  treating the whole person, not just the illness or symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <OurValues></OurValues>
    <DepartmentSection></DepartmentSection>
    <ContactComponent></ContactComponent>


       <div className="movedown">
         <section className='doctors-sec'>
        <p className='meet-txt'>MEET OUR</p>
        <h1 className='do-txt'>Experts Doctor</h1>
            <div className='docs-div'>
                <div>
                    <div className='doc-img'>
                    <img src={Vdoc1} alt="" />   
                    </div>
                    <div className='me-txt'>
                    <h1 className='james-txt'>Dr. James Lee, MD</h1>
                  <p className='head-car'>Head of Cardiologist</p>
                  <p className='w-txt'>With expertise in managing complex</p>
                  <p className='w-txt'>heart conditions and performing</p>
                  <p className='w-txt'>advanced cardiac procedures</p>
                  </div>
                  <div className='ic-div'>
                  <div>
                        <FaFacebookF/>
                    </div>
                    <div>
                        <FaLinkedinIn/>
                    </div>
                    <div>
                        <FaTwitter/>
                    </div>
                  </div>
                 
                </div>
                <div>
                    <div className='doc-img'>
                    <img src={Vdoc2} alt="" />   
                    </div>
                    <div className='me-txt'>
                    <h1 className='james-txt'>Dr. James Lee, MD</h1>
                  <p className='head-car'>Head of Cardiologist</p>
                  <p className='w-txt'>With expertise in managing complex</p>
                  <p className='w-txt'>heart conditions and performing</p>
                  <p className='w-txt'>advanced cardiac procedures</p>
                  </div>
                  <div className='ic-div'>
                  <div>
                        <FaFacebookF/>
                    </div>
                    <div>
                        <FaLinkedinIn/>
                    </div>
                    <div>
                        <FaTwitter/>
                    </div>
                  </div>
                 
                </div>
                <div>
                    <div className='doc-img'>
                    <img src={Vdoc3} alt="" />   
                    </div>
                    <div className='me-txt'>
                    <h1 className='james-txt'>Dr. James Lee, MD</h1>
                  <p className='head-car'>Head of Cardiologist</p>
                  <p className='w-txt'>With expertise in managing complex</p>
                  <p className='w-txt'>heart conditions and performing</p>
                  <p className='w-txt'>advanced cardiac procedures</p>
                  </div>
                  <div className='ic-div'>
                    <div>
                        <FaFacebookF/>
                    </div>
                    <div>
                        <FaLinkedinIn/>
                    </div>
                    <div>
                        <FaTwitter/>
                    </div>
                  </div>
                 
                </div>
            </div>
        </section>
       </div>

      <BlogPosts></BlogPosts>
      <ContactFAQ></ContactFAQ>
<div className="cs_height_200 cs_height_xl_130 cs_height_lg_110"></div>


      <div className="footer-df">
        <div className="container2323">
           <div className="cs_newsletter_2_wrap">
      <div className="container">
        <div className="cs_newsletter cs_style_2">
          <div className="cs_newsletter_img">
            <img
              src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/newsletter_img.png"
              alt="Logo"
            />
          </div>

          <div className="cs_newsletter_in">
            <p className="cs_newsletter_subtitle cs_accent_color m-0 text-uppercase subtab-cs_fs_24">
              Be Our Subscribers
            </p>
            <div className="cs_height_6"></div>

            <h2 className="cs_newsletter_title contact-cs_fs_72">
              To get the latest news about health from our experts
            </h2>

            <form onSubmit={handleSubmit} className="cs_newsletter_form main-form-btn">
              <input
                type="email"
                name="Newsletter_Email"
                className="cs_form_field"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="contact-submit-button contact-submit-1">
                Submit
              </button>
            </form>

            {status && <p className="form-status-message">{status}</p>}
          </div>
        </div>
      </div>
    </div>
    </div>
       </div>
        <section className='contact-page-footer'>
            <div className="column1">
                <div className='footer1'>
                    <div className="cs_text_widget">
                      <img src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/footer_logo_white.svg" alt="ProHealth" />
                      <p className="cs_medium22">ProHealth Medical &amp; Healthcare Center</p>
                    </div>
                    <ul className="cs_contact_widget">
                      <li>
                        <i className="cs_accent_bg23">
                          <img
                            src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/footer_icon/footer3-location.png"
                            alt="footer-location-icon"
                          />
                        </i>
                        123 Anywhere St., Any City 12345
                      </li>

                      <li>
                        <i className="cs_accent_bg23">
                          <img
                            src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/footer_icon/footer3-phone.png"
                            alt="footer-phone-icon"
                          />
                        </i>
                        123-456-7890
                      </li>

                      <li>
                        <i className="cs_accent_bg23">
                          <img
                            src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/footer_icon/footer3-email.png"
                            alt="footer-email-icon"
                          />
                        </i>
                        hellocallcenter@gmail.com
                      </li>
                    </ul>
                </div>
                <div className='footer2'>
                    <span><p>Home</p></span>
                    <span><p>About us</p></span>
                    <span><p>Department</p></span>
                    <span><p>Doctors</p></span>
                    <span><p>Appointments</p></span>
                </div>
                <div className='footer3'>
                <span><p>Contact</p></span>
                    <span><p>Gallery</p></span>
                    <span><p>FAQs Us</p></span>
                    <span><p>Privacy Policy</p></span>
                    <span><p>Terms and Conditions</p></span>
                </div>
                <div className='footer4'>
                    <div className="privacy">
                    <span><p>Privacy Policy</p></span>
                    <span><p>Terms and Conditions</p></span>
                    </div>

                    <div className="privacy">
                    <span><p>Follow Us</p></span>
                    <div className="icon-box">
                    <span><FaFacebookF /></span>
                    <span><FaYoutube /></span>
                    <span><FaLinkedinIn /></span>
                    <span><FaTwitter /></span>
                    <span><FaInstagram /></span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="column2">
                    Copyright © 2024 Pro Health. All rights reserved.
            </div>
        </section>
      </div>
        </>
    )
}

export default Contact