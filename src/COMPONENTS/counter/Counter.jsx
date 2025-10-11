import { useEffect } from "react";
import "./Counter.css";

// Load Odometer library from CDN
// (You can also npm install odometer if you prefer)
import "odometer/themes/odometer-theme-default.css";
import Odometer from "odometer";

const StatCounter = ({ end, label }) => {
  useEffect(() => {
    const el = document.querySelector(`#odometer-${label.replace(/\s+/g, "-")}`);
    if (el) {
      const odometer = new Odometer({
        el: el,
        value: 0,
        format: "(,ddd)", // adds commas for large numbers
        duration: 2000,
      });

      // IntersectionObserver to trigger animation only when visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              odometer.update(end);
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.6 }
      );

      observer.observe(el);
    }
  }, [end, label]);

  return (
    <div className="cs_hero_funfact_col">
      <h3 className="cs_white_color cs_fs_72">
        <span id={`odometer-${label.replace(/\s+/g, "-")}`} className="odometer">
          0
        </span>
        {label.includes("Years") || label.includes("Healthcare") ? "+" : "+"}
      </h3>
      <p className="mb-01">{label}</p>
    </div>
  );
};

const HealthcareStats = () => {
  const stats = [
    { end: 20, label: "Years of experience" },
    { end: 95, label: "Patient satisfaction rating" },
    { end: 5000, label: "Patients served annually" },
    { end: 10, label: "Healthcare providers on staff" },
  ];

  return (
    <div className="cs_hero_funfact_wrapper">
      {stats.map((stat, index) => (
        <StatCounter key={index} end={stat.end} label={stat.label} />
      ))}
    </div>
  );
};

export default HealthcareStats;
