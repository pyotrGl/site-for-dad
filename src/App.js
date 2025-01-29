import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <div className="app d-flex flex-column min-vh-100">
            <Header />
            <Container className="flex-grow-1">
                <MainContent />
            </Container>
            <Footer />
        </div>
    );
}

export default App;
