import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
