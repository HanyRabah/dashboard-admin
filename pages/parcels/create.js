import BasePage from "@/components/layouts/BasePage";
import withAuth from "@/components/hoc/withAuth";
import { Row, Col } from "reactstrap";
import { useCreateParcel } from "@/actions/parcels";
import Redirect from "@/components/shared/Redirect";
import ParcelForm from "@/components/forms/ParcelForm";

const AddParcel = () => {
  const [createParcel, { data, loading, error }] = useCreateParcel();

  if (data) {
    return <Redirect to="/parcels" />;
  }

  return (
    <BasePage title="Create Parcel">
      <Row>
        <Col md="8">
          <ParcelForm onSubmit={createParcel} />
          {error && <div className="alert alert-danger mt-4">{error}</div>}
        </Col>
      </Row>
    </BasePage>
  );
};
export default withAuth(AddParcel)();
