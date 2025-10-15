
import "./MainAbout.css"; // optional: if you want to style separately
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import StartServiceSection from "../../COMPONENTS/StartServiceSection/StartServiceSection";
const MainAbout = () => {
  return (
    <>
    <Navbar />
    <section
      className="cs_banner cs_style_33 cs_bg_filed"
      data-src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/banner_bg-2.svg"
      style={{
        backgroundImage:
          'url("https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/banner_bg-2.svg")',
      }}
    >
      <div className="cs_banner_img">
        <img
          decoding="async"
          src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/banner_img-1.png"
          alt=""
          className="cs_main_banner_img"
        />
      </div>
      <div className="container">
        <div className="cs_banner_text">
          <h2 className="cs_banner_title cs_fs_72g">
            Welcome to <br />
            ProHealth Medical &amp; Healthcare Center
          </h2>
          <p className="cs_banner_subtitlesd">
            Your Partner in Health and Wellness
          </p>
        </div>
      </div>
    </section>
    <StartServiceSection></StartServiceSection>
    </>
  );
};

export default MainAbout;
