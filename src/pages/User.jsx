import React , {useEffect, useState} from "react";
import axios from "axios";
import styled from 'styled-components';


const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const LoadingMessage = styled.p`
  color: blue;
`;

const UserList = styled.ul`
  list-style-type: none;
`;

const UserListItem = styled.li`
  margin-bottom: 10px;
`;


const User = () =>{
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  

    return(
    <Container>
        <Title>Users</Title>
        <Input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        {loading ? (
          <LoadingMessage>Loading...</LoadingMessage>
        ) : error ? (
          <ErrorMessage>Error: {error.message}</ErrorMessage>
        ) : (
          <UserList>
            {filteredUsers.map((user) => (
              <UserListItem key={user.id}>{user.name}</UserListItem>
            ))}
          </UserList>
        )}
    </Container>
    )

}
export default User