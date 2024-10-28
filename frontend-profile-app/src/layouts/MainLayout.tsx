import React from "react";
import { Outlet, Link } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-white text-lg font-bold">
            Profile App
          </Link>
          <div>
            <Link to="/profiles/:id" className="text-white mr-4">
              Profiles
            </Link>
            <Link to="/create" className="text-white">
              Create Profile
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
