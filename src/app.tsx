import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/HomeV2/HomeV2";
import AboutMe from "./Pages/AboutMe/AboutMe";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Skills from "./Pages/skills/skills";
import Projects from "./Pages/Projects/Projects";
import { AnimatePresence } from "framer-motion";
import "./Main.css";
export default function App() {
  let location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Skill" element={<Skills />} />
        <Route path="/Project" element={<Projects />} />
        <Route path="/Contact" element={<ContactMe />} />
      </Routes>
    </AnimatePresence>
  );
}
