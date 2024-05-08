import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function App() {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=> setUsers(res.data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='jordan'>  
      {
        users.map((el,i,t)=> 
          <Card className="bg-primary text-white" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{el.id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{el.name}</Card.Subtitle>
          <Card.Text>
            {el.email}
          </Card.Text>
        </Card.Body>
      </Card>
      )
      }
    </div>
    </div>
   
  );
}

export default App;
