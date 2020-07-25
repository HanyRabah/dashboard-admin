
import BasePage from  '@/components/layouts/BasePage';
import withAuth from '@/components/hoc/withAuth';
import { Row, Col } from 'reactstrap';
import { useCreateTractor } from '@/actions/tractors';
import Redirect from '@/components/shared/Redirect';
import TractorForm from '@/components/forms/TractorForm';

const AddTractor = () => {
    const [ createTractor, { data, loading, error } ] = useCreateTractor();
    
    if(data) { return <Redirect to="/tractors" /> }
  
    return (
      <BasePage title="Create Tractor">
        <Row>
          <Col md="8">
            <TractorForm onSubmit={createTractor} />
            {error && <div className="alert alert-danger mt-4">{error}</div>}
          </Col>
        </Row>
      </BasePage>
    )
    
}
export default withAuth(AddTractor)('admin');
