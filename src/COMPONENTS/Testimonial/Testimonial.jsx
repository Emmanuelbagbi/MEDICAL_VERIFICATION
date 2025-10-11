import { useRef } from "react";
import "./Testimonial.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”",
    name: "PAULO HUBERT",
    location: "California, USA",
    avatar: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/avatar_1.png",
    rating: 5,
  },
  {
    text: "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”",
    name: "EMILY CLARK",
    location: "London, UK",
    avatar: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/avatar_2.png",
    rating: 5,
  },
  {
    text: "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.”",
    name: "JAMES ROGERS",
    location: "Sydney, Australia",
    avatar: "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/avatar_3.png",
    rating: 4,
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // disable built-in arrows, we'll use custom ones
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      className="cs_bg_filed"
      style={{
        backgroundImage:
          "url('https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/testimonial_bg.svg')",
      }}
    >
      <div className="cs_height_19023 cs_height_xl_145 cs_height_lg_105"></div>
      <div className="container2">
        <div className="cs_slider_heading_1">
          <div className="cs_section_heading cs_style_1">
            <h3 className="testimonial-title">TESTIMONIALS</h3>
            <h2 className="cs_testimonial_sub-title">
              What Our Patients Say <br /> About Us
            </h2>
          </div>

          {/* Custom navigation wired to sliderRef */}
          <div className="cs_slider_navigation cs_style_1">
            <div
              className="cs_slider_prev cs_center slick-arrow"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
              <path d="M0.465801 13.0789L11.6023 23.5789C11.9023 23.8522 12.3042 24.0034 12.7213 23.9999C13.1385 23.9965 13.5375 23.8388 13.8325 23.5607C14.1274 23.2825 14.2947 22.9063 14.2984 22.513C14.302 22.1197 14.1416 21.7408 13.8518 21.4579L5.43108 13.5184H33.4091C33.831 13.5184 34.2357 13.3604 34.534 13.0791C34.8324 12.7978 35 12.4163 35 12.0184C35 11.6206 34.8324 11.2391 34.534 10.9578C34.2357 10.6765 33.831 10.5184 33.4091 10.5184H5.43108L13.8518 2.57893C14.0038 2.44056 14.125 2.27505 14.2084 2.09204C14.2917 1.90903 14.3356 1.7122 14.3375 1.51303C14.3393 1.31386 14.2991 1.11635 14.2191 0.932003C14.1391 0.747658 14.0209 0.580179 13.8716 0.439341C13.7222 0.298502 13.5446 0.18712 13.349 0.111698C13.1535 0.0362778 12.944 -0.00167465 12.7328 5.53131e-05C12.5215 0.00178719 12.3128 0.0431671 12.1187 0.12178C11.9246 0.200394 11.749 0.314665 11.6023 0.457932L0.465801 10.9579C0.167549 11.2392 0 11.6207 0 12.0184C0 12.4162 0.167549 12.7976 0.465801 13.0789Z" fill="currentColor"/>
              </svg>
            </div>
            <div
              className="cs_slider_next cs_center slick-arrow"
              onClick={() => sliderRef.current.slickNext()}
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
              <path d="M34.5342 13.0789L23.3977 23.5789C23.0977 23.8522 22.6958 24.0034 22.2787 23.9999C21.8615 23.9965 21.4625 23.8388 21.1675 23.5607C20.8726 23.2825 20.7053 22.9063 20.7016 22.513C20.698 22.1197 20.8584 21.7408 21.1482 21.4579L29.5689 13.5184H1.59092C1.16899 13.5184 0.764327 13.3604 0.465971 13.0791C0.167615 12.7978 0 12.4163 0 12.0184C0 11.6206 0.167615 11.2391 0.465971 10.9578C0.764327 10.6765 1.16899 10.5184 1.59092 10.5184H29.5689L21.1482 2.57893C20.9962 2.44056 20.875 2.27505 20.7916 2.09204C20.7083 1.90903 20.6644 1.7122 20.6625 1.51303C20.6607 1.31386 20.7009 1.11635 20.7809 0.932003C20.8609 0.747658 20.9791 0.580179 21.1284 0.439341C21.2778 0.298502 21.4554 0.18712 21.651 0.111698C21.8465 0.0362778 22.056 -0.00167465 22.2672 5.53131e-05C22.4785 0.00178719 22.6872 0.0431671 22.8813 0.12178C23.0754 0.200394 23.251 0.314665 23.3977 0.457932L34.5342 10.9579C34.8325 11.2392 35 11.6207 35 12.0184C35 12.4162 34.8325 12.7976 34.5342 13.0789Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className="cs_slider_activate">
          {testimonials.map((item, index) => (
            <div key={index}>
              <div className="cs_testimonial cs_style_2">
                <div className="cs_testimonial_text cs_radius_25 cs_white_bg cs_fs_24">
                  <div className="cs_quote_icon">
                    <svg width="50" height="38" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5536 13.8357C39.4529 12.689 39.5299 9.57182 42.365 5.23719C42.5794 4.9101 42.5405 4.46895 42.2742 4.18851C41.1184 2.97105 40.4027 2.20281 39.9008 1.66522C39.2408 0.956385 38.9395 0.633403 38.4984 0.212251C38.204 -0.0665425 37.7584 -0.0713971 37.4609 0.201883C32.5193 4.73095 27.0307 14.0896 27.8249 25.5554C28.2903 32.2879 32.9527 37.1746 38.9105 37.1746C45.0246 37.1746 49.999 31.9359 49.999 25.4959C49.999 19.2832 45.3695 14.1884 39.5536 13.8357ZM38.9105 35.5288C33.7941 35.5288 29.788 31.2842 29.3829 25.4364C28.4895 12.5411 35.7671 4.1644 37.9659 1.94648C38.1803 2.16907 38.4252 2.43099 38.7861 2.81833C39.2209 3.28441 39.8161 3.92247 40.7163 4.87397C37.2747 10.459 37.924 14.4384 38.2085 15.0089C38.3436 15.2798 38.6205 15.4622 38.9105 15.4622C44.1633 15.4622 48.4365 19.9631 48.4365 25.4959C48.4365 31.0279 44.1633 35.5288 38.9105 35.5288Z" fill="#307BC4"></path>
                        <path d="M11.8071 13.8355C11.7056 12.692 11.7803 9.57721 14.6185 5.23699C14.8321 4.90989 14.7939 4.46874 14.5277 4.1883C13.3741 2.97323 12.6592 2.20581 12.158 1.66822C11.4958 0.957825 11.1936 0.633938 10.7527 0.212046C10.4582 -0.0667479 10.0126 -0.0707801 9.7151 0.200854C4.77354 4.72993 -0.715834 14.087 0.0768219 25.5552C0.543775 32.2868 5.20682 37.1744 11.1646 37.1744C17.2789 37.1744 22.2532 31.9357 22.2532 25.4957C22.2532 19.2823 17.6237 14.1867 11.8071 13.8355ZM11.1646 35.5286C6.04917 35.5286 2.04065 31.284 1.63479 25.4354C0.743697 12.5369 8.02135 4.16337 10.2201 1.94627C10.4353 2.16886 10.681 2.43243 11.0426 2.82059C11.4767 3.28667 12.071 3.92391 12.9698 4.87377C9.52815 10.4596 10.1774 14.4381 10.462 15.0079C10.5971 15.2787 10.8747 15.462 11.1646 15.462C16.4175 15.462 20.6907 19.9629 20.6907 25.4957C20.6907 31.0277 16.4175 35.5286 11.1646 35.5286Z" fill="#307BC4"></path>
                      </svg>
                  </div>
                  <p>{item.text}</p>
                  <div className="cs_rating" data-rating={item.rating}>
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
                          <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/>
                        </svg>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="cs_testimonial_meta">
                  <div className="cs_testimonial_avatar">
                    <img src={item.avatar} alt={item.name} />
                  </div>
                  <div className="cs_testimonial_meta_right">
                    <h3 className="cs_fs_24 cs_semibold cs_heading_font mb-0">
                      {item.name}
                    </h3>
                    <p className="cs_heading_color m-0">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
