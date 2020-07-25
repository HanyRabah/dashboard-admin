import React from "react";
//import {Brand} from "../brand/Brand";
import AsideMenu from "./AsideMenu";
import Link from "next/link";

const Brand = () => <Link href="/"><a className="brand-nav" href="">Admin Panel</a></Link>;

const Aside = () => {
  return (
      <>
        <div className="aside">
          <Brand/>
          <AsideMenu />
        </div>
      </>
  );
}

export default Aside;
