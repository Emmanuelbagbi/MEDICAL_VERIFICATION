import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ContactComponent.css"; // optional custom CSS file if needed

const Testimonials = () => {
  const sliderRef = useRef();

  const testimonials = [
    {
      img: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/avatar_1.png",
      name: "LAURENCE VENDETTA",
      text: "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.",
      rating: 5,
    },
    {
      img: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/avatar_2.png",
      name: "PAULO HUBERT",
      text: "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.",
      rating: 5,
    },
    {
      img: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/avatar_3.png",
      name: "LAURENCE VENDETTA",
      text: "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.",
      rating: 5,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // ✅ disable default slick arrows
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderStars = (count) => (
    <div
      className="cs_rating cs_accent_color"
      data-rating={count}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: "20px",
      }}
    >
      <div className="cs_rating_bg">
        {Array(5)
          .fill()
          .map((_, i) => (
            <svg
              key={i}
              width="16"
              height="15"
              viewBox="0 0 576 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
            </svg>
          ))}
      </div>
    </div>
  );

  return (
    <section
      className="cs_bg_filed"
      data-src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/testimonial_bg-1.svg"
      style={{
        backgroundImage:
          'url("https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/testimonial_bg-1.svg")',
          height:"1400px"
      }}
    >
      <div className="cs_height_190 cs_height_xl_145 cs_height_lg_105"></div>
      <div className="Contact-container">
        <div className="cs_section_heading cs_style_1">
          <h3 className="review">SOME REVIEWS</h3>
          <div className="cs_height_5"></div>
          <h2 className="cs_section_title cs_fs_72 m-SW0">OF OUR CLIENTS</h2>
        </div>

        <div className="cs_height_70 cs_height_lg_50"></div>

        <div className="cs_testimonial_carousel cs_gap_20 position-relative">
          <div className="row">
            <div className="col-lg-10 offset-lg-2">
              <Slider ref={sliderRef} {...settings} className="cs_slider_activate">
                {testimonials.map((t, index) => (
                  <div className="cs_slide" key={index}>
                    <div className="cs_testimonial cs_style_3 cs_radius_20 cs_white_bg text-center">
                      <div className="cs_testimonial_img">
                        <img decoding="async" src={t.img} alt={t.name} />
                      </div>
                      <h2 className="cs_testimonial_avatar cs_fs_24 cs_semibold">
                        {t.name}
                      </h2>
                      {renderStars(t.rating)}
                      <div className="cs_testimonial_text cs_fs_20">{t.text}</div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* ✅ Custom Navigation Arrows */}
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
        </div>
      </div>

      <div className="cs_height_200 cs_height_xl_150 cs_height_lg_110"></div>

      {/* ✅ Banner Section */}
      <div className="cs_banner_8_wrap">
        <div className="containerty">
          <div
            className="cs_banner cs_style_8 cs_radius_25 cs_bg_filed"
            data-src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/banner_bg-1.svg"
            style={{
              backgroundImage:
                'url("https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/banner_bg-1.svg")',
            }}
          >
            <div className="cs_banner_imgre">
              <img
                decoding="async"
                src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/banner_img.png"
                alt=""
              />
            </div>
            <div className="cs_banner_in">
              <h2 className="cs_banner_title02">
                Don’t Let Your Health Take a Backseat!
              </h2>
              <p className="cs_banner_subtitle02">
                Schedule an appointment with one of our experienced medical professionals
                today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
