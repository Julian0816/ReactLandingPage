import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column align-items-center justify-content-center">


			<Navbar className="w-75" bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Link</Nav.Link>
							<NavDropdown title="Link" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#" disabled>
								Link
							</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<div className="w-75">
				<div className="jumbotron m-5" style={{ textAlign: 'start' }}>
					<h1 className="display-4">Warm Welcome</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia, molestiae quas vel sint commodi repudiandae consequuntur
						voluptatum laborum numquam
					</p>
					<a
						className="btn btn-primary btn-lg"
						href="https://reactjs.org/"
						role="button"
					>
						Go to the official website
					</a>
				</div>
			</div>


			<div className="w-75">
				<CardGroup>
					<Card>
						<Card.Img
							variant="top"
							src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18722e999db%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18722e999db%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.140625%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
						/>
						<Card.Body>
							<Card.Title style={{ color: "black" }}>Card title</Card.Title>
							<Card.Text style={{ color: "black" }}>
								This card has supporting text below as a natural lead-in to
								additional content.{" "}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Button variant="primary">Go somewhere</Button>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18722e999db%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18722e999db%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.140625%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
						/>
						<Card.Body>
							<Card.Title style={{ color: "black" }}>Card title</Card.Title>
							<Card.Text style={{ color: "black" }}>
								This card has supporting text below as a natural lead-in to
								additional content.{" "}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Button variant="primary">Go somewhere</Button>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18722e999db%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18722e999db%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.140625%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
						/>
						<Card.Body>
							<Card.Title style={{ color: "black" }}>Card title</Card.Title>
							<Card.Text style={{ color: "black" }}>
								This card has supporting text below as a natural lead-in to
								additional content.{" "}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Button variant="primary">Go somewhere</Button>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18722e999db%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18722e999db%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.140625%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
						/>
						<Card.Body>
							<Card.Title style={{ color: "black" }}>Card title</Card.Title>
							<Card.Text style={{ color: "black" }}>
								This card has supporting text below as a natural lead-in to
								additional content.{" "}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Button variant="primary">Go somewhere</Button>
						</Card.Footer>
					</Card>
				</CardGroup>
			</div>


			<div className="w-75">
				<Card>
					<footer className="blockquote-footer">
						<h5>copyright @ JulianMartinez 2023</h5>
					</footer>
				</Card>
			</div>
		</div>
	);
};

export default Home;
