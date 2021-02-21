import React from "react";

import Header from "../../components/Header";
import HomeContainer from "./HomeContainer";
import StatisticsPanel from "../../components/StatisticsPanel";
import NewMembers from "../../components/NewMembers";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <HomeContainer />
      <StatisticsPanel />
      <NewMembers />
      <Footer />
    </div>
  );
}
