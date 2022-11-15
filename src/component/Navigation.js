import { React } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../page/Home';
import About from '../page/About';
import Service from '../page/Service';
import Form from '../page/Form';
import Footer from '../page/Footer';
import Contact from '../page/Contact';


const Navigation = () => {
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to={"/Home"}>STIFIn Amazing</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/Home"} >Home</Nav.Link>
                            <Nav.Link as={Link} to={"/Service"}>Produk</Nav.Link>
                            <Nav.Link as={Link} to={"/About"}>Tentang</Nav.Link>
                            <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
                            <Nav.Link href='Form'>Form Pemesanan</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Service" element={<Service />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/Footer" element={<Footer />} />
            </Routes>
        </Router>
    )
}

export default Navigation