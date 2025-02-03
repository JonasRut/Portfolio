import React, {useEffect} from 'react';
import { 
  VerticalTimeline, VerticalTimelineElement 
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TagManager from 'react-gtm-module';

function Experience() {
  useEffect(() => {
    const tagManagerArgs = {
        gtmId: 'GTM-XXXXXX'
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {/* <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}>
            <h3 className="vetical-timeline-element-title">
              Biglerville High School 
            </h3>
            <h4 className="vertical-timeline-subtitle">
              High School Diploma received 06/05/23
            </h4>
            <p>161 N Main St, Biglerville, PA 17307</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            date="June 2021 - August 2022 (summers)"
            iconStyle={{background: "#e9d35b", color: "#fff"}}
            icon={<WorkIcon />}>
            <h3 className="vetical-timeline-element-title">
              Giant Food Stores
            </h3>
            <h4 className="vertical-timeline-subtitle">
              Front-end Associate
            </h4>
            <p>44 Natural Springs Rd, Gettysburg, PA 17325</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date="2019 - 2022 (seasonal)"
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}>
            <h3 className="vetical-timeline-element-title">
              National Apple Harvest Festival Characters
            </h3>
            <h4 className="vertical-timeline-subtitle">
              Johnny Appleseed / Honeybee 
            </h4>
            <p>(717) 677-9413</p>
          </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  )
}

export default Experience