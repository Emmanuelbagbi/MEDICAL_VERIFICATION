import "./FindDoctors.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const DoctorsGrid = () => {
  const doctors = [
    {
      name: "Dr. Lisa Chen, MD",
      department: "Emergency Department",
      designation: "Emergency Medicine Specialist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_1.png",
      link: "https://prohealth-wp.laralink.com/doctors/dr-lisa-chen-md/",
    },
    {
      name: "Dr. Susan Bones, MD",
      department: "Emergency Department",
      designation: "Emergency Medicine Specialist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_6.png",
      link: "https://prohealth-wp.laralink.com/doctors/dr-susan-bones-md-2/",
    },
    {
      name: "Dr. Michael Johnson, MD",
      department: "Emergency Department",
      designation: "Emergency Medicine Specialist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_2.png",
      link: "https://prohealth-wp.laralink.com/doctors/dr-michael-johnson-md/",
    },
    // Add more doctors — the grid will auto-arrange them
    {
      name: "Dr. Sarah White, MD",
      department: "Pediatrics",
      designation: "Pediatrician",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_3.png",
      link: "#",
    },
    {
      name: "Dr. Kevin Green, MD",
      department: "Cardiology",
      designation: "Cardiologist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_4.png",
      link: "#",
    },
    {
      name: "Dr. Olivia Brooks, MD",
      department: "Psychiatry",
      designation: "Psychiatrist",
      image: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor_5.png",
      link: "#",
    },
  ];

  return (
   <div className="findDoctors">
     <div className="our-Department">
  <span>OUR DOCTORS</span>
  <div className="for-your-health12">
    <h2>Meet Our Doctors</h2>
  </div>
</div>
<br /><br />


    <div className="cs_isotop cs_style1 cs_grid_view_wrap cs_isotop_col_3 cs_has_gutter_24">
      {doctors.map((doc, index) => (
        <div className="cs_isotop_item" key={index}>
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
    </div>
   </div>
  );
};

export default DoctorsGrid;
