import React, { useEffect } from "react";
import Login from "../../components/Login";
import Header from "../../components/common/header"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header></Header>
      <Login></Login>
    </div>
  );
}
