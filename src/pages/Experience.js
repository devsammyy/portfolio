import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import Briefcase from "@material-ui/icons/Work";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          date="2012 - 2018"
          icon={<SchoolIcon />}
          iconStyle={{ background: "#000", color: "#fff" }}
          className="vertical-timeline-element--education"
        >
          <h3 className="vertical-timeline-element-title">
            St. Anthony Secondary School, Ilorin, Kwara State
          </h3>
          <p>Secondary Education</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2018 - Present"
          icon={<Briefcase />}
          iconStyle={{ background: "#000", color: "#fff" }}
          className="vertical-timeline-element--education"
        >
          <h3 className="vertical-timeline-element-title">Freelance</h3>
          <p>Developed Personal Frontend projects</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2022 - Present"
          icon={<Briefcase />}
          iconStyle={{ background: "#000", color: "#fff" }}
          className="vertical-timeline-element--education"
        >
          <h3 className="vertical-timeline-element-title">
            FrontEnd Engineer - Yetti Techonologies
          </h3>
          <p>Developed frontend with Frontend Engineering team</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
