import { Rating } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Moviesnext = ({ movies }) => {
  const { id } = useParams();
  const fond = movies.find((el) => el.id == id);
  const navigate = useNavigate();

  return (
    <div className="moviesnext-container">
      <div className="left-side">
        <h1>{fond.title}</h1>
        <img src={fond.posterUrl} alt={fond.title} />
        <div className="rating">
          <Rating name="read-only" value={fond.rating} readOnly />
        </div>
        <p>{fond.description}</p>
      </div>

      <div className="right-side">
        <iframe
          width="400"
          height="250"
          src={fond.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    </div>
  );
};

export default Moviesnext;
