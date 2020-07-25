import BasePage from "@/components/layouts/BasePage";
import TractorApi from "@/lib/api/TractorsClass";
import NoItems from '@/components/shared/NoItems';

const Tractors = ({ tractors }) => {
  
  return (
    <BasePage title="Tractors Page" button="Add New Tractor" buttonHref="/tractors/create">
      {!tractors.length && <NoItems link="/tractors/create"/>}
      {tractors.length > 0 &&
        <ul className="list">
          <li className="list-item-header">
              <span>Name</span>
          </li>
            {tractors.map(item => 
                <li className="list-item" key={item._id}>
                    <span>{item.name}</span>
                </li>
            )}
        </ul>
      }
    </BasePage>
  )
}

export default Tractors;


export async function getStaticProps() {
  const json = await new TractorApi().getAll();
  const tractors =  json.data;
  return {
    props: { tractors }
  }
}
