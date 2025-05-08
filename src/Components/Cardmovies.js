import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";


const Cardmovies = ({ el }) => {
  return (
    <div className="cardmovie">
      <Card style={{ width: '100%' }}>
        <Link to={`/nextmovies/${el.id}`}>
          <Card.Img variant="top" src={el.posterUrl} />
        </Link>
        <Card.Body>
          <div className="cardmovie-title">
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>{el.description}</Card.Text>
          </div>
          <Card.Text>
            <Rating name="read-only" value={el.rating} readOnly />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardmovies;
