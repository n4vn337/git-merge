// pages/[projectId].js

import React from "react";
import PipelineChart from "../components/PipelineChart";
import LastMerges from "../components/LastMerges";

const ProjectDetail = ({ projectId }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Project: {projectId}</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <PipelineChart projectId={projectId} />
        </div>
        <div>
          <LastMerges projectId={projectId} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

export async function getServerSideProps({ params }) {
  const { projectId } = params;
  return {
    props: {
      projectId,
    },
  };
}
