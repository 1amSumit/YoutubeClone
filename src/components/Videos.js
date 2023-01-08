import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos }) => (
  <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={2}>
    {videos.map((item, indx) => (
      <Box key={indx}>
        {item.id.videoId && <VideoCard video={item} />}
        {item.id.channelId && <ChannelCard channelDetail={item} />}
      </Box>
    ))}
  </Stack>
);
export default Videos;
