import React from "react";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography sx={{ display: { xs: "flex", md: "flex", lg: "flex" } }}>
            <Stack direction="row" spacing={2}>
              <MoreVertIcon />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                variant="square"
                src="images/unsplash_cTqxDBsEv3g.png"
              />
              <Typography variant="h8">Fusce Boat</Typography>
            </Stack>
          </Typography>

          <Stack
            sx={{ marginLeft: "auto", display: { xs: "flex", md: "flex" } }}
            direction="row"
            spacing={2}
          >
            <CloseFullscreenIcon />
            <ExpandMoreIcon />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
