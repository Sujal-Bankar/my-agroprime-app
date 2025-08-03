import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './Components/Weather';
import WeatherInfo from './Components/WeatherInfo';
import AboutUs from './Components/AboutUs';
import ContactSection from './Components/ContactSection';

import Blog from './Components/BlogPage'
import ProductMain from './Components/ProductMain';
import AgroProducts from './Components/AgroProducts';
import AllProduct from './Components/AllProduct';
import FertilizerProducts from './Components/FertilizerProducts';
import CashCrops from './Components/CashCrops';
import Seeds from './Components/Seeds';
import Equipments from './Components/equipments';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import IntroSection from './Components/IntroSection';
import FAQSection from './Components/FAQSection';
import WhyChooseUs from './Components/WhyChooseUs';
import WhatWeOffer from './Components/WhatWeOffer';
import Footer from './Components/Footer';
import PageIcon from './Components/PageIcon';
import OrderDone from './Components/OrderDone';
import Home from './Components/Home';
import Login from './Components/Login';
import Sign from './Components/Sign';
import ForgetPassword from './Components/ForgetPassword';
import HelpPage from './Components/HelpPage'
// import logo from './logo.svg'; // not used, optional

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/WeatherInfo" element={<WeatherInfo />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactSection" element={<ContactSection/>} />
        <Route path="/ProductMain" element={<ProductMain />} />
        <Route path="/AgroProducts" element={<AgroProducts />} />
        <Route path="/AllProduct" element={<AllProduct />} />
        <Route path="/FertilizerProducts" element={<FertilizerProducts />} />
        <Route path="/CashCrops" element={<CashCrops />} />
        <Route path="/Seeds" element={<Seeds />} />
        <Route path="/Equipments" element={<Equipments />} />
        <Route path="/OrderDone" element={<OrderDone />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Sign" element={<Sign/>} />
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
        <Route path="/HelpPage"  element={<HelpPage/>}></Route>
        <Route path="/Blog"  element={<Blog/>}></Route>
        {/* <Route path="/Login" element={</>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
