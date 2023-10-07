import { MdOutlineFastfood, MdEmojiFoodBeverage } from 'react-icons/md';
import { PiBowlFoodBold } from 'react-icons/pi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Group() {
  return (
    <List>
        <SLink to={"/cuisine/American"}>
          <MdOutlineFastfood />
          <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
          <MdEmojiFoodBeverage />
          <h4>Japanese</h4>
        </SLink>
        <SLink to={"/cuisine/Italian"}>
          <PiBowlFoodBold />
          <h4>Italian</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const neutralColors = {
  lightGray: '#EAEAEA',
  lightBlue: '#A9D9D4',
};

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, ${neutralColors.lightGray}, ${neutralColors.lightBlue});
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: black;
    font-size: 1rem;
  }
  svg {
    color: black;
    font-size: 2rem;
  }
  &.active {
    background: linear-gradient(35deg, #555555, #001F3F);
    h4 {
      color: white;
    }
    svg {
      color: white;
    }
  }
`;

export default Group