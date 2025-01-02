import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "React-Native",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Flask",
  "Python",
  "SQL",
  "GraphQL",
  "PostgreSQL",
  "TimescaleDB",
];

const labelsSecond = [
  "Grafana",
  "Prometheus",
  "Docker",
  "Kubernetes",
  "AWS",
  "Linux",
  "Istio",
  "EMQX",
  "Spark",
  "Apache Nifi",
  "Kiali",
  "Kafka",
  "CircleCI",
  "ArgoCD",
  "MLFlow",
  "MLServer",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Senior Software Engineer</h3>
            <p style={{ textAlign: "justify" }}>
              I have some experience developing end-to-end web and mobile
              applications, using React for web applications and React Native
              for mobile, providing highly responsive and dynamic user
              interfaces. On the backend, I used Node.js to create robust and
              scalable APIs, working with RESTful and GraphQL APIs for more
              flexible queries. In terms of data management, I have knowledge in
              SQL and NoSQL databases, choosing the appropriate tool according
              to the project's needs.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Infrastructure & Automation</h3>
            <p style={{ textAlign: "justify" }}>
              I developed some ELT processes for real-time ingestion of large
              volumes of data from IoT devices, performing transformations,
              inferences, and classifications using MLOps practices. These
              systems are designed to be highly scalable and resilient,
              utilizing cutting-edge tooling for containerized services like
              Kubernetes to ensure the reliability and performance needed to
              handle massive data. Additionally, I was responsible for the
              entire CI/CD pipeline, ensuring continuous integration and
              efficient delivery of new features and improvements.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
