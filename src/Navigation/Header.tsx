import {useState} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {FaBars} from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00a8ff;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  padding: 0 12px;
`;

const StyledLogoLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 20px;
  font-size: 20px;
  font-weight: 400;
  margin: 5px;
  &:hover {
    color: gray;
  }
  &.active {
    color: gray;
    position: relative;
    top: 2px;
  }
`;

const StyledBars = styled(FaBars)`
  display: none;
  font-size: 24px;
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: block;
  }
`;

const NavMenu = styled.ul<IToggle>`
  list-style: none;
  display: flex;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 10px 20px;
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    margin: 20px 0;
    padding: none;
  }
`;

interface IToggle {
  isToggleOpen: boolean;
}

const Header = () => {

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return(
    <Container>
      <Logo>
        <StyledLogoLink to={"/"}>
          Logo
        </StyledLogoLink>
      </Logo>
      <NavMenu isToggleOpen={isToggleOpen}>
        <NavItem>
          <StyledNavLink to={"/about"}>
            About
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to={"/mypage"}>
            MyPage
          </StyledNavLink>
        </NavItem>
      </NavMenu>
      <StyledBars onClick={handleToggleOpen} />
    </Container>
  );
}

export default Header