// pages/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">
        Welcome to the Profile Management App
      </h1>
      <p className="mt-4">Click below to view or manage profiles:</p>
      <div className="flex space-x-4">
        <Link to="/profiles/:id">
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Go to Profiles
          </button>
        </Link>
        <Link to="/createProfiles">
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Create Profiles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
