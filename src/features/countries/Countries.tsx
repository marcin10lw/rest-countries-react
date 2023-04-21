import CountriesPage from "./CountriesPage";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";

const Countries = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/countries" />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:id" element={<div>id</div>} />
      </Routes>
    </>
  );
};

export default Countries;
