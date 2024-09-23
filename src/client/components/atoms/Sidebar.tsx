import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        w: "100%",
        p: 2,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: { sm: "center", md: "end" },
        justifyContent: { sm: "center", md: "end" },
      }}
    >
      <Image src="/images/sidebar.png" alt="reviews" width={259} height={454} />
    </Box>
  );
};

export default Sidebar;
