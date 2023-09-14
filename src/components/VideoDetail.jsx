import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { Typography, Stack, Box } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [suggestedVideos, setSuggestedVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Fetching the Main Video
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
            setVideoDetail(data.items[0]);
        });

        // Fetching Suggested Videos
        fetchFromAPI(
            `search?part=snippet&relatedToVideoId=${id}&type=video`
        ).then((data) => {
            setSuggestedVideos(data.items);
        });
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Stack direction={{ sx: "column", md: "row" }}>
                <Box flex={1}>
                    <Box
                        sx={{ width: "100%", position: "sticky", top: "86px" }}
                    >
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player"
                            controls
                            playing
                        />{" "}
                    </Box>{" "}
                </Box>{" "}
            </Stack>{" "}
            <Box px={10} py={10}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{ color: "white" }}
                >
                    Suggested <span style={{ color: "#FC1503" }}> VIDEOS </span>{" "}
                </Typography>{" "}
                <Videos videos={suggestedVideos || []} />{" "}
            </Box>{" "}
        </Box>
    );
};

export default VideoDetail;
