import React from "react";
import ProjectLinks from "../components/ProjectLinks";

const projects = [
  { id: "project1", name: "Project 1" },
  { id: "project2", name: "Project 2" },
  // Add more projects as needed
];

const Home = () => {
  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <ProjectLinks projects={projects} />
      </div>
      <div className="w-2/3 p-4">
        {/* Placeholder for selected project analytics */}
      </div>
    </div>
  );
};

export default Home;
