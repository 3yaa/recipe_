import Pages from "./pages/Pages";
import Group from "./components/Group";
import Search from "./components/Search";
import styled from "styled-components";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Nav2>
            <AiOutlineHome />
            <Logo to={"/"}>Home</Logo>
          </Nav2>
          <Nav1>
            <Link to="/login/Login">Sign Up / Log In</Link>
          </Nav1>
        </Nav>
        <Search />
        <Group />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  align-items: center;
  svg {
    font-size: 2rem;
  }
  margin-top: -10px;
`;

const Nav1 = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const Nav2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Inconsolata', monospace;
`;

export default App;