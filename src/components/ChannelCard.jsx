import { Link } from "react-router-dom";

import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture, demoChannelUrl } from "../utils/constants";

const ChannelCard = ({ channel, marginTop }) => (
    // ! 1. Solve Subscriber Count not showing up problem
    <Box
        sx={{
            boxShadow: "none",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "356px", md: "320px" },
            height: "295px",
            margin: "auto",
            marginTop,
            width: "320px",
            borderRadius: "0",
        }}
    >
        <Link to={`/channel/${channel.snippet.channelId}`}>
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#fff",
                }}
            >
                <CardMedia
                    image={
                        channel.snippet.thumbnails.high.url ||
                        demoProfilePicture
                    }
                    alt={channel.snippet.title}
                    sx={{
                        borderRadius: "50%",
                        height: "180px",
                        width: "180px",
                        mb: 2,
                        border: "5px solid #e3e3e3",
                    }}
                />{" "}
                <Typography variant="h6">
                    {" "}
                    {channel.snippet.title}{" "}
                    {/* <CheckCircle
                                                                                                                                                                                                                                                                                                                                                                sx={{ fontSize: 14, color: "gray", ml: "5px" }}
                                                                                                                                                                                                                                                                                                                                                            />{" "} */}{" "}
                </Typography>{" "}
                {channel.statistics ? (
                    <Typography fontSize="12px">
                        {" "}
                        {parseInt(
                            channel.statistics.subscriberCount
                        ).toLocaleString() + " "}
                        Subscribers{" "}
                    </Typography>
                ) : (
                    ""
                )}{" "}
            </CardContent>{" "}
        </Link>{" "}
    </Box>
);

export default ChannelCard;
