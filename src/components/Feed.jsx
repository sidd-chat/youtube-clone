import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);

    // useEffect is a lifecycle hook that gets called when the component initially loads
    useEffect(() => {
        fetchFromAPI(
            `search?part=snippet&q=${selectedCategory}&order=date`
        ).then((data) => setVideos(data.items));
    }, [selectedCategory]);
    // .then is executed when the fetch is successful. This is for async functions
    // Whatever is used inside the function passed is passed in the dependencies

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            {" "}
            {/* Sidebar */}{" "}
            <Box
                sx={{
                    height: { sx: "auto", md: "92vh" },
                    width: { md: "14rem" },
                    borderRight: "1px solid #3d3d3d",
                    px: { sx: 0, md: 2 },
                }}
            >
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />{" "}
                <Typography
                    className="copyright"
                    variant="body2"
                    sx={{ mt: 1.5, color: "#fff" }}
                >
                    Copyright 2023 Siddhartha Chatterjee{" "}
                </Typography>{" "}
            </Box>{" "}
            {/* Videos */}{" "}
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{ color: "white" }}
                >
                    {selectedCategory}{" "}
                    <span style={{ color: "#FC1503" }}> VIDEOS </span>{" "}
                </Typography>{" "}
                <Videos videos={videos} />{" "}
            </Box>{" "}
        </Stack>
    );
};

export default Feed;
