import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurValues.css";

const OurValues = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false, // we'll use custom arrows
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const values = [
    {
      title: "Compassion",
      icon: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/value_icon_1.svg",
      text: `We understand that seeking medical care can be a stressful and emotional experience, 
      and we strive to create a welcoming and supportive environment that puts our patients at ease and everyone.`,
    },
    {
      title: "Excellence",
      icon: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/value_icon_2.svg",
      text: `We are committed to providing excellent medical care and services to our patients. 
      We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.`,
    },
    {
      title: "Integrity",
      icon: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/value_icon_3.svg",
      text: `We believe in practicing medicine with integrity and honesty. 
      We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide the best solution.`,
    },
    {
      title: "Respect",
      icon: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/value_icon_1.svg",
      text: `We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. 
      We believe that every person deserves to be treated with compassion and kindness.`,
    },
    {
      title: "Teamwork",
      icon: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/value_icon_2.svg",
      text: `We believe in working collaboratively with our team members and other healthcare professionals 
      to provide comprehensive and effective care to our patients.`,
    },
  ];

  return (
    <section>
      <div className="Ourvalue-container">
        <div className="cs_iconbox_carousel_1 cs_gap_20 position-relative">
          <div className="value-row">
            {/* Left Section */}
            <div className="col-lg-4vnv">
              <div className="cs_section_heading cs_style_1">
                <h2 className="cs_section_title cs_fs_72value m-0">Our Values</h2>
              </div>

              <div className="cs_height_200 cs_height_xl_150454 cs_height_lg_10"></div>
              <div className="cs_height_30 cs_height_xl_0"></div>

              <div className="cs_slider_navigation cs_style_2">
                <div
                  className="cs_slider_prev cs_center slick-arrow"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <img
                    decoding="async"
                    src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/icons/left_arrow_blue.svg"
                    alt="Prev"
                  />
                </div>
                <div
                  className="cs_slider_next cs_center slick-arrow"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <img
                    decoding="async"
                    src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/icons/right_arrow_blue.svg"
                    alt="Next"
                  />
                </div>
              </div>

              <div className="cs_height_0 cs_height_lg_30"></div>
            </div>

            {/* Right Section */}
            <div className="col-lg-8">
              <Slider ref={sliderRef} {...settings} className="cs_slider_activate">
                {values.map((item, index) => (
                  <div key={index} className="cs_slide" style={{ width: "100%" }}>
                    <div className="cs_iconbox cs_style_10 cs_radius_20 cs_white_bg text-center">
                      <div className="cs_iconbox_iconty cs_center rounded-circle">
                        <img decoding="async" src={item.icon} alt={item.title} />
                      </div>
                      <h2 className="cs_iconbox_title">{item.title}</h2>
                      <p className="cs_iconbox_subtitle mb-0">{item.text}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
