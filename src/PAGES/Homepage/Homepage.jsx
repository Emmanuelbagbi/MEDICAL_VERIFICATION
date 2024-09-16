import  './Homepage.css'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { useState } from "react";
import HealthcareStats from '../../COMPONENTS/counter/Counter'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';



function Homepage() {
   
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already open
    } else {
      setActiveIndex(index); // Open the clicked one
    }
  };

  const accordionData = [
    {
      question: "What services does ProHealth offer?",
      answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui..",
    },
    {
      question: "How do I schedule an appointment with ProHealth?",
      answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    {
      question: "What should I bring to my appointment?",
      answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    {
      question: "How do I request a prescription refill?",
      answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    ];
  
  return (
    <>
          <section className='homepage'>
        <Navbar></Navbar>
        
        <div className="advert">
            <img src="/src/assets/Images/patents.png"/>
        </div>
        <div className="title">
            <h1>Medical verification, your gateway to genuine. </h1>
        </div>

        <div className="sub-header">
            <div className="box1">
                <span>
                    Pro Health
                </span>
            </div>
            <div className="box2">
                <p>             
                Welcome to our medical verification platform,
                where we ensure the authenticity of your pharmaceutical purchases.
                Stay safe from counterfeit drugs.</p>
            </div>
        </div>

        <div className="glass">
            <div className="glassmorphism">
                <HealthcareStats/>
            </div>
        </div>
    </section>

    <section className='hero'>
        <div className="about">
            <div className="row1">
                <div className="info">
                <span className='infospan'>ABOUT US</span>
                <h1 className='target'>ProHealth is a team of experienced medical professional</h1>
                </div>

                <span className='sub-info'>
                Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms.
                </span>
            </div>
            <div className="row2">
                <img src="/src/assets/Images/about.jpg"/>
            </div>
        </div>
    </section>

    <section className='feat-card'>
        <div className="our-Department">
            <span>OUR DEPARTMENTS</span>
            <div className="for-your-health">
            <h2>For Your Health</h2>
            </div>
        </div>

        <div className="wrp-card">
            <div className="content-card">
                <div className="icon">
                    <img src="/src/assets/home_2/department_icon_1.svg"/>
                </div>
                <div className="depart">
                    <h2 className="cs_iconbox_title cs_fs_32 cs_semibold m-0">Emergency Departement</h2>
                </div>
            </div>

            <div className="content-card">
                <div className="icon">
                    <img src="/src/assets/home_2/department_icon_2.svg"/>
                </div>
                <div className="depart">
                    <h2 className="cs_iconbox_title cs_fs_32 cs_semibold m-0">Pediatric Departement</h2>
                </div>
            </div>

            <div className="content-card">
                <div className="icon">
                    <img src="/src/assets/home_2/department_icon_3.svg"/>
                </div>
                <div className="depart">
                    <h2 className="cs_iconbox_title cs_fs_32 cs_semibold m-0">Obstetrics and Gynecology Departement</h2>
                </div>
            </div>

            <div className="content-card">
                <div className="icon">
                    <img src="/src/assets/home_2/department_icon_4.svg"/>
                </div>
                <div className="depart">
                    <h2 className="cs_iconbox_title cs_fs_32 cs_semibold m-0">Cardiology Departement</h2>
                </div>
            </div>

            <div className="content-card">
                <div className="icon">
                    <img src="/src/assets/home_2/department_icon_5.svg"/>
                </div>
                <div className="depart">
                    <h2 className="cs_iconbox_title cs_fs_32 cs_semibold m-0">Neurology Departement</h2>
                </div>
            </div>

            <div className="content-card">
                <div className="icon">
                    <img src="/src/assets/home_2/department_icon_6.svg"/>
                </div>
                <div className="depart">
                    <h2 className="cs_iconbox_title cs_fs_32 cs_semibold m-0">Psychiatry Departement</h2>
                </div>
            </div>
        </div>
    </section>

    <section className='schedule'>
            <div className="attentions">
                <div className="health">
                    <span><h2 className='dont'>Don’t Let Your Health Take a Backseat!</h2></span>
                    <span><p className="m-0 cs_white_color cs_fs_20 cs_medium">Schedule an appointment with one of our <br/>experienced medical  professionals today!</p></span>
                </div>
            </div>
    </section>

    <section className='blog'>
        <div className="our-Department">
            <span>BLOG POSTS</span>
            <div className="for-your-health">
            <h2>Latest Update</h2>
            </div>
        </div>


        <div className="blog-content">
            <div className="blog-card">
                <div className="media-content">
                    
                </div>

                <span className='date'>May 1, 2023</span>

                <div className="information">
                    <h2><a href="#" className='cs_post_title cs_semibold cs_fs_32'>The Benefits of Mindfulness Meditation for Stress and  Anxiety</a></h2>
                </div>
            </div>

            <div className="blog-card">
                <div className="media-content1">
                    
                </div>

                <span className='date'>May 1, 2023</span>

                <div className="information">
                    <h2><a href="#" className='cs_post_title cs_semibold cs_fs_32'>Healthy Eating on a Budget: Tips and Strategies</a></h2>
                </div>
            </div>

            <div className="blog-card">
                <div className="media-content2">
                    
                </div>

                <span className='date'>May 1, 2023</span>

                <div className="information">
                    <h2><a href="#" className='cs_post_title cs_semibold cs_fs_32'>The Importance of Regular Cancer Screenings and Early Detection</a></h2>
                </div>
            </div>
        </div>


    </section>

    <section className='faq-section'>
        <div className="question">
            <span>What people</span>
            <h1>Usually Asked</h1>
        </div>
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            <h2>{item.question}</h2>
            <span>{activeIndex === index ? 
                <BiChevronUp />: <BiChevronDown /> }</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </section>
    
    <section className='advert-section'>
        <div className="pic">
        <div className="advert-info">
            <p>All kinds of Diagnostics</p>
            <span>Welcome to our medical verification platform,
                where we ensure the authenticity
                of your pharmaceutical purchases.</span>

            <button className='Register'>Verify Now</button>
        </div>
        </div>
    </section>
    </>
  )
  
}



export default Homepage

