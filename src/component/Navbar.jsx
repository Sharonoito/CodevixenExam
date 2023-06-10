import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;


const StyledListItem = styled.li`
  margin-right: 10px;`


const StyledNav = styled.nav`
  background-color: #f2f2f2;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 5px;
  margin-right: 10px;
`;

const StyledButton = styled.button`
  padding: 5px;
  margin-right: 10px;
`;


const lightTheme = {
  backgroundColor: '#f2f2f2',
  color: '#333',
};

const darkTheme = {
  backgroundColor: '#333',
  color: '#f2f2f2',
};


export const Nav = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


    return (
      <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledLink to="/">Home</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/About">About</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to="/User">User</StyledLink>
        </StyledListItem>
      </StyledList>
      <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>

    </StyledNav>
    );
  };