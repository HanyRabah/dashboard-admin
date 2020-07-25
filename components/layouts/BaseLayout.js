import Header from "@/components/shared/Header";
import Aside from "../shared/Aside";
//import { ToastContainer } from 'react-toastify';

const BaseLayout = (props) => {
  const { children } = props;

  return (
    <div className="layout-container">
      <Aside />
      <Header />
      <main className="wrapper">
          {children}
      </main>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default BaseLayout;
