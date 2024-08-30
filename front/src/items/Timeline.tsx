import React, { useEffect, useState } from 'react';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'; // Example icon
import timelineData from './Timeline.json'; // Import your JSON data

const Timeline: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Load the timeline data from JSON
    setData(timelineData);
  }, []);

  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      {data.map((item, index) => (
        <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-content">
            <div className="timeline-card">
              <div className="timeline-card-title">{item.title}</div>
              <div className="timeline-card-subtitle">{item.subtitle}</div>
              <div className="timeline-card-para">{item.para}</div>
            </div>
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faCircle} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
