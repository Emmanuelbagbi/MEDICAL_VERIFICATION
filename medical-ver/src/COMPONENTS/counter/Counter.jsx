import  './Counter.css'

import  { useState, useEffect } from 'react';


const StatCounter = ({ end, duration = 3000, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(end, Math.floor((progress / duration) * end));
      setCount(increment);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <div className="cs_hero_funfact_col">
      <h3 className="cs_white_color cs_fs_72">
        <span className="odometer">{count}</span>
        {label.includes('Years') || label.includes('Healthcare') ? '+' : '%'}
      </h3>
      <p className="cs_white_color mb-0">{label}</p>
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
    <>
      <div className="cs_hero_funfact_wrapper">
        {stats.map((stat, index) => (
          <StatCounter key={index} end={stat.end} label={stat.label} />
        ))}
      </div>
    </>
  );
};

export default HealthcareStats;