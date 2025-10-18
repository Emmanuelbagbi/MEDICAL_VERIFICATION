import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Vdoc1 from "../../assets/Images/doctor_1.png"
import Vdoc2 from "../../assets/Images/doctor_2.png"
import Vdoc3 from "../../assets/Images/doctor_3.png"
import "./TeamSection.css"; // optional CSS import if you’re using an external file

const TeamSection = () => {
  return (
   <section className='doctors-sec1'>
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
                    <br />
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
                    <br />
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
                    <br />
                   </div>
               </div>
           </section>
  );
};

export default TeamSection;
