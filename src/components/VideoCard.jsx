import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
    demoThumbnailUrl,
    demoVideoUrl,
    demoChannelUrl,
    demoChannelTitle,
    demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => {
    return (
        <Card
            sx={{
                // width: "320px",
                // !
                width: "320px",
                boxShadow: "none",
                borderRadius: "5% 5% 0 0",
            }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={
                        snippet.thumbnails.high
                            ? snippet.thumbnails.high.url
                            : demoThumbnailUrl
                    }
                    alt={snippet.title}
                    sx={{ width: 320, height: 180 }}
                />{" "}
                <CardContent
                    sx={{
                        backgroundColor: "#1e1e1e",
                        height: "75px",
                        // borderRadius: "0 0 10px 10px",
                    }}
                >
                    {/* Text for Video Title */}{" "}
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            color="#fff"
                            mb="10px"
                        >
                            {snippet.title.slice(0, 60) ||
                                demoVideoTitle.slice(0, 60)}{" "}
                        </Typography>{" "}
                    </Link>{" "}
                    {/* Text for Channel Title */}{" "}
                    <Link
                        to={
                            snippet.channelId
                                ? `/channel/${snippet.channelId}`
                                : demoChannelUrl
                        }
                    >
                        <Typography
                            variant="subtitle2"
                            fontWeight="bold"
                            color="gray"
                        >
                            {snippet.channelTitle || demoChannelTitle}{" "}
                            <CheckCircle
                                sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                            />{" "}
                        </Typography>{" "}
                    </Link>{" "}
                </CardContent>{" "}
            </Link>{" "}
        </Card>
    );
};

export default VideoCard;
