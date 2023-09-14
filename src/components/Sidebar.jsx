import React from "react";

import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "92%" },
            flexDirection: { md: "column" },
        }}
    >
        {categories.map((category) => (
            <button
                className="category-btn"
                style={{
                    background: selectedCategory === category.name && "#FC1503",
                    color: "white",
                }}
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
            >
                <span
                    style={{
                        color:
                            selectedCategory === category.name
                                ? "white"
                                : "#FC1503",
                    }}
                >
                    {category.icon}{" "}
                </span>{" "}
                <span
                    style={{
                        opacity:
                            selectedCategory === category.name ? "1" : "0.7",
                        marginLeft: "15px",
                    }}
                >
                    {category.name}{" "}
                </span>{" "}
            </button>
        ))}{" "}
    </Stack>
);

export default Sidebar;
