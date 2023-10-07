import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

function Searched() {
    const [searchedRecipe, setSearched] = useState([]);
    let params = useParams();

    const getSearched = async (input) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=95310c9aba75471fbbbac22fed3c293f&query=${input}&number=9`);
        const recipes = await data.json();
        setSearched(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

    return (
        <Grid>
            {searchedRecipe.map((item) => {
                return(
                    <Box key={item.id}>
                        <Link to={"/recipe/"+item.id}>
                            <img src={item.image} alt=" " />
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
`;

const Box = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched