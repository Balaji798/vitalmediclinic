import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import "@emotion/styled";
import "@mui/styled-engine";
import SecondeNave from "./components/secondeNave/SecondeNave";
import { HelmetProvider } from "react-helmet-async";
import WeightManagement from "./pages/service/WeightManagement";
import AboutDoctor from "./pages/aboutDoctor/AboutDoctor";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/about/AboutUs";
import ServiceOffered from "./pages/servicesOffered/ServicesOffered";
import Package from "./pages/package/Package";
import Doctor from "./pages/doctor/Doctor";
import Appointments from "./pages/appointments/Appointments";
import ContactUs from "./pages/contactUs/ContactUs";
import ActivityTest from "./pages/service/ActivityTest";
import AllergiesTesting from "./pages/service/AllergiesTesting";
import BiomarkerTesting from "./pages/service/BiomarkerTesting";
import FunctionTesting from "./pages/service/FunctionTesting";
import HealthCheckUp from "./pages/service/HealthCheckUp";
import LengthAnalysis from "./pages/service/LengthAnalysis";
import MicroNutrient from "./pages/service/MicroNutrient";
import ProfileAnalysis from "./pages/service/ProfileAnalysis";
import ToxicityTesting from "./pages/service/ToxicityTesting";
import IVTherapy from "./pages/service/IVTherapy";
import MyersDrip from "./pages/service/MyersDrip";
import NKTherapy from "./pages/service/NKTherapy";
import OzoneTherapy from "./pages/service/OzoneTherapy";
import AfterParty from "./pages/service/AfterParty";
import StemTherapy from "./pages/service/StemTherapy";
import WomenTherapy from "./pages/service/WomenTherapy";
import CancerTreatment from "./pages/service/CancerTreatment";
import PainManagement from "./pages/service/PainManagement";
import AlzheimerDisease from "./pages/service/AlzheimerDisease";
import SkinDisorder from "./pages/service/SkinDisorder";
import SleepDisorder from "./pages/service/SleepDisorder";
import Neurological from "./pages/service/Neurological";
import Immune from "./pages/service/Immune";
import Arthritis from "./pages/service/Arthritis";
import NCDDisease from "./pages/service/NCDDisease";
import Promotion from "./pages/Promotion";
import HealthCheckup from "./pages/healthCheckup/HealthCheckup";
import WellnessProgram from "./pages/wellnessProgram/WellnessProgram";
import ConditionAddress from "./pages/conditionAddress/ConditionAddress";
import HerbalMedicean from "./pages/herbalMedicean/HerbalMedicean";
import KartomTherapies from "./pages/kartomTherapies/KartomTherapies";
import PrenatalMassage from "./pages/service/PrenatalMassage";
import Wellness from "./pages/service/Wellness";
import TherapeuticTreatment from "./pages/service/TherapeuticTreatment";

function App() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <HelmetProvider>
      <Router scrollRestoration="auto">
        <Navbar setOpenNav={setOpenNav} openNav={openNav} />
        <SecondeNave setOpenNav={setOpenNav} openNav={openNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/service" element={<ServiceOffered />} />
          <Route path="/package" element={<Package />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor/:doctorName" element={<AboutDoctor />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/service/health-check-up" element={<HealthCheckup />} />
          <Route
            path="/service/health-check-up/activity-testing"
            element={<ActivityTest />}
          />
          <Route
            path="/service/health-check-up/allergies-testing"
            element={<AllergiesTesting />}
          />
          <Route
            path="/service/health-check-up/biomarker-testing"
            element={<BiomarkerTesting />}
          />
          <Route
            path="/service/health-check-up/function-testing"
            element={<FunctionTesting />}
          />
          <Route
            path="/service/health-check-up/health-check-up"
            element={<HealthCheckUp />}
          />
          <Route
            path="/service/health-check-up/length-analysis"
            element={<LengthAnalysis />}
          />
          <Route
            path="/service/health-check-up/micro-nutrients"
            element={<MicroNutrient />}
          />
          <Route
            path="/service/health-check-up/profile-analysis"
            element={<ProfileAnalysis />}
          />
          <Route
            path="/service/health-check-up/toxicity-testing"
            element={<ToxicityTesting />}
          />
          <Route
            path="/service/wellness-program"
            element={<WellnessProgram />}
          />
          <Route
            path="/service/wellness/iv-nutrition-therapy/after-party"
            element={<AfterParty />}
          />
          <Route
            path="/service/wellness/iv-nutrition-therapy/myers-drip"
            element={<MyersDrip />}
          />
          <Route
            path="/service/wellness/women-health-therapy"
            element={<WomenTherapy />}
          />
          <Route
            path="/service/wellness/iv-nutrition-therapy"
            element={<IVTherapy />}
          />
          <Route
            path="/service/wellness/ozone-therapy"
            element={<OzoneTherapy />}
          />
          <Route
            path="/service/wellness/stem-therapy"
            element={<StemTherapy />}
          />
          <Route
            path="/service/wellness/nk-cell-therapy"
            element={<NKTherapy />}
          />
          <Route
            path="/service/wellness/weight-management"
            element={<WeightManagement />}
          />
          <Route
            path="/service/medical-condition"
            element={<ConditionAddress />}
          />
          <Route
            path="/service/herbal-medicean/cancer-treatment"
            element={<CancerTreatment />}
          />
          <Route
            path="/service/medical-condition/pain-management"
            element={<PainManagement />}
          />
          <Route
            path="/service/medical-condition/alzheimer-disease"
            element={<AlzheimerDisease />}
          />
          <Route
            path="/service/medical-condition/skin-disorder"
            element={<SkinDisorder />}
          />
          <Route
            path="/service/medical-condition/sleep-disorder"
            element={<SleepDisorder />}
          />
          <Route
            path="/service/medical-condition/neurological-disorder"
            element={<Neurological />}
          />
          <Route
            path="/service/medical-condition/immune-disorder"
            element={<Immune />}
          />
          <Route
            path="/service/medical-condition/rheumatad-arthritis"
            element={<Arthritis />}
          />
          <Route
            path="/service/medical-condition/ncds-disease"
            element={<NCDDisease />}
          />
          <Route path="/package/promotion" element={<Promotion />} />
          <Route path="/service/herbal-medicean" element={<HerbalMedicean />} />
          <Route
            path="/service/herbal-medicean/therapeutic-treatment"
            element={<TherapeuticTreatment />}
          />
          <Route
            path="/service/cannabis-and-kartom-therapies"
            element={<KartomTherapies />}
          />
          <Route
            path="/service/prenatal-massage"
            element={<PrenatalMassage />}
          />
          <Route path="/service/body-works-wellness" element={<Wellness />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
