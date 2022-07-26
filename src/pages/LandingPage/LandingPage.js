import React from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Information from "../../components/Information/Information";
import Reviews from "../../components/Reviews/Reviews";

export default function LandingPage() {
  return (
    <>
      <Header headerType="main" />
      <About />
      <Information />
      <Reviews />
    </>
  );
}
