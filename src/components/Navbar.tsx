import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import ListInfo from '../data/ListInfo.tsx';
import MyrmIdle from "../assets/MyrmidonIdle.png";

function Sidebar() {
  return (
    <>
     
        <Navbar key={false} expand={false} className="bg-body-tertiary mb-3 fixed-top">
          <Container fluid>
            <Navbar.Brand href="#">FE Repo Site</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
             <ListGroup>
                {ListInfo().map((classline: string[]) => <ListGroup.Item><img src={(classline[1])} alt="Myrmidon Line" /> {classline[0]}</ListGroup.Item>)}
              </ListGroup> 
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
}

export default Sidebar;