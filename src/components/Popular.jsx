import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularRecipe();
  }, []);

  const getPopularRecipe = async () => {
    const checkLocal = localStorage.getItem("popular");
    if(checkLocal) {
      setPopular(JSON.parse(checkLocal));
    } else {
      //=${process.env.RECIPE_API_KEY}
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=95310c9aba75471fbbbac22fed3c293f&number=10`);
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }

  }

  return (
    <div>
      <Wrap>
        <h1>Popular Items</h1>
        <Splide options={{
          perPage: 3,
          arrows: true,
          pagination: true,
          drag: "free",
          gap: "5rem",
        }}>
          {popular.map((recipe) => {
            return(
              <SplideSlide key={recipe.id}>
                <Box>
                  <Link to={"/recipe/"+recipe.id}>
                    <h4>{recipe.title}</h4>
                    <img src={recipe.image} alt={recipe.title} />
                    {/*<Gradient /> */}
                  </Link>
                </Box>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrap>
    </div>
  )
}

const Wrap = styled.div`
  margin: 1rem 0rem;
  h1 {
    text-align: center;
  }
`;

const Box = styled.div`
  min-height: 26rem;
  border-radius: 3rem;
  overflow: hidden;
  position: relative;
  display: flex;

  img {
    border-radius: 1.7rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  h4 {
    text-align: center;
    padding: 1rem;
    text-decoration: none;
    margin-top: 1rem;
  }
`;

// const Gradient = styled.div`
//   z-index:1;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   overflow: hidden;

//   background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
// `;

// p {
//   position: absolute;
//   z-index:10;
//   left: 50%;
//   bottom: 0%;
//   transform: translate(-50%, 0%);
//   color: black;
//   width: 100%;
//   text-align: center;
//   font-weight: 600;
//   font-size: 1.6rem;
//   height: auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   }

export default Popular