import React from "react";
import Link from "next/link";

const ProjectLinks = ({ projects }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Project Links</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {/* Use CSS to style the link */}
            <Link href={`/${project.id}`}>
              <span className="text-blue-500 hover:underline cursor-pointer">
                {project.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectLinks;
