import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Header from "./components/common/header";
import styled from "styled-components"
import About from "./pages/AboutPage";
import Home from "./pages/HomePage";
import Offers from "./pages/OurOffers";
import Timeline from "./pages/HowItWorks";
import Safety from "./pages/SafetyPage";
import Support from "./pages/SupportPage";
import Services from "./pages/ServicesPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import firebase from 'firebase';
import 'firebase/firestore';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
`;

const AppBody = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  flex: 1 auto;
  position: absolute;
  min-height: 180vh;
  overflow-x: hidden;
`;

export default function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
          <AppBody>
            <Route path="/" exact component={Home}/>
            <Route path="/AboutUs" exact component={About}/>
            <Route path="/Offers" exact component={Offers}/>
            <Route path="/Timeline" exact component={Timeline}/>
            <Route path="/Safety" exact component={Safety}/>
            <Route path="/Support" exact component={Support}/>
            <Route path="/Services" exact component={Services}/>
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
         </AppBody>
      </BrowserRouter>
    </Wrapper>
  );
}

