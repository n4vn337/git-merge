// pages/api/lastmerges/[projectId].js

// Mock data for last merges
const lastMergesData = {
  project1: ["Merge 1", "Merge 2", "Merge 3"],
  project2: ["Merge A", "Merge B", "Merge C"],
  // Add more project last merges data as needed
};

export default function handler(req, res) {
  const { projectId } = req.query;

  // Check if projectId is provided and exists in lastMergesData
  if (!projectId || !lastMergesData[projectId]) {
    return res.status(404).json({ error: "Project not found" });
  }

  // Return last merges data for the specified project
  res.status(200).json(lastMergesData[projectId]);
}
