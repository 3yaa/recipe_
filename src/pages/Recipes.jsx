import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipes() {
    let params = useParams();
    const [recipe, setRecipe] = useState({});
    const [activePage, setActivePage] = useState("instructions");

    const getRecipe = async () => {
        const data  = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=95310c9aba75471fbbbac22fed3c293f`)
        const recipeInfo = await data.json();
        setRecipe(recipeInfo);
    };

    useEffect(() => {
        getRecipe();
    },[params.name]);

    return(
        <Wrapper>
            <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt="" />
                <h3 className="summary" dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            </div>
            <Info>
                <Button className = {activePage === 'instructions' ? 'active': ''}
                onClick={() => setActivePage('instructions')}>
                    Instruction
                </Button>
                <Button className = {activePage === 'ingredients' ? 'active': ''}
                onClick={() => setActivePage('ingredients')}>
                    Ingredients
                </Button>
                {activePage === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
                    </div>
                )}
                {activePage === 'ingredients' && (
                    <ul>
                    {recipe.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>
                            {ingredient.original}
                        </li>
                    ))}
                    </ul>
                )}
            </Info>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 0rem;
    margin-bottom: 2rem;
    display: flex;
    h2{
        margin-bottom: 1rem;
    }
    h3 {
        font-weight: 400;
    }
    li{
        font-size: 1.22rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    .summary {
        max-height: auto;
        max-width: 500px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const Button = styled.div`
  padding: 1rem 2rem;
  color: #6D6875;
  background: white;
  border: 3px solid black;
  margin-right: 2rem;
  width: 500px;
  margin-top: 1.5rem;
`;

const Info = styled.div`
    margin-left: 6rem;
`;

export default Recipes