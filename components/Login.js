import { Container, Row, Col, Jumbotron, Button } from "reactstrap";
import React from "react";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 9, offset: 2 }}>
          <Jumbotron>
            <h1 className="display-5">Welcome to Admin Dashboard</h1>
            <p className="lead">
              You need to login first so you can enjoy the features
            </p>
            <p className="lead">
              <Button color="primary" href="/api/v1/user/login">
                Login
              </Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
