import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from './Searched';
import Recipes from './Recipes';
import Login from './login/Login';

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/Login" element={<Login />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipes />} />
    </Routes>
  )
}

export default Pages