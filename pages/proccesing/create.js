import BasePage from "@/components/layouts/BasePage";
import TractorApi from "@/lib/api/TractorsClass";
import ParcelApi from "@/lib/api/ParcelsClass";
import { useCreateProcess } from "@/actions/process";
import ProcessForm from "@/components/forms/ProcessForm";
import Redirect from "@/components/shared/Redirect";
import ProcessApi from "@/lib/api/ProcessClass";
import withAuth from "@/components/hoc/withAuth";

const ParcelProcces = ({ tractors, parcels: intialParcels, process }) => {
  const [createProcess, { data }] = useCreateProcess();

  const parcels = intialParcels.filter((parcel) => {
    const check = !process.find((process) => process.parcel_id === parcel._id);
    return check;
  });

  if (data) {
    return <Redirect to="/proccesing" />;
  }

  return (
    <BasePage title="Proccess">
      <ProcessForm
        onSubmit={createProcess}
        tractors={tractors}
        parcels={parcels}
      />
    </BasePage>
  );
};

export default withAuth(ParcelProcces)();

export async function getStaticProps() {
  const tractors = await new TractorApi().getAll();
  const parcels = await new ParcelApi().getAll();
  const process = await new ProcessApi().getAll();
  return {
    props: {
      tractors: tractors.data,
      parcels: parcels.data,
      process: process.data,
    },
  };
}
