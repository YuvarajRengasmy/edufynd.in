// src/components/RoutePage.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import Program from '../Pages/Program';
import Home from '../Pages/Home';
import University from '../Pages/University';
import About from '../Pages/About';
import Recruiting from '../Pages/Recuriting';
import StudyDestination from '../Pages/StudyDestination';
import Service from '../Pages/Service';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import USA from '../Pages/studyDestinations/USA';
import Admission from '../Pages/Services/Admission';
import UK from '../Pages/studyDestinations/UK';
import Australia from '../Pages/studyDestinations/Australia';
import Canada from '../Pages/studyDestinations/Canada';
import Europe from '../Pages/studyDestinations/Europe';
import France from '../Pages/studyDestinations/France';
import Ireland from '../Pages/studyDestinations/Ireland';
import NewZealand from '../Pages/studyDestinations/Newzeland';
import Singapore from '../Pages/studyDestinations/Singapore';
import Financial from '../Pages/Services/Financial';
import Forex from '../Pages/Services/Forex';
import Sop from '../Pages/Services/Sop';
import Visa from '../Pages/Services/Visa';
import Support from '../Pages/Services/Support';
import BlogDetails from '../Pages/Blogdetails';
import ViewProgram from '../Pages/viewProgram';
import ViewUniversity from '../Pages/ViewUniversity';

const RoutePage = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/University" element={<University />} />
        <Route path="/About" element={<About />} />
        <Route path="/RecruitingPartner" element={<Recruiting />} />
        <Route path="/StudyDestination" element={<StudyDestination />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Study-In-USA" element={<USA />} />
        <Route path="/Study-In-UK" element={<UK />} />
        <Route path="/Study-In-Australia" element={<Australia />} />
        <Route path="/Study-In-Canada" element={<Canada />} />
        <Route path="/Study-In-Europe" element={<Europe />} />
        <Route path="/Study-In-France" element={<France />} />
        <Route path="/Study-In-Ireland" element={<Ireland />} />
        <Route path="/Study-In-New-Zealand" element={<NewZealand />} />
        <Route path="/Study-In-Singapore" element={<Singapore />} />
        <Route path="/Admission-Support" element={<Admission />} />
        <Route path="/Financial-Aid" element={<Financial />} />
        <Route path="/Forex" element={<Forex />} />
        <Route path="/SOP-Crafting" element={<Sop />} />
        <Route path="/Visa-Support" element={<Visa />} />
        <Route path="/Pre-and-Post-Support" element={<Support />} />
        <Route path="/Blog-Details" element={<BlogDetails />} />
        <Route path="/ViewProgram" element={<ViewProgram />} />
        <Route path="/ViewUniversity" element={<ViewUniversity />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
