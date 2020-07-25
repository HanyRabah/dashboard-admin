import React from "react";
import { useGetUser } from "@/actions/user";
import UserContext from "@/components/userContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.scss";
import "react-datepicker/dist/react-datepicker.css";

const App = (props) => {
  const { data: user } = useGetUser();
  const { Component, pageProps } = props;

  return (
    <UserContext.Provider value={{ user: user }}>
      <div className="layout-container">
        <Component {...pageProps} />
      </div>
    </UserContext.Provider>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default App;
