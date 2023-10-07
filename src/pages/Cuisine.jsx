import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Cuisine() {
  const [cuisine, setType] = useState([]);
  let params = useParams();
  const [numItemsToShow, setNumItemsToShow] = useState(6);

  const getType = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=95310c9aba75471fbbbac22fed3c293f&cuisine=${name}&number=${numItemsToShow}`);
    const recipes = await data.json();
    setType(recipes.results);
  };

  useEffect(() => {
    getType(params.type);
  },[params.type, numItemsToShow]);

  const displayedCuisine = cuisine;

  return (
    <Grid>
      <button onClick={() => setNumItemsToShow(6)}>Show 6 items</button>
      <button onClick={() => setNumItemsToShow(15)}>Show 15 items</button>
      <button onClick={() => setNumItemsToShow(24)}>Show 24 items</button>
      
      {displayedCuisine.map((item) => {
        return(
          <Box key={item.id}>
            <Link to={"/recipe/"+item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Box>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  button {
    text-align: center;
    padding: 0.5rem 2rem;
    color: #6D6875;
    background: white;
    border: 3px solid black;
    margin-left: -0.7rem;
    width: 400px;
    margin-top: -0.5rem;
    margin-bottom: -1.5rem;
  }
`;

const Box = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;