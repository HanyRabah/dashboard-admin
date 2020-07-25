import { Container, Row, Col } from 'reactstrap';
import BasePage from '@/components/layouts/BasePage';
import withAuth from '@/components/hoc/withAuth';

const Home = () => {
    return (
      <BasePage title="Welcome to our Dashboard">
        <Container>
          <Row>
          <Col md="6" className="hero-welcome-wrapper"></Col>
          </Row>
        </Container>
      </BasePage>
    )
}

export default withAuth(Home)();
