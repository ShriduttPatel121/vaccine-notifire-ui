import React, { useState, useEffect } from 'react';
import {
    Container,
    Card,
    Button,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from 'react-router-dom';

import TextInput from "../../Shared/UIElements/Input/TextInput";
import { useHttpClient } from '../../Shared/hooks/http-hook';
import AutoComplete from '../../Shared/UIElements/AutoComplete/AutoComplete';
import Modal from '../../Shared/UIElements/Modal/Modal';

const useStyles = makeStyles({
    root: {
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      width: "100%",
      padding: "0.5rem",
      flexWrap: "wrap",
      height: "100%",
      "@media(max-width : 52rem)": {
        width: "100%",
      },
    },
    formContainer: {
      padding: "2rem 1rem",
      textAlign: "center",
      width: "25rem",
    },
  
    sybmitBtn: {
      marginTop: "1rem",
    },
  });
const UserDataForm =  (props) => {
    const classes = useStyles();
    const [states, setStates] = useState([{id: null, name: ""}]);
    const [districts, setDistricts] = useState([{id: null, name: ""}]);
    const [districtDisabled, setDistrictDisabled] = useState(true);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [stateId, setStateId] = useState();
    const [districtId, setDistrictId] = useState();
    const [notifyModalVisibility, setNotifyModalVisibility] = useState(false);
    const history = useHistory();
    const { setRefreshRedults } = props

    const { sendRequest } = useHttpClient();

    useEffect(() => {
        try {
            const fetchStates = async () => {
                const receivedStates = await sendRequest('https://cdn-api.co-vin.in/api/v2/admin/location/states');
                console.log(receivedStates);
                setStates(receivedStates.states.map((state) => ({id: state.state_id, name: state.state_name})));
            }
            fetchStates();
        } catch (e) {
            alert("Somthing went wrong while fetching all states, please try again later.");
        }
    },[sendRequest]);

    const fetchDistricts = async (state_id) => {
        try {
            const receivedDistricts = await sendRequest(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`);
            setDistricts(receivedDistricts.districts.map((dis) => ({id: dis.district_id, name: dis.district_name})));
        } catch(e) {
            alert("Somthing went wrong while fetching districts, please try again later.");
        }
    }

    const closeNotifyModal = () => {
        setNotifyModalVisibility(false);
    }

    const openNotifyModal = () => {
        setNotifyModalVisibility(true);
    }

    return(
        <>
        <Formik
            enableReinitialize
            initialValues={
                {
                    state: "",
                    district: "",
                    pincode: "",
                    ageGroup: 18
                }
            }
            validationSchema={
                Yup.object({
                    pincode: Yup.string().trim().length(6),
                    state: Yup.string().required().oneOf(states.map(s => s.name), "select a valid state"),
                    district: Yup.string().required("please provide a valid district").oneOf(districts.map(d => d.name), 'select a valid district or select again from the list')
                })
            }
            onSubmit={ async (value, { setSubmitting, resetForm, ...actions}) => {
                console.log(value);
                // resetForm();
                // setSelectedState("");
                // setSelectedDistrict("");
                // setStateId(null);
                // setDistrictId(null);
                // setDistricts([{id: null, name: ""}]);
                setSubmitting(false);
                console.log('submit clicked')
                history.push(`/home/nextAvailableSlots?districtId=${districtId}&minAge=${value.ageGroup}`);
                setRefreshRedults();
            }}
        >
            {
                (props) => (
                    <Container className={classes.root} maxWidth="md">
                    <Modal
                        open={notifyModalVisibility}
                        title="Enter your email to get email notification"
                        onCloseModal={closeNotifyModal}
                        stateId={stateId}
                        districtId={districtId}
                        userData={props.values}
                    >

                    </Modal>
                        <Card className={classes.formContainer}>
                        <form onSubmit={props.handleSubmit}>
                            <AutoComplete
                                name="state"
                                options={states}
                                label="State"
                                inputValue={selectedState}
                                disabled={false}
                                onChange={async (e, value) => {
                                    console.log(value);
                                    await fetchDistricts(value?.id)
                                    setDistrictDisabled(false);
                                    
                                    if (!value) {
                                        setSelectedDistrict("");
                                        setSelectedState("");
                                        setDistrictDisabled(true);
                                        setStateId(null);
                                        setDistrictId(null);
                                        props.setFieldValue("district", "");
                                        props.setFieldValue("state", "");
                                    } else{
                                        setSelectedState(value?.name);
                                        props.setFieldValue("state", value?.name);
                                        setStateId(value?.id);
                                        //props.setFieldValue("district", districts[0]?.name);
                                        //selected
                                    }
                                }}
                            />
                            <AutoComplete
                                name="district"
                                options={districts}
                                disabled={districtDisabled}
                                label="District"
                                inputValue={selectedDistrict}
                                onChange={(e, value) => {
                                    console.log(value);
                                    props.setFieldValue("district", value?.name)
                                    if (value !== null) {
                                        setSelectedDistrict(value?.name);
                                        setDistrictId(value?.id);
                                    } else {
                                        setSelectedDistrict("");
                                        setDistrictId(null);
                                    }
                                }}
                            />
                            <TextInput name="pincode" label="Pincode" variant="outlined" />
                            <FormLabel component="legend" style={{textAlign: 'initial', paddingLeft: '1rem', paddingTop: '0.5rem'}}>Age Group</FormLabel>
                            <RadioGroup aria-label="age-group" style={{flexDirection: 'row', paddingLeft: '1rem'}} value={props.values.ageGroup} onChange={
                                (e) => {
                                    props.setFieldValue("ageGroup", +(e.target.value));
                                }
                            }>
                                <FormControlLabel value={18} control={<Radio />} label="18+" />
                                <FormControlLabel value={45} control={<Radio />} label="45+" />
                            </RadioGroup>
                            <Box display="flex" width="100%" justifyContent="space-around">
                            <Button
                                type="button"
                                size="large"
                                variant="outlined"
                                color="primary"
                                disabled={!(props.isValid && props.dirty)}
                                className={classes.sybmitBtn}
                                onClick={openNotifyModal}
                            >
                                Notify me
                            </Button>
                            <Button
                                type="submit"
                                size="large"
                                variant="contained"
                                disabled={!props.isValid || props.isSubmitting}
                                color="primary"
                                className={classes.sybmitBtn}
                            >
                                Search
                            </Button>
                            </Box>
                        </form>
                            
                        </Card>
                    </Container>
                )
            }
        </Formik>
        </>
    );
};
export default UserDataForm;