import React from "react";
import "../App.css";
import SectionOurServices from "./SectionOurServices";
import SectionBeautyConsultation from "./SectionBeautyConsultation";
import SectionSkinTreatment from "./SectionSkinTreatment";
import SectionBeautyProduct from "./SectionBeautyProduct";
import SectionSlogan from "./SectionSlogan";

const ServiceScenario = () => {
  return (
    <main className="flex flex-col m-0 p-0">
      <SectionOurServices />
      <SectionBeautyConsultation />
      <SectionSkinTreatment />
      <SectionBeautyProduct />
      <SectionSlogan />
    </main>
  );
};
export default ServiceScenario;
