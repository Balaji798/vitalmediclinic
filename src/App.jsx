import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
import "@emotion/styled"
import "@mui/styled-engine"
const AboutDoctor =lazy(async ()=> await import("./pages/aboutDoctor/AboutDoctor"));
const Home = lazy(async () => await import("./pages/home/Home"));
const Navbar = lazy(async () => await import("./components/navbar/Navbar"));
const AboutUs = lazy(async () => await import("./pages/about/AboutUs"));
const ServiceOffered = lazy(
  async () => await import("./pages/servicesOffered/ServicesOffered")
);
const Package = lazy(async ()=> await import("./pages/package/Package"))
const Doctor = lazy(async ()=> await import("./pages/doctor/Doctor"))
const Appointments = lazy(async ()=> await import("./pages/appointments/Appointments"))
const ContactUs = lazy(async ()=> await import("./pages/contactUs/ContactUs"))
const ActivityTest = lazy(async ()=> await import("./pages/service/ActivityTest"))
const AllergiesTesting = lazy(async ()=> await import("./pages/service/AllergiesTesting"))
const BiomarkerTesting = lazy(async ()=> await import("./pages/service/BiomarkerTesting"))
const FunctionTesting = lazy(async ()=> await import("./pages/service/FunctionTesting"))
const HealthCheckUp = lazy(async ()=> await import("./pages/service/HealthCheckUp"))
const LengthAnalysis = lazy(async ()=> await import("./pages/service/LengthAnalysis"))
const MicroNutrient = lazy(async ()=> await import("./pages/service/MicroNutrient"))
const ProfileAnalysis = lazy(async ()=> await import("./pages/service/ProfileAnalysis"))
const ToxicityTesting = lazy(async ()=> await import("./pages/service/ToxicityTesting"))
const IVTherapy = lazy(async ()=> await import("./pages/service/IVTherapy"))
const MensTherapy = lazy(async ()=> await import("./pages/service/MensTherapy"))
const NKTherapy = lazy(async ()=> await import("./pages/service/NKTherapy"))
const OzoneTherapy = lazy(async ()=> await import("./pages/service/OzoneTherapy"))
const Placenta = lazy(async ()=> await import("./pages/service/Placenta"))
const StemTherapy = lazy(async ()=> await import("./pages/service/StemTherapy"))
const WomenTherapy = lazy(async ()=> await import("./pages/service/WomenTherapy"))
const CancerTreatment = lazy(async ()=> await import("./pages/service/CancerTreatment"))
const PainManagement = lazy(async ()=> await import("./pages/service/PainManagement"))
const AlzheimerDisease = lazy(async ()=> await import("./pages/service/AlzheimerDisease"))
const SkinDisorder = lazy(async ()=> await import("./pages/service/SkinDisorder"))
const SleepDisorder = lazy(async ()=> await import("./pages/service/SleepDisorder"))
const Neurological = lazy(async ()=> await import("./pages/service/Neurological"))
const Immune = lazy(async ()=> await import("./pages/service/Immune"))
const Arthritis = lazy(async ()=> await import("./pages/service/Arthritis"))
const NCDDisease = lazy(async ()=> await import("./pages/service/NCDDisease"))
const Promotion = lazy(async ()=> await import("./pages/Promotion"))
const HealthCheckup = lazy(async ()=> await import("./pages/healthCheckup/HealthCheckup"))
const WellnessProgram = lazy(async ()=> await import("./pages/wellnessProgram/WellnessProgram"))
const ConditionAddress = lazy(async ()=> await import("./pages/conditionAddress/ConditionAddress"))
const HerbalMedicean = lazy(async ()=> await import("./pages/herbalMedicean/HerbalMedicean"))
const KartomTherapies = lazy(async ()=> await import("./pages/kartomTherapies/KartomTherapies"))
const PrenatalMassage = lazy(async()=> await import("./pages/service/PrenatalMassage"))
const Wellness = lazy(async()=> await import("./pages/service/Wellness"))

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100%",
            display: "flex",
            height: "100vh" /* Equivalent to h-screen in Tailwind */,
            alignItems: "center" /* Equivalent to items-center in Tailwind */,
            justifyContent:
              "center" /* Equivalent to justify-center in Tailwind */,
            backgroundColor: "#ffffff",
          }}
        >
          <div className="spinner"></div>
        </div>
      }
    >
      <Router scrollRestoration="auto">
        <Navbar />
        <div style={{ paddingTop: "4rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/service" element={<ServiceOffered />} />
            <Route path="/package" element={<Package/>}/>
            <Route path="/doctor" element={<Doctor/>}/>
            <Route path="/doctor/:doctorName" element={<AboutDoctor/>}/>
            <Route path="/appointments" element={<Appointments/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/service/health-check-up" element={<HealthCheckup/>}/>
            <Route path="/service/health-check-up/activity-testing" element={<ActivityTest/>}/>
            <Route path="/service/health-check-up/allergies-testing" element={<AllergiesTesting/>}/>
            <Route path="/service/health-check-up/biomarker-testing" element={<BiomarkerTesting/>}/>
            <Route path="/service/health-check-up/function-testing" element={<FunctionTesting/>}/>
            <Route path="/service/health-check-up/health-check-up" element={<HealthCheckUp/>}/>
            <Route path="/service/health-check-up/length-analysis" element={<LengthAnalysis/>}/>
            <Route path="/service/health-check-up/micro-nutrients" element={<MicroNutrient/>}/>
            <Route path="/service/health-check-up/profile-analysis" element={<ProfileAnalysis/>}/>
            <Route path="/service/health-check-up/toxicity-testing" element={<ToxicityTesting/>}/>
            <Route path="/service/wellness-program" element={<WellnessProgram/>}/>
            <Route path="/service/wellness/placenta-therapy" element={<Placenta/>}/>
            <Route path="/service/wellness/men-health-therapy" element={<MensTherapy/>}/>
            <Route path="/service/wellness/women-health-therapy" element={<WomenTherapy/>}/>
            <Route path="/service/wellness/iv-nutrition-therapy" element={<IVTherapy/>}/>
            <Route path="/service/wellness/ozone-therapy" element={<OzoneTherapy/>}/>
            <Route path="/service/wellness/stem-therapy" element={<StemTherapy/>}/>
            <Route path="/service/wellness/nk-cell-therapy" element={<NKTherapy/>}/>
            <Route path="/service/medical-condition" element={<ConditionAddress/>}/>
            <Route path="/service/medical-condition/cancer-treatment" element={<CancerTreatment/>}/>
            <Route path="/service/medical-condition/pain-management" element={<PainManagement/>}/>
            <Route path="/service/medical-condition/alzheimer-disease" element={<AlzheimerDisease/>}/>
            <Route path="/service/medical-condition/skin-disorder" element={<SkinDisorder/>}/>
            <Route path="/service/medical-condition/sleep-disorder" element={<SleepDisorder/>}/>
            <Route path="/service/medical-condition/neurological-disorder" element={<Neurological/>}/>
            <Route path="/service/medical-condition/immune-disorder" element={<Immune/>}/>
            <Route path="/service/medical-condition/rheumatad-arthritis" element={<Arthritis/>}/>
            <Route path="/service/medical-condition/ncds-disease" element={<NCDDisease/>}/>
            <Route path="/package/promotion" element={<Promotion/>}/>
            <Route path="/service/herbal-medicean" element={<HerbalMedicean/>}/>
            <Route path="/service/cannabis-and-kartom-therapies" element={<KartomTherapies/>}/>
            <Route path="/service/prenatal-massage" element={<PrenatalMassage/>}/>
            <Route path="/service/body-works-wellness" element={<Wellness/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
