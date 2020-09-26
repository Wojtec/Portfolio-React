import { Row, Col, Container } from 'reactstrap';
import { getProjects } from '../actions';
import React, { Component } from 'react';
import ProjectCard from './project/projectCard';

class Projects extends Component {

    state = {
        projects: []
    }

async componentDidMount(){

    const data = await getProjects();
    this.setState({projects: data});

}


renderPosts(projectsData){

    return ( projectsData.map((project, index) => {
        return (
            <Col md="4" key={index}>
                <ProjectCard project={project}/>
            </Col>
        )
    }))
}

render() {
    const { projects } = this.state;

    return(
        <section id="/projects" className="background-projects">
            <Row >
                <Col xs="12">
                        <Container>
                            <div className="projects">
                                <h2 className="projects-title">
                                    <span className="projects-title-decoration"></span>
                                    <span className="projects-title-text">Projects</span>
                                    <span className="projects-title-decoration"></span>     
                                    <span className="projects-title-decoration-long"></span>               
                                </h2>
                                <article>
                                <Row>
                                {this.renderPosts(projects)}
                                </Row>
                                </article>                     
                            </div>
                        </Container>
                </Col>            
            </Row>
        </section>
    )
  }
}

export default Projects;





