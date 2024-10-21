import React, { Component } from 'react'


export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        {/* testing comment */}
                        <h2>Undergraduate Research Assistant <span>August 2024 - present</span></h2>
                        <p>Researched novel wearable biotechnology in collaboration with multiple College of Engineering faculty and graduate students to improve access to medical attention </p>
                        <p>Explored wearable electronics to predict ACL injuries and the risk of developing early knee osteoarthritis </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Engineering Intern <span>May 2024 - August 2024</span></h2>
                        <p>Facilitated a research project focused on the development of a renewable energy system; collaborated with senior engineers to analyze data, identify key inefficiencies, and propose innovative solutions </p>
                        <p>Cataloged 1,000+ steam parts by analyzing schematics, researching equipment, and performing steam flow calculations </p>
                        <p>Developed substation alarm system to enhance safety and operational efficiency; integrated advanced monitoring technologies to detect and alert for potential failures; identified 17 previously undetected anomalies </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>High School Research Assistant <span>May 2023 - August 2023</span></h2>
                        <p>Collaborated with a team of 3+ researchers to enhance ChatGPT’s ability to solve over 2,000 circular logic-based math problems, increasing accuracy by 29.7%</p> 
                        <p>Developed MathGPT, a tool integrated ChatGPT, to present solutions to these problems, and showcased the tools and findings to 10+ UNL faculty members at the Graduate Symposium</p>
                        <p>Co-authored the paper <a href="https://www.overleaf.com/read/scpjpznwwhkb#241652" target="_blank" rel="noopener noreferrer">Evaluating the Performance of LLMs in Solving Logical-Mathematical Word Problems</a>, summarizing research outcomes and insights into Large Language Models (LLMs).</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}