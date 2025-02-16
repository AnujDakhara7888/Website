/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';


const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text" style={{ color: '#00bcd4 ' }}>About Me</h1>
          

          {/* Photo Section */}
        <PageWrapper className="photo-section">
          <img
            src="/img/Anuj.png"
            alt="Anuj Sureshbhai Dakhara"
            className="profile-photo"
          />
        </PageWrapper>

        {/* Vision Statement */}
        <PageWrapper className="vision-section">
          <h1 className="vision-title" style={{ color: '#00bcd4 ' }}>Vision</h1>
          <p>
          I envision a world in which technology bridges gaps, simplifies lives, and unlocks possibilities for all. My goal is to build tools and 
          apps that are not only functional but meaningful—solutions that ignite innovation and result in a positive impact on society. 
          By integrating creativity, technical expertise, and a human-centered mindset, I aim to contribute to projects that address 
          real-world challenges and ideas to life.
          </p>
        </PageWrapper>

        <h3 className="intro__text" style={{ color: '#00bcd4 ' }}>Education</h3> <br />
          <div className="education-section">
            <div className="education-card">
              <div className="card-header">
                <h4>Stony Brook University</h4>
                <p className="degree">Honors in Computer Science & Applied Mathematics</p>
                <p className="date">Aug 2022 - May 2026</p>
              </div>
              <div className="card-body">
                <div className="info">
                  <div>
                    <span>🎓 GPA</span>
                    <p>3.78/4.00</p>
                  </div>
                  <div>
                    <span>🌟 Achievement</span>
                    <p>Dean's List</p>
                  </div>
                  <div>
                    <span>📍 Location</span>
                    <p>Stony Brook, NY</p>
                  </div>
                </div>
                <div className="coursework">
                  <h5>Key Coursework</h5>
                  <ul>
                    <li>Data Structures</li>
                    <li>Software Engineering</li>
                    <li>Artificial Intelligence</li>
                    <li>Machine Learning</li>
                    <li>Natural Language Processing</li>
                    <li>System Fundamentals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        {/* Skills Section */}
        <PageWrapper className="skills-section">
  <h2 className="skills-title" style={{ color: '#00bcd4' }}>Skills</h2>
  <div className="skills-grid">
    {/* Languages */}
    <div className="skill-category">
      <h3>Languages</h3>
      <div className="skill-items">
        <div className="skill-item">
          <img src="/img/TS.png" alt="TypeScript" className="skill-icon" />
          <span>TypeScript</span>
        </div>
        <div className="skill-item">
          <img src="/img/JavaScript.png" alt="JavaScript" className="skill-icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill-item">
          <img src="/img/php.png" alt="PHP" className="skill-icon" />
          <span>PHP</span>
        </div>
        <div className="skill-item">
          <img src="/img/python.png" alt="Python" className="skill-icon" />
          <span>Python</span>
        </div>
        <div className="skill-item">
          <img src="/img/ruby.png" alt="Ruby" className="skill-icon" />
          <span>Ruby</span>
        </div>
      </div>
    </div>

    {/* Front-End */}
    <div className="skill-category">
      <h3>Front-End</h3>
      <div className="skill-items">
        <div className="skill-item">
          <img src="/img/react.png" alt="React" className="skill-icon" />
          <span>React</span>
        </div>
        <div className="skill-item">
          <img src="/img/react-native.png" alt="React Native" className="skill-icon" />
          <span>React Native</span>
        </div>
        <div className="skill-item">
          <img src="/img/tailwind.png" alt="Tailwind" className="skill-icon" />
          <span>Tailwind</span>
        </div>
      </div>
    </div>

    {/* Back-End */}
    <div className="skill-category">
      <h3>Back-End</h3>
      <div className="skill-items">
        <div className="skill-item">
          <img src="/img/node.png" alt="Node.js" className="skill-icon" />
          <span>Node.js</span>
        </div>
        <div className="skill-item">
          <img src="/img/express.png" alt="Express" className="skill-icon" />
          <span>Express</span>
        </div>
        <div className="skill-item">
          <img src="/img/C.png" alt="C" className="skill-icon" />
          <span>C</span>
        </div>
        <div className="skill-item">
          <img src="/img/Java.png" alt="Java" className="skill-icon" />
          <span>Java</span>
        </div>
      </div>
    </div>

    {/* Cloud */}
    <div className="skill-category">
      <h3>Cloud</h3>
      <div className="skill-items">
        <div className="skill-item">
          <img src="/img/aws.png" alt="AWS" className="skill-icon" />
          <span>AWS</span>
        </div>
        <div className="skill-item">
          <img src="/img/googlecloud.png" alt="Google Cloud" className="skill-icon" />
          <span>Google Cloud</span>
        </div>
        <div className="skill-item">
          <img src="/img/vercel.png" alt="Vercel" className="skill-icon" />
          <span>Vercel</span>
        </div>
        <div className="skill-item">
          <img src="/img/heroku.png" alt="Heroku" className="skill-icon" />
          <span>Heroku</span>
        </div>
      </div>
    </div>

    {/* Databases */}
    <div className="skill-category">
      <h3>Databases</h3>
      <div className="skill-items">
        <div className="skill-item">
          <img src="/img/mongodb.png" alt="MongoDB" className="skill-icon" />
          <span>MongoDB</span>
        </div>
        <div className="skill-item">
          <img src="/img/dynamo.png" alt="Dynamo" className="skill-icon" />
          <span>Amazon Dyanmo DB</span>
        </div>
        <div className="skill-item">
          <img src="/img/sql.png" alt="MySQL" className="skill-icon" />
          <span>MySQL</span>
        </div>
        <div className="skill-item">
          <img src="/img/redis.png" alt="Redis" className="skill-icon" />
          <span>Redis</span>
        </div>
      </div>
    </div>
  </div>
</PageWrapper>



        <h3 className="intro__text" style={{ color: '#00bcd4  ' }}>Work Experience</h3> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <p>
                  <strong>
                  Research Assistant 
                  </strong> 
                </p>
                <p>
                <span style={{ fontSize: "1.2em", fontWeight: "bold", color: "#4caf50 " }}>
                  Stony Brook University
                </span>
                  <strong><span style={{ marginLeft: "533px" }}> August 2023 - Present</span></strong>
                </p>
                <p>
                Designed and optimized a high-performance MERN Stack backend, reducing data latency by 11% and enhancing processing 
                efficiency by 16% through advanced caching and optimized query execution. Integrated the Apple Health API to enable secure, 
                real-time patient data access, ensuring seamless interoperability within healthcare systems.
                <br/>
                Developed a HIPAA-compliant, modular API with robust encryption, cutting response times by 12% while maintaining 
                data security and compliance. Led frontend collaboration in Figma, streamlining design-to-development workflows for
                 a seamless user experience. Additionally, automated report generation using Excel VBA, boosting report delivery speed
                  by 20% and improving operational efficiency.
                </p>
              </li>
              <li>
                <p>
                  <strong>Software Development Intern{' '}</strong>
                </p>
                <p>
                <span style={{ fontSize: "1.2em", fontWeight: "bold", color: "#4caf50 " }}>
                  Pulp
                </span>
                <strong><span style={{ marginLeft: "637px" }}>August 2024 - December 2024</span></strong>
                </p>
                <p>
                Harnessing the power of modern web technologies, I developed a chatbot SDK using React and Next.js, optimizing 
                cross-platform integration and reducing overall development time by 25%. By designing an intuitive and scalable interface, 
                I ensured seamless adaptability across diverse applications, enhancing both user experience and developer efficiency.
                <br/>
                Expanding into mobile innovation, I engineered a React Native app featuring a gamified scoring system and a 
                social media-style UI, which boosted user engagement by 22%. Additionally, I implemented an AI-powered highlighter 
                to extract and store critical data, improving data accuracy by 18% while automating key processes for better efficiency.
                </p>
              </li>

              <li>
              <p>
                  <strong>Software Engineering Intern{' '}</strong>
                </p>
                <p>
                <span style={{ fontSize: "1.2em", fontWeight: "bold", color: "#4caf50 " }}>
                  Social 101
                </span>
                <strong><span style={{ marginLeft: "638px" }}>May 2023 - August 2023</span></strong>
                </p>
                <p>
                Engineered and optimized RESTful API endpoints using Node.js and Express, achieving a 7% reduction in response latency 
                and enhancing data retrieval efficiency. Leveraged MongoDB aggregations to enable real-time analytics and optimize data 
                storage for high-performance applications.
                <br/>
                Integrated third-party APIs (Facebook, Instagram) to automate social media insights and reporting, improving campaign 
                monitoring accuracy by 8%. Developed secure authentication mechanisms using JWT and OAuth 2.0, ensuring scalability 
                and seamless user workflows across multiple platforms.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>
      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    text-align: center;
  }
    .photo-section {
    text-align: center;
    margin-bottom: 2rem;
  }
    .education-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background:none;
}

.education-card {
  background:transparent;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  padding: 20px;
  color: #333;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.card-header {
  background:none; /* Custom header color */
  color: #fff;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  margin-bottom: 20px;
}

.card-header h4 {
  font-size: 1.8rem;
  margin: 0;
  font-weight: bold;
}

.card-header .degree {
  font-size: 1.2rem;
  margin: 5px 0;
}

.card-header .date {
  font-size: 1rem;
  color: #d1e4ff;
}

.card-body .info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.card-body .info div {
  background:none;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.card-body .info span {
  display: block;
  font-size: 0.9rem;
  color: #888;
}

.card-body .info p {
  font-size: 1rem;
  font-weight: bold;
  margin: 5px 0 0;
  color: #333;
}

.coursework {
  margin-top: 15px;
}

.coursework h5 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #ffc107 ;
}

.coursework ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.coursework ul li {
  background: #f6faff;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.95rem;
  text-align: center;
  color: #333;
}



  .profile-photo {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 3px solid var(--cw);
  }
  .vision-section {
    text-align: center;
    margin-bottom: 2rem;
  }
  .vision-title {
    font-size: var(--font-x-lg);
    font-weight: bold;
    margin-bottom: 1rem;
  }
    
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
    .skills-section {
    padding: 2rem 0;
    
    .skills-title {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }

    .skill-category {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      h3 {
        color: #00bcd4;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        font-weight: 600;
      }
    }

    .skill-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1rem;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.93);
      border-radius: 8px;
      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-2px);
      }

      .skill-icon {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }

      span {
        font-size: 0.9rem;
        text-align: center;
        color: var(--text-color);
      }
    }
  }

  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }

    .skill-items {
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    }
  }
`;

export default About;
