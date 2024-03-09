// Mock data for pipeline success rate
const pipelineData = {
  project1: [
    { date: "2024-03-01", successRate: 0.8 },
    { date: "2024-03-02", successRate: 0.7 },
    { date: "2024-03-03", successRate: 0.9 },
    // Add more pipeline data for project1
  ],
  project2: [
    { date: "2024-03-01", successRate: 0.9 },
    { date: "2024-03-02", successRate: 0.6 },
    { date: "2024-03-03", successRate: 0.8 },
    // Add more pipeline data for project2
  ],
  // Add more projects and their pipeline data as needed
};

export default function handler(req, res) {
  const { projectId } = req.query;

  // Check if projectId is provided and exists in pipelineData
  if (!projectId || !pipelineData[projectId]) {
    return res.status(404).json({ error: "Project not found" });
  }

  // Return pipeline data for the specified project
  res.status(200).json(pipelineData[projectId]);
}
