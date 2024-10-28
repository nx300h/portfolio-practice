// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileForm from "./components/ProfileForm";
import ProfileList from "./components/ProfileList";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import "./styles/tailwind.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profiles" element={<ProfileList />} />
        <Route path="/profiles/:id" element={<ProfilePage />} />
        <Route path="/createProfiles" element={<ProfileForm />} />
      </Routes>
    </Router>
  );
};

export default App;
