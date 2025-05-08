import { Rating } from '@mui/material';
const Filtermovies = ({setTitre,setnote}) => {
  return (
          <div id='fifi'>
  <input type="text" placeholder="Search" onChange={(e)=> setTitre(e.target.value)}/>
  <br/>
      <Rating onChange={(e)=> setnote(e.target.value)} style={{color:'green'}}/>
    </div>

  )
}

export default Filtermovies
