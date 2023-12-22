import { Col, Card, Button } from "react-bootstrap";
import "./Projects.css";

export const ProjectCard = ({ title, tech, description, imgUrl, deployedLink, githubLink }) => {
  return (
    <Col sm={6} md={4}>
      <Card style={{ width: '23rem' }} className='proj-imgbx' >
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body className="proj-txtx">
          <Card.Title className='project-title' >{title}</Card.Title>
          <Card.Text className="tech_used">
            <span>Tech Used :</span>  {tech}
          </Card.Text>
          <Card.Text className='project-desc' >
            {description}
          </Card.Text>
          <a href={deployedLink} rel="noreferrer" target='_blank' > <Button type='button' >Live</Button></a>
          <a href={githubLink} rel="noreferrer" target='_blank' > <Button className="mx-3" type='button' >Github</Button></a>

        </Card.Body>
      </Card>

    </Col>
  );
};
