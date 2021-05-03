import React, { useState, useEffect, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button
} from "@material-ui/core";
import { useLocation } from "react-router-dom";

import Modal from '../Modal/Modal';

function MainHeader(props) {

  const [unSubScribeModal, setUnSubScribeModal] = useState(false);
  const location = useLocation();
  let { search } = location;
  let queryParams = new URLSearchParams(search);
  let hasUnSubScribe = queryParams.get('unSubscribe');
  console.log(typeof(hasUnSubScribe));
  console.log(hasUnSubScribe);

  const closeModal = () => {
    setUnSubScribeModal(false);
  }

  const openModal = useCallback(() => {
    setUnSubScribeModal(true);
  }, []);

  useEffect(() => {
    if(hasUnSubScribe === 'true') {
      openModal();
    }
  }, [hasUnSubScribe, openModal]);

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
            VaccineNotifier
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