// components/LastMerges.js

import React, { useEffect, useState } from "react";
import axios from "axios";

const LastMerges = ({ projectId }) => {
  const [lastMerges, setLastMerges] = useState([]);

  useEffect(() => {
    const fetchLastMerges = async () => {
      try {
        const response = await axios.get(`/api/lastmerges/${projectId}`);
        setLastMerges(response.data);
      } catch (error) {
        console.error("Error fetching last merges:", error);
      }
    };

    fetchLastMerges();
  }, [projectId]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Last Merges</h2>
      <ul>
        {lastMerges.map((merge, index) => (
          <li key={index}>{merge}</li>
        ))}
      </ul>
    </div>
  );
};

export default LastMerges;
