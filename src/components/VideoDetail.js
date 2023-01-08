import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchApi } from "../utils/fetchApi";

const VideoDetail = () => {
  const [videosDetails, setvideosDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setvideosDetails(data.items[0])
    );
  }, [id]);

  const { snippet } = videosDetails;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex="1">
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p="2px">
              {/* {snippet.title} */}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
