// Importing everything necessary
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// Importing Components
import { SkillSet } from "./components/SkillSet";
import { Projects } from "./components/Projects";
import { Home } from './components/Home';
import { Contact } from './components/Contact';
// Importing icons
import { BiSolidCrown } from "react-icons/bi";


// Main Component
function App() {
  return (
    <div className="App">
      {/* Navigation menu */}
      <section className="navigation-menu">
        <Navbar expand="lg" data-bs-theme="dark" className="nav-bg">
          <Container>
            <Navbar.Brand className="brand" href="#about"><BiSolidCrown/>Kgositsile Sitase</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
              <Nav className="ms-auto" >
                <Nav.Link className="nav-link px-5" href="#skillset">Skill Set</Nav.Link>
                <Nav.Link className="nav-link px-5" href="#projects">Projects</Nav.Link>
                <Nav.Link className="nav-link px-5" href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      {/*  Home Section */}
      <section id='about' className="about-section">
        <Home />
      </section>

      {/* Services Section */}
      <section id='skillset'>
        <SkillSet/>
      </section>

      {/* Projects Section */}
      <section id='projects'>
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
