import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              DevOps Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              LACETI, Brazil
            </h4>
            <p>
              As a Technical Lead and Devops Developer, I developed ELT
              pipelines for data cleaning and storage, in addition to
              orchestrating MLOps pipelines for machine learning workflows,
              ensuring efficiency and accuracy in analysis processes
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Tech Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">
              LACETI, Brazil
            </h4>
            <p>
              As a software technical leader, I was responsible for guiding the
              project development team, defining solid architectures, performing
              code reviews, resolving technical challenges, collaborating with
              project managers, promoting professional growth, and ensuring the
              quality and efficiency of the development process through a clear
              communication
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              LACETI, Brazil
            </h4>
            <p>
              Contributed to the development of a manufacturing execution system
              (MES) for a large company in the automotive battery sector,
              optimizing production processes and real-time monitoring at the
              Embedded Computing and Industrial Technologies Laboratory (LACETI)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBuildingColumns} />}
          >
            <h3 className="vertical-timeline-element-title">
              Master's degree in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pernambuco, Brazil
            </h4>
            <p>
              Master's degree with emphasis on performance evaluation of
              distributed systems at the Federal University of Pernambuco (UFPE)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack Developer in COVID 19 Vaccination Control Project
            </h3>
            <h4 className="vertical-timeline-element-subtitle">LMTS, Brazil</h4>
            <p>
              Development of a control system for scheduling COVID vaccines for
              the city of Garanhuns-PE
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack Developer in Irrigation Grid Project
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              UFRPE, Brazil
            </h4>
            <p>Evapotranspiration Irrigation Systems</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBuildingColumns} />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor's Degree in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pernambuco, Brazil
            </h4>
            <p>
              Graduated from the Federal Rural University of Pernambuco (UFRPE)
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
