import React, { useEffect } from "react";
import Services from "../../components/Services";
import Header from "../../components/common/header"
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header></Header>
      <Services></Services>
    </div>
  );
}
