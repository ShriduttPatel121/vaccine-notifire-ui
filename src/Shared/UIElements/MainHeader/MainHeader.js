import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

function MainHeader(props) {

    return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            Vacine-Notifire
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default MainHeader;