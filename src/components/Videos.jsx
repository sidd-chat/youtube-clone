import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
    return (
        <div>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="space-evenly"
                // justifyContent="flex-start"
                rowGap={5}
                columnGap={2}
            >
                {videos.map((item, i) => (
                    <Box key={i}>
                        {" "}
                        {item.id.videoId && <VideoCard video={item} />}{" "}
                        {item.id.channelId && <ChannelCard channel={item} />}{" "}
                    </Box>
                ))}{" "}
            </Stack>{" "}
        </div>
    );
};

export default Videos;
