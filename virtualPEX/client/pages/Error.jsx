import { Container, Row, Col, Button } from 'react-bootstrap';

const ErrorPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="text-center">
        <Col>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Oops! Something went wrong.</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '20px' }}>
            We apologize for the inconvenience. An unexpected error occurred, and we couldn't load the page you were looking for.
          </p>
          <p style={{ fontSize: '1rem', color: '#6c757d' }}>
            Error Message: <strong style={{ color: '#dc3545' }}>404 - Page Not Found</strong>
          </p>
          <div className="mt-4">
            <Button variant="primary" href="/" size="lg">
              Go Back to Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
