import  { useEffect, useRef, useState } from "react";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";
import "./FunFacts.css"; // optional: if you want to style separately

const funFacts = [
  { count: 20, title: "Years of experience" },
  { count: 95, title: "Patient satisfaction rating" },
  { count: 5000, title: "Patients served annually" },
  { count: 10, title: "Healthcare providers on staff" },
  { count: 20, title: "Convenient locations in the area" },
];

const FunFacts = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);
  const odometerRefs = useRef([]);

  // Observe when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Trigger odometer count up
  useEffect(() => {
    if (startAnimation) {
      odometerRefs.current.forEach((el, index) => {
        if (el) {
          const odometer = new Odometer({
            el,
            value: 0,
            format: "(,ddd)",
            theme: "default",
          });
          odometer.update(funFacts[index].count);
        }
      });
    }
  }, [startAnimation]);

  return (
    <div className="funfacts-container">
      <div
        ref={sectionRef}
        className="cs_funfact_1_wrap cs_radius_30 cs_bg_filed funfact-banner"
        data-src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/fun_fact_bg.jpeg"
        style={{
          backgroundImage:
            'url("https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/fun_fact_bg.jpeg")',
        }}
      >
        {funFacts.map((fact, index) => (
          <div key={index} className="cs_funfact cs_style_1 text-center">
            <h2 className="cs_funfact_number cs_fs_72b">
              <span
                ref={(el) => (odometerRefs.current[index] = el)}
                className="odometer odometer-auto-theme"
                data-count-to={fact.count}
              >
                0
              </span>
              +
            </h2>
            <p className="cs_funfact_title m-0 cs_heading_color">
              {fact.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunFacts;
