import React from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap"; // Import React Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const MainPageHeader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="w-100"
        style={{ 
          backgroundColor: "#28a745", // Bright green color
          borderRadius: '0', // Sharp corners
          height: '80vh', // Set the height of the card
          maxWidth: '2000px',
          color: 'white', // Optional: limit the maximum width of the card
          position: 'relative', // Enable positioning
          marginBottom: '300px', // Optional: add space at the bottom
        }}
      >
        <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
          <div className="d-flex align-items-center mb-4">
            <Card.Title className="text-center mb-0">Find anything in</Card.Title>
            <a href="https://www.google.com/maps" className="ml-3" aria-label="Location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-dark"
              >
                <path d="M12 2C8.69 2 6 4.69 6 8c0 4 6 12 6 12s6-8 6-12c0-3.31-2.69-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
              </svg>
            </a>
          </div>
          
          {/* Location Icon with embedded map */}
          <div className="mb-4">
            {/* Your KeyMap component should be here */}
          </div>

          {/* Search input */}
          <InputGroup className="mb-3" style={{ maxWidth: '400px', width: '100%' }}>
            <Form.Control
              placeholder="I am looking for..."
              aria-label="Search"
              className="bg-white text-dark"
              style={{ width: '75%', borderRadius: '1px', padding: '15px' }} // Sharp corners
            />
            <Button 
              variant="light" 
              style={{ width: '25%', borderRadius: '0' }} // Sharp corners
            >
              <svg
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="search-icon"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.03 5.55 12.76 3.5 10 3.5S4.97 5.55 4.97 8.39c0 2.23 1.24 4.18 3.1 5.14a6.471 6.471 0 005.34 1.48l.27.28v.79l5 4.99 1.49-1.49-4.99-5zM10 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                />
              </svg>
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainPageHeader;
