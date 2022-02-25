import React, { useEffect } from "react";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { connect } from "react-redux";
import { miniMize, maxMize } from "../redux/actions";
const Navbar = ({ windowState, miniMize, maxMize }) => {
  useEffect(() => {
    console.log(windowState);
  }, [windowState]);
  return (
    <>
      <AppBar position="fixed">
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
            <Stack onClick={windowState === "DEFAULT" ? maxMize : miniMize}>
              {windowState === "DEFAULT" ? (
                <CloseFullscreenIcon />
              ) : (
                <OpenInFullIcon />
              )}
            </Stack>
            <ExpandMoreIcon />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default connect(({ navbar }) => ({ windowState: navbar.windowState }), {
  miniMize,
  maxMize,
})(Navbar);
