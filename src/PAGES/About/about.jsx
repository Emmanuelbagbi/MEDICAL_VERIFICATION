import './about.css'
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
import Vint from "../../assets/Images/comm-img.png"
import Vcom from "../../assets/Images/emo-img.png"
import Vdoc1 from "../../assets/Images/doctor_1.png"
import Vdoc2 from "../../assets/Images/doctor_2.png"
import Vdoc3 from "../../assets/Images/doctor_3.png"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


const About = () => {
    return(
        <>
        <div className='about-all'>
        <section  style={{
            backgroundImage: `url(${Vhome})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
           className='about-sec'>
        <div className='about-div'>
           <div>
             <div>
                <h1>Making Health Easy</h1>
                <h1>and Accessible</h1>
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

        <section className='value-sec'>
          <div className='value-div'>
            <div>
            <h1 className='value-txt'>Our Values</h1>
            <div className='div-blue'>
                <div className='blue-circle'>
                    <FaArrowLeftLong/>
                </div>
                <div className='blue-circle'>
                    <FaArrowRightLong/>
                </div>
            </div>
            </div>
            <div>
                <div className='blue-box'>
                <div className='emo-box'>
                    <div className='emo-img'>
                    <img src={Vint} alt="" />
                    </div>
                    <h1>Integrity</h1>
                    <div>
                    <p>We believe in practicing</p>
                    <p>medicine with intergrity and</p>
                    <p>honesty. We are transparent in</p>
                    <p>our communication and</p>
                    <p>decision-making processes, and</p>
                    <p>we always put our patient.</p>
                    </div>
                    
                </div>
                <div className='emo-boxs'>
                    <div className='emo-img'>
                    <img src={Vcom} alt="" />
                    </div>
                    <h1>Integrity</h1>
                    <div>
                    <p>We believe in practicing</p>
                    <p>medicine with intergrity and</p>
                    <p>honesty. We are transparent in</p>
                    <p>our communication and</p>
                    <p>decision-making processes, and</p>
                    <p>we always put our patient.</p>
                    </div>
                    
                </div>

                </div>
               
               
            </div>
          </div>
          
        </section>

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

        {/* <section>
            <div className='last-div'>
                <p>BE OUR SUSCRIBERS</p>
                <div>
                    <h1>To get the latest</h1>
                    <h1>news about health</h1>
                    <h1>from our experts</h1>
                </div>
                <div>
                    <input type="text" />
                    <button>Submit</button>
                </div>
            </div>
        </section> */}
      </div>
        </>
    )
}

export default About