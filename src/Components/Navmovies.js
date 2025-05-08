import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Addmovies from "./Addmovies";
import Filtermovies from "./Filtermovies";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from 'react-router-dom'

const Navmovies = ({
 titre ,note , setTitre, setnote ,
  movies, setMovies
}) => {
  const [currentPage, setCurrentPage] = useState("home");
const location = useLocation();

  return (

   <Navbar expand="lg" className="navbar-custom" style={{height:"65px"}}>
  <Container fluid>
    <Navbar.Brand className="navbar-brand-custom">Saif_Flix</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <div className="nav-links-custom">
        <Nav.Link
          as={Link}
          to="/"
          className="nav-link-custom"
          onClick={() => setCurrentPage("home")}
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/movies"
          className="nav-link-custom"
          onClick={() => setCurrentPage("movies")}
        >
          Movies
        </Nav.Link>
      </div>
      {
        location.pathname == "/movies" &&
        
        <Form className="form-tools"> 
        <Filtermovies note={note} setnote={setnote} setTitre={setTitre}  titre={titre}/>
        <Addmovies  movies={movies} setMovies={setMovies}/>
      </Form>
      }
      
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default Navmovies;
