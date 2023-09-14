import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
    const { id } = useParams();

    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    console.log(channelDetail, videos);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
            if (channelDetail == null) {
                setChannelDetail(data.items[0]);
            }
        });
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => {
                if (videos.length === 0) {
                    setVideos(data.items.slice(0, data.items.length - 1));
                }
            }
        );
    }, [id, channelDetail, videos]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        background: "linear-gradient(90deg, red, black)",
                        zIndex: 10,
                        height: "300px",
                    }}
                />{" "}
                {channelDetail && (
                    <ChannelCard channel={channelDetail} marginTop="-110px" />
                )}{" "}
            </Box>{" "}
            <Box display="flex" p="2" marginTop="50px">
                {" "}
                <Box /> <Videos videos={videos} />{" "}
            </Box>{" "}
        </Box>
    );
};

export default ChannelDetail;
