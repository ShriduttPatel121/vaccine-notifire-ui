import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useHttpClient } from "../../Shared/hooks/http-hook";
/* import { c } from './demoslots'; */
import CenterDetails from "./CenterDetails";
import Spinner from "../../Shared/UIElements/Spinner/spinner";

const useStyles = makeStyles((theme) => ({
  slotHeading: {
    borderBottom: "1px solid #1c4e6ba3",
    marginTop: -theme.spacing(1),
    marginRight: -theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: -theme.spacing(1),
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    padding: '0.5rem 0'
  },
  noResults: {
    '@media(max-width: 700px)': {
      height: '220px'
    }
  }
}));

const AvailableSlots = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const { isLoading, sendRequest } = useHttpClient();
  const [availableSlots, setAvailableSlots] = useState([]);

  let { refreshRedults } = props;
  let queryParams = new URLSearchParams(location.search);
  let districtId = queryParams.get("districtId");
  const minAge = queryParams.get("minAge");
  useEffect(() => {
    console.log('refreshed'+ refreshRedults);
    console.log('dis'+districtId + 'minAge' + minAge);
    const fetchNextSlots = async () => {
      try {
        const slots = await sendRequest(
          `https://api.vaccinenotifier.co.in/vaccine-notifier/getNextSlot?district_id=${districtId}&minAge=${minAge}`
        );
        setAvailableSlots(slots);
      } catch (e) {
        console.log(e);
        alert(
          "Somthing went wrong while searching suitable centers for you, please try again later."
        );
      }
    };

    fetchNextSlots();
  }, [sendRequest, districtId, minAge, refreshRedults]);

  return (
    <>
      {isLoading ? <Spinner /> :
      (<Box
        overflow="auto"
        maxHeight="58vh"
        border="1px solid #1c4e6ba3"
        padding="0.5rem"
      >
        <div className={classes.slotHeading}>
          <Typography variant="h4" component="h5" style={{color: 'white'}}>
            Available Centers
          </Typography>
        </div>
        {availableSlots.length > 0 ?
        ( availableSlots.map((center) => (
          <CenterDetails
            key={center.center_id}
            name={center.name}
            pincode={center.pincode}
            sessions={center.sessions}
            state_name={center.state_name}
            district_name={center.district_name}
            block_name={center.block_name}
            fee_type={center.fee_type}
          />
        )))
        : (
            <Box className={classes.noResults} height="175px" display="flex" justifyContent="center" flexDirection="column">
              <ul>
                <li>
                  <Typography variant="h6" component="strong" style={{fontSize: '16.5px'}}>
                    Sorry, we could not find centers for you now. Please provide us your email by clicking NOTIFY ME button. You will receive an email as soon as centers are availabe in your district.
                  </Typography>
                </li>
                <li>
                <Typography>
                  Meanwhile, please sanatize your hands regularly, wear mask and maintain social distancing.
                </Typography>
                </li>
                <li>
                  <Typography>
                    Thank you for using VaccineNotifier.
                  </Typography>
                </li>
              </ul>
            </Box>
        )}
      </Box>)}
    </>
  );
};
export default AvailableSlots;
