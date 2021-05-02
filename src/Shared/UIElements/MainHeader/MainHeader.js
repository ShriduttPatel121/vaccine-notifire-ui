import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button
} from "@material-ui/core";

import Modal from '../Modal/Modal';

function MainHeader(props) {

  const [unSubScribeModal, setUnSubScribeModal] = useState(false);

  const closeModal = () => {
    setUnSubScribeModal(false);
  }

  const openModal = () => {
    setUnSubScribeModal(true);
  }

    return (
    <div>
    <Modal
      title="Unsubscribe from email notification"
      unSubScribe
      open={unSubScribeModal}
      onCloseModal={closeModal}
    />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            Vacine-Notifire
          </Typography>
          <Box flexGrow="1"/>
          <Button variant="outlined" color="secondary" onClick={openModal}>
            Un-subscribe
          </Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default MainHeader;