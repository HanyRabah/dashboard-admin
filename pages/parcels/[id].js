import BasePage from "@/components/layouts/BasePage";
import ParcelApi from "@/lib/api/ParcelsClass";


const Parcel = ({ parcel }) => {
  console.log("Parcel -> parcel", parcel)

  return (
    <BasePage title="Parcel Managment">
      <div>
        {parcel.name}
        {parcel.culture}
        {parcel.area}
      </div>
    </BasePage>
  )
}
export default Parcel;


export async function getStaticPaths() {
  const json = await new ParcelApi().getAll();
  const parcels =  json.data;
  
  const paths = parcels.map(parcel => {
    return {
      params: { id: parcel._id }
    }
  })

  return { paths, fallback: false};
}


export async function getStaticProps({ params }) {
  const json = await new ParcelApi().getById(params.id);
  const parcel =  json.data;
  return {
    props: { parcel }
  }
}
