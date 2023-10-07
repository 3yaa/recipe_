import styled from "styled-components";
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

function Search() {
    const [searchValue, setSearch] = useState("");
    const navigate = useNavigate();

    const searchHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + searchValue);
    }

    return (
      <FormStyle onSubmit={searchHandler}>
        <div>
            <BiSearchAlt />
            <input type="text" placeholder="Search a dish..." 
            onChange = {(e) => setSearch(e.target.value)} value={searchValue}/>
        </div>
      </FormStyle>
    );
  }
  
  const FormStyle = styled.form`
    margin: 0rem 20rem;
    div {
        width: 100%;
        position: relative;
        margin-top: -30px;
    }
    input {
      border: 1rem;
      background: linear-gradient(70deg, #CEDFDF, #6D6875);
      font-size: 1.2rem;
      color: black;
      padding: 1rem 3rem;
      border: none;
      border-radius: 1rem;
      outline: none;
      width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(45%, -50%);
        color: white;
        font-size: 2rem;
        width: 30px;
        height: 30px;
    }

    &::placeholder {
        color: black;
      }
    }
`;

export default Search