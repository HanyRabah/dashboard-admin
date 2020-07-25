import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.scss';
import "react-datepicker/dist/react-datepicker.css";

const App = (props) => {
    const { Component, pageProps } = props;
    return (
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    )
}

App.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {};

  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}

export default App;
