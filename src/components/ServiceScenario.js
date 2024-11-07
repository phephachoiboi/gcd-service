import React from "react";
import "../App.css";
import SectionOurServices from "./SectionOurServices";
import SectionBeautyConsultation from "./SectionBeautyConsultation";
import SectionSkinTreatment from "./SectionSkinTreatment";

const ServiceScenario = () => {
  return (
    <main className="flex flex-col m-0 p-0">
      <SectionOurServices />
      <SectionBeautyConsultation />
      <SectionSkinTreatment />
    </main>
  );
};
export default ServiceScenario;
