import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './StartBrandSection.css'

function StartBrandSection() {
    const brandImages = [
    "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_1.png",
    "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_2.png",
    "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_3.png",
    "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_4.png",
    "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_5.png",
    "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_6.png",
    "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_7.png",
    "https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brand_8.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
    };



  return (
    <>
    <div className="cs_height_200 cs_height_xl_150 cs_height_lg_110"></div>
    <div className="cs_brand_carousel">
      <div className="cs_slider_activate">
        <Slider {...settings}>
          {brandImages.map((src, index) => (
            <div key={index} className="cs_slide">
              <div className="cs_brands cs_style_2">
                <img decoding="async" src={src} alt={`brand_${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="cs_pagination cs_style_1"></div>
    </div>
        <div className="cs_height_200 cs_height_xl_150 cs_height_lg_110"></div>
    </>
  )
}

export default StartBrandSection