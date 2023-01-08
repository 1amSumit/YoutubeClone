import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

import { fetchApi } from "../utils/fetchApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", flex: 2, height: "90vh" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results for
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
