import React, { Component } from "react";
import Link from "next/link";

import { CardBody, CardText, Card, CardTitle, CardImg } from "reactstrap";

import ProjectCardDetail from "./projectCardDetail";

class ProjectCard extends Component {
  state = {
    isOpen: false,
  };

  handleTaggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  shortenText = (text) => {
    if (text && text.length > 40) {
      return text.substr(0, 40) + "...";
    }

    return text;
  };

  render() {
    const { project, children } = this.props;
    const id = project._id;
    const { isOpen } = this.state;
    return (
      <div>
        <ProjectCardDetail
          isOpen={isOpen}
          project={project}
          toggle={this.handleTaggle}
        />
        <Card className="project-card">
          <div onClick={this.handleTaggle} className="project-card-image">
            <CardImg
              id="card-image"
              className="project-card-image-img"
              src={project.img}
              alt="Card image cap"
            />
          </div>
          <div id="card-body-container" className="card-body-container">
            <CardBody>
              <CardTitle className="project-card-title">
                {project.title}
              </CardTitle>
              <CardText className="project-card-text">
                {this.shortenText(project.subtitle)}
              </CardText>
              <div className="project-card-decoration-long"></div>

              <CardText className="project-card-main">
                {project.description}
              </CardText>

              <div className="project-card-decoration-long"></div>
              <div className="card-body-buttons">
                {project.demoLink ? (
                  <Link href={project.demoLink}>
                    <a target="_blank" className={`card-body-buttons-btn`}>
                      Demo
                    </a>
                  </Link>
                ) : (
                  <Link href={project.github}>
                    <a target="_blank" className={`card-body-buttons-btn`}>
                      Github
                    </a>
                  </Link>
                )}
                <Link href={"projects/[id]"} as={`projects/${project._id}`}>
                  <a className={`card-body-buttons-btn`}>More</a>
                </Link>
              </div>
            </CardBody>
          </div>
          {children}
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
