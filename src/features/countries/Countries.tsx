import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./common/Header";
import CountriesPage from "./CountriesPage";
import CountryPage from "./CountryPage";

const Countries = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/countries" />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:name" element={<CountryPage />} />
        <Route path="*" element={<CountriesPage />} />
      </Routes>
    </>
  );
};

export default Countries;
