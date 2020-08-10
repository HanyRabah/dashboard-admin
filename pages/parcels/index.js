import BasePage from "@/components/layouts/BasePage";
import ParcelApi from "@/lib/api/ParcelsClass";
import NoItems from "@/components/shared/NoItems";
import withAuth from "@/components/hoc/withAuth";

const Parcels = ({ parcels }) => {
  return (
    <BasePage
      title="Parcel Page"
      button="Add New Parcel"
      buttonHref="/parcels/create"
    >
      {!parcels.length && <NoItems link="/parcels/create" />}
      {parcels.length > 0 && (
        <ul className="list">
          <li className="list-item-header">
            <span>Name</span>
            <span>Culture</span>
            <span>Area</span>
          </li>
          {parcels.map((item) => (
            <li className="list-item" key={item._id}>
              <span>{item.name}</span>
              <span>{item.culture}</span>
              <span>{item.area}</span>
            </li>
          ))}
        </ul>
      )}
    </BasePage>
  );
};
export default withAuth(Parcels)();

export async function getServerSideProps() {
  const json = await new ParcelApi().getAll();
  const parcels = json.data;
  return {
    props: { parcels }
  };
}
