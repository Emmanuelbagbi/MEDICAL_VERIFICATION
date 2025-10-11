import './HealthBannerSection.css'

const HealthBannerSection = () => {
  return (
    <section>
      <div className="Health-Banner-container">
        <div
          className="cs_banner cs_style_2 cs_radius_254 cs_bg_filed3"
          data-src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/cta_bg.jpeg"
          style={{
            backgroundImage:
              'url("https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/cta_bg.jpeg")',
          }}
        >
          <div className="cs_style_32">
            <h2 className="cs_section_title cs_fs_72 m-0 cs_white_color">
              Don’t Let Your Health Take a Backseat!
            </h2>
            <div className="cs_height_22"></div>
            <p className="cs_fs_2040">
              Schedule an appointment with one of our <br />
              experienced medical professionals today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBannerSection;
