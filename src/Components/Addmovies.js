import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
const Addmovies = ({movies,setMovies}) => {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[posterUrl, setposterUrl] = useState("");
    const[rating, setRating] = useState(0);  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const resetState=()=>{
        setTitle('')
      setDescription('')
      setposterUrl('')
      setRating(0)
  }
    const handleNewfilms = () => {
      if(title !="" && description != "" &&posterUrl !="" && rating!= 0) {
         setMovies([...movies, {title, description, posterUrl, rating }]);
          resetState()
      }else{
        alert("3abihom el koll yali matehchimch "); 
       
resetState()      }
      handleClose();
    }
  return (
    <div>

   <Button variant="info"onClick={handleShow}>Add newmovies</Button>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Newfilms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

<Form.Group className="mb-3">
    <Form.Label>Title</Form.Label>
    <Form.Control onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title" />
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Description</Form.Label>
    <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Image</Form.Label>
    <Form.Control onChange={(e)=> setposterUrl(e.target.value)} type="text" placeholder="Enter image" />
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Rating</Form.Label>
    <br/>
    <Rating onChange={(e)=> setRating(e.target.value)}  />
</Form.Group>




</Form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNewfilms}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
 
    );
  }


export default Addmovies
