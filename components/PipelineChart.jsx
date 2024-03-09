import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const PipelineChart = ({ projectId }) => {
  const [pipelineData, setPipelineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/pipelines/${projectId}`);
        setPipelineData(response.data);
      } catch (error) {
        console.error("Error fetching pipeline data:", error);
      }
    };

    fetchData();
  }, [projectId]);

  useEffect(() => {
    if (pipelineData.length > 0) {
      // Render chart using pipeline data
      renderChart();
    }
  }, [pipelineData]);

  const renderChart = () => {
    const ctx = document.getElementById("pipelineChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: pipelineData.map((item) => item.date),
        datasets: [
          {
            label: "Success Rate",
            data: pipelineData.map((item) => item.successRate),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  };

  return (
    <div style={{ width: "400px", height: "200px" }}>
      <canvas id="pipelineChart" />
    </div>
  );
};

export default PipelineChart;
