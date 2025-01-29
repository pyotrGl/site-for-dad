import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Header() {
	return (
		<Navbar bg="dark" variant="dark" className="py-3">
			<Container className="d-flex justify-content-between align-items-center">
				<Navbar.Brand>
					Аренда самогруза в Новосибирске
				</Navbar.Brand>
				<div className="text-white fw-bold">
					+7 (913) 705 79-30
				</div>
			</Container>
		</Navbar>
	);
}

export default Header;
