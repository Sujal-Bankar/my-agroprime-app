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
import ProductDetails from './Components/ProductDetails';
import ViewOrder from './Components/ViewOrders';
import ResetPassword from './Components/ResetPassword';
import UsersData from './Components/UsersData';
import OrderData from './Components/OrderData';
import AdminMain from './Components/AdminMain';
import AdminLogin from './Components/AdminLogin';

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
        <Route path="/ProductDetails"  element={<ProductDetails/>}></Route>
        <Route path="/ViewOrders"  element={<ViewOrder/>}></Route>
        <Route path="/ResetPassword"  element={<ResetPassword/>}></Route>
        <Route path="/Admin"  element={<AdminLogin/>}></Route>
        <Route path="/AdminMain"  element={<AdminMain/>}></Route>
        <Route path="/UsersData"  element={<UsersData/>}></Route>
        <Route path="/OrderData"  element={<OrderData/>}></Route>
       </Routes>
    </Router>
  );
}

export default App;
