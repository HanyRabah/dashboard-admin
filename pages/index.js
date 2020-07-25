import { useContext } from "react";
import UserContext from "@/components/userContext";
import BasePage from "@/components/layouts/BasePage";
import Login from "@/components/Login";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <BasePage title="Dashboard">
          <Container>
            <Row>
              <Col md="6" className="hero-welcome-wrapper">
                <Card>
                  <CardBody>
                    <CardTitle>
                      <strong>Manage Parcels</strong>
                    </CardTitle>
                    <CardText>You can manage all parcels from here</CardText>
                    <Link href="/parcels">
                      <Button color="primary">Parcels</Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <Card>
                  <CardBody>
                    <CardTitle>
                      <strong>Manage Tractors</strong>
                    </CardTitle>
                    <CardText>You can manage all parcels from here</CardText>
                    <Link href="/tractors">
                      <Button color="primary">Tractors</Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </BasePage>
      )}
    </>
  );
};

export default Home;
