import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "C/C++_skill",
          content: "C/C++",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Java_skill",
          content: "Java",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Go_skill",
          content: "Go",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "Shell scripting_skill",
          content: "Shell scripting",
          porcentage: "60%",
          value: "60"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a third year iMtech student at IIIT Bangalore. I am interested in the field of cybersecurity and looking forward to make a career out of it. I like to keep myself updated with the latest trends and technologies. I also find myself very much interested in networking, cryptography, and have been exploring various other fields in the domain of cybersecurity since the past two years."
        },
        {
          id: "second-p-about",
          content:
            "I like to read books in my free time. I am a music lover and always listen to music to relieve my work stress."
        },
        {
          id: "third-p-about",
          content:
          <center><button type="submit" className="button button-a button-big button-rouded button-clr"><a href={"https://drive.google.com/file/d/1xsFtwCcJJNmor3kSuuqFRKk5mb8I1pvY/view?usp=sharing"} target="_blank" rel="noopener noreferrer">Resume</a></button></center>
        } 
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                    <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Skills</h5>
                      </div>
                    </div>
                  </div>
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;