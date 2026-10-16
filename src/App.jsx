import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Matching from "./components/matching";
import ResumeUpload from "./components/ResumeUpload";
import CollegeSection from "./components/collegesection";
import EmployersSection from "./components/employersection";
import AppInterface from "./components/Appinterface";
import TrustedPartners from "./components/Trustedpartners";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedPartners />
      <Matching />
      <ResumeUpload />
      <CollegeSection />
      <EmployersSection />
      <AppInterface />
      <Footer />
    </>
  );
}