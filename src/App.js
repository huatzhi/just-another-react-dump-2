import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import MainMenu from './components/MainMenu/MainMenu';
import { Layout } from "antd";

import "./App.css";

import SignInPage from "./pages/SignIn/SignIn";

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <MainMenu />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Switch>
              <Route path='/signin' component={SignInPage} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
