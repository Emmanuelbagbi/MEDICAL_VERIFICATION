import React, { useEffect, useRef } from "react";
import mixitup from "mixitup";
import './DoctorsPageDoctorSecttion.css';
import "font-awesome/css/font-awesome.min.css"; 
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"; // Optional: for FA icons

function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Lisa Chen, MD",
      department: "Emergency Department",
      designation: "Emergency Medicine Specialist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_1.png",
      link: "#",
    },
    {
      name: "Dr. Susan Bones, MD",
      department: "Emergency Department",
      designation: "Emergency Medicine Specialist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_6.png",
      link: "#",
    },
    {
      name: "Dr. Michael Johnson, MD",
      department: "Emergency Department",
      designation: "Emergency Medicine Specialist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_2.png",
      link: "#",
    },
    {
      name: "Dr. Sarah White, MD",
      department: "Pediatrics Department",
      designation: "Pediatrician",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_3.png",
      link: "#",
    },
    {
      name: "Dr. Kevin Green, MD",
      department: "Cardiology Department",
      designation: "Cardiologist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_4.png",
      link: "#",
    },
    {
      name: "Dr. Olivia Brooks, MD",
      department: "Psychiatry Department",
      designation: "Psychiatrist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_5.png",
      link: "#",
    },
    {
      name: "Dr. Lisa Chen, MD",
      department: "Cardiologist Department",
      designation: "Cardiologist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_7.png",
      link: "#",
    },
    {
      name: "Dr. John Smith, MD",
      department: "Cardiologist Department",
      designation: "Cardiologist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_9.png",
      link: "#",
    },
    {
      name: "Dr. Olivia Brooks, MD",
      department: "Cardiologist Department",
      designation: "Cardiologist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_5.png",
      link: "#",
    },
    {
      name: "Dr. Lisa Chen, MD",
      department: "Psychiatry Department",
      designation: "Psychiatry",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_1.png",
      link: "https://prohealth-wp.laralink.com/doctors/dr-lisa-chen-md/",
    },
    {
      name: "Dr. John Smith, MD",
      department: "Psychiatry Department",
      designation: "Psychiatry",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_9.png",
      link: "#",
    },
    {
      name: "Dr. Sarah Patel, MD",
      department: "Psychiatry Department",
      designation: "Psychiatry",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_4.png",
      link: "#",
    },
  ];

  // 🧩 MixItUp setup
  const containerRef = useRef(null);
  const mixerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mixerRef.current = mixitup(containerRef.current, {
        selectors: { target: ".cs_isotop_item" },
        animation: { duration: 400 },
      });
    }

    return () => {
      if (mixerRef.current) mixerRef.current.destroy();
    };
  }, []);

  // 🔍 Helper to assign department filter classes
  const getFilterClass = (department) => {
    if (department.toLowerCase().includes("emergency")) return "emergency";
    if (department.toLowerCase().includes("pediatric")) return "pediatric";
    if (department.toLowerCase().includes("cardio")) return "cardiology";
    if (department.toLowerCase().includes("psychiatry")) return "psychiatry";
    return "";
  };

  return (
    <div className="DoctorsPage-container">
      <div className="cs_doctors_heading">
        <div className="cs_isotop_filter cs_style1">
          <p className="mb-067">Sort by</p>
          <ul className="cs_mp0">
            {[
              { label: "All", filter: "all" },
              { label: "Emergency", filter: ".emergency" },
              { label: "Pediatric", filter: ".pediatric" },
              { label: "Cardiology", filter: ".cardiology" },
              { label: "Psychiatry", filter: ".psychiatry" },
            ].map((item, idx) => (
              <li key={idx} className={idx === 0 ? "active5" : ""}>
                <button
                  type="button"
                  className="filter-btn"
                  data-filter={item.filter}
                  onClick={(e) => {
                    e.preventDefault(); // prevent reload
                    document.querySelectorAll(".cs_isotop_filter ul li").forEach(li => li.classList.remove("active5"));
                    e.currentTarget.parentElement.classList.add("active5");
                    const btn = e.currentTarget;
                    if (window.mixerRef && btn.dataset.filter) {
                      window.mixerRef.filter(btn.dataset.filter);
                    }
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

        </div>

        <div className="cs_view_box">
          <span>Showing items</span>
          <div className="cs_view_box_in">
            <button type="button" className="cs_grid_view active6">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11.8571H11.8571V0H0V11.8571ZM1.5625 1.5625H10.2948V10.2948H1.5625V1.5625ZM13.1429 0V11.8571H25V0H13.1429ZM23.4375 10.2948H14.7052V1.5625H23.4375V10.2948ZM0 25H11.8571V13.1429H0V25ZM1.5625 14.7052H10.2948V23.4375H1.5625V14.7052ZM13.1429 25H25V13.1429H13.1429V25ZM14.7052 14.7052H23.4375V23.4375H14.7052V14.7052Z" fill="currentColor"/>
              </svg>
            </button>
            <button type="button" className="cs_list_view">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11.8571H12.2396V0H0V11.8571ZM1.6129 1.5625H10.6267V10.2946H1.6129V1.5625ZM0 25H12.2396V13.1429H0V25ZM1.6129 14.7052H10.6267V23.4375H1.6129V14.7052ZM25 0.85022V2.41272H14.3731V0.85022H25ZM14.3731 9.44458H25V11.0071H14.3731V9.44458ZM14.3731 5.1475H25V6.71H14.3731V5.1475ZM14.3731 13.9929H25V15.5554H14.3731V13.9929ZM14.3731 22.5873H25V24.1498H14.3731V22.5873ZM14.3731 18.2902H25V19.8527H14.3731V18.2902Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="cs_height_65"></div>

      <div className="pushsection">
        <div
          className="cs_isotop cs_style1 cs_has_gutter_24 cs_isotop_col_3 cs_grid_view_wrap"
          style={{ position: "relative", height: "auto" }}
          ref={containerRef}
        >
          {/* Doctor Card Start */}
          {doctors.map((doc, index) => (
            <div className={`cs_isotop_item mix ${getFilterClass(doc.department)}`} key={index}>
              <div className="cs_team cs_style_1 cs_type_2 text-center cs_radius_20 overflow-hidden">
                <div className="cs_member_img">
                  <a href={doc.link} className="d-block">
                    <img src={doc.image} alt={doc.name} />
                  </a>
                  <div className="cs_label cs_white_color cs_accent_bg">{doc.department}</div>
                </div>
                <div className="cs_team_meta cs_white_bg">
                  <div>
                    <h3 className="cs_member_name cs_fs_322aa">
                      <a href={doc.link}>{doc.name}</a>
                    </h3>
                    <p className="cs_member_designation cs_heading_color cs_medium">{doc.designation}</p>
                    <p className="cs_member_description">
                      With expertise in managing complex conditions and performing advanced procedures
                    </p>
                  </div>
                  <div>
                    <div className="cs_social_links">
                      <a href="#"><FaFacebookF /></a>
                      <a href="#"><FaTwitter /></a>
                      <a href="#"><FaLinkedinIn /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Doctor Card End */}
        </div>
        <div className="cs_grid_sizer"></div>
      </div>
    </div>
  );
}

export default DoctorsSection;
