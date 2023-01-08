import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchApi } from "../utils/fetchApi";

const ChannelDetails = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setchannelDetail(data?.items[0])
    );
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setvideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,94,1) 0%, rgba(0,212,255,1) 100%)",
            zIndex: 100,
            height: 300,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "120px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
