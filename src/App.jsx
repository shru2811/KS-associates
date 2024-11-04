import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import GoogleReviews from './components/GoogleReviews';
import Footer from './components/Footer';
import IEPFClaim from './pages/IEPFClaim';
import DuplicateIssue from './pages/DuplicateIssue';
import Transmission from './pages/Transmission';
import InsuranceClaim from './pages/InsuranceClaim';
import MutualFund from './pages/MutualFund';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NavBar from './components/NavBar';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import SideButtons from './components/SideButtons';

function App() {
  return (
    <Router>
      <>
      <ScrollToTop/>
      <NavBar/>
      <SideButtons/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/iepf-claim" element={<IEPFClaim />} />
          <Route path="/duplicate-issue" element={<DuplicateIssue />} />
          <Route path="/transmission" element={<Transmission />} />
          <Route path="/insurance-claim" element={<InsuranceClaim />} />
          <Route path="/mutual-fund" element={<MutualFund />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        
        <Footer />
      </>
    </Router>
  );
}

export default App;
