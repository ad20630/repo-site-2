import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

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
                {['Myrmidon Line', 'Mercenary Line'].map((classline) => <ListGroup.Item>{classline}</ListGroup.Item>)}
              </ListGroup>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
}

export default Sidebar;