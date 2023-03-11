import { Col,Card, Button } from "react-bootstrap";
import "./Projects.css";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      {/* <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div> */}
      
      <Card style={{ width: '20rem' }} className= 'proj-imgbx' >
      <Card.Img variant="top" style={{ width: '20rem' }} src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Button variant="primary">Deployed Link</Button><Button className="mx-3" variant="primary">Github Link</Button>
      </Card.Body>
    </Card>

    </Col>
  );
};
