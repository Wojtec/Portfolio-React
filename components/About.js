import {Row, Col, Container} from 'reactstrap';


const About = (props) => {

    return(
        <Container>
        <Row>
            <Col xs="12">
                <section className="about">
                <h1 className="about-title">
                    <span className="about-title-decoration"></span>
                    <span className="about-title-text">About</span>
                    <span className="about-title-decoration"></span>     
                    <span className="about-title-decoration-long"></span>               
                </h1>
                <article>
                <Row>
                    <Row>
                        <Col xs="12">
                            <div className="about-content">
                                <h1 className="about-content-title">
                                    My name is Wojtek Poninski. My passion is creative Web Application creating.
                                </h1>
                            </div>
                        </Col>
                    </Row>
                    <Col md="4">
                        <img className="about-content-image" src="images/hero600.png"></img>
                    </Col>
                    <Col md="8">
                    <div className="about-content-description">
                    <div className="about-content-description-dots">
                            <span className="about-content-description-dots-dot"></span>
                            <span className="about-content-description-dots-dot"></span>
                            <span className="about-content-description-dots-dot"></span>
                        </div>
                        <p>In October 2019 I decided to being Fullstack developer. Everyday I hard working to being closer to accomplish this goal.</p>
                        <p>I am finished Master Assembler School of Software Engineering in Barcelona.</p>
                        <p>I choosed this path of career because of my passions and interests. Creative creating new things and looking how they develop from nothing to something big gives me a lot of satisfaction and energy to carry on.</p>
                        <p>Curiosity how made changes and improvement will affect on final form of my work are something what always accompanies me during creating and development. Also this curiosity together with self-satisfaction are something what the most exiciting me in whole creating process. Currently I am during creating Clinic reservation system app React, Next.js, Node.js, Express and no relational database Mongodb.</p>
                        <p> Check my projects and personally see what I can do.</p>
                    </div>
                    </Col>
                </Row>      
                <div className="about-long"></div>   
                </article>                     
                </section>
            </Col>            
        </Row>
        </Container>
    )
}

export default About;






