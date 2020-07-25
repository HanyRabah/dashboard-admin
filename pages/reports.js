import { useState } from 'react';
import BasePage from "@/components/layouts/BasePage";
import ReportsApi from "@/lib/api/ReportsClass";
import ParcelApi from '@/lib/api/ParcelsClass';
import { Input, Card, CardBody, Col, Row, FormGroup, Label } from 'reactstrap';

const Reports = ({ reports }) => {
  const [data, setData] = useState(reports);
  
  const handleFilter = (field) => e => {
    if(e.target.value === '') {
      setData(reports)
    } else {
      let query = ""
      if(field === 'culture') {
        query = data.filter(report => {
          return report.parcelDetails[field].toLowerCase().includes(e.target.value.toLowerCase())

        })
      } else {
        query = data.filter(report => report[field].toLowerCase().includes(e.target.value.toLowerCase()))
      }
      setData(query);
    }
  };

  return (
    <BasePage title="Reports Page">
      <Row form>
        <Col md={12}>
          <Label>Filters</Label>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input type="text" placeholder="Tractor Name" onChange={handleFilter('tractor')} />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input type="text" placeholder="Culture" onChange={handleFilter('culture')} />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input type="text" placeholder="Parcel" onChange={handleFilter('parcel')} />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input type="text" placeholder="Date" onChange={handleFilter('date')} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        {data.length === 0 && <div>No Search Results</div>}
        {data.map(report => 
          <Col md={6} key={report._id} >
            <Card style={{ background: '#eee', padding: '12px' }}>
              <CardBody>
                <div><strong>Tractor:</strong> {report.tractor}</div>
                <div><strong>Data:</strong> {report.date}</div>
                <div><strong>Area:</strong> {report.area}</div>
                <div><strong>Parcel Name:</strong> {report.parcel}</div>
                <div><strong>Parcel Culture:</strong> {report.parcelDetails.culture}</div>
              </CardBody>
            </Card>  
          </Col>
        )}
      </Row>
    </BasePage>
  )
}
export default Reports;

export async function getStaticProps() {
  const reportsJson = await new ReportsApi().getAll();
  const parcelsJson = await new ParcelApi().getAll();
  const reports = reportsJson.data;
  const parcels = parcelsJson.data;

  const data = reports.map(report => {
    const parcelDetails = parcels.find(parcel => parcel._id  === report.parcel_id);
    return {...report, parcelDetails: parcelDetails}
  })

  return {
    props: {  reports: data },
    unstable_revalidate: 30
  }
}
