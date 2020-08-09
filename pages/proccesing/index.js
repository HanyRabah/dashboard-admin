import { useState } from "react";
import BasePage from "@/components/layouts/BasePage";
import ProcessApi from "@/lib/api/ProcessClass";
import NoItems from "@/components/shared/NoItems";
import withAuth from "@/components/hoc/withAuth";

const Parcels = ({ process }) => {
  return (
    <BasePage
      title="Process Page"
      button="Manage Process"
      buttonHref="/proccesing/create"
    >
      {!process.length && <NoItems link="/proccesing/create" />}
      {process.length > 0 && (
        <ul className="list">
          <li className="list-item-header">
            <span>Parcel</span>
            <span>Tractor</span>
            <span>Date</span>
            <span>Area</span>
          </li>
          {process.map((item) => (
            <li className="list-item" key={item._id}>
              <span>{item.parcel}</span>
              <span>{item.tractor}</span>
              <span>{item.date}</span>
              <span>{item.area}</span>
            </li>
          ))}
        </ul>
      )}
    </BasePage>
  );
};
export default withAuth(Parcels)();

export async function getStaticProps() {
  const json = await new ProcessApi().getAll();
  return {
    props: { process: json.data },
    unstable_revalidate: 1,
  };
}
