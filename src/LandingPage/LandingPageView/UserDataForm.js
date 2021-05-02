import React, { useState, useEffect } from 'react';
import {
    Typography,
    Container,
    Card,
    Button,
    Box,
    Divider,
    CircularProgress,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel
  } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/styles";

import TextInput from "../../Shared/UIElements/Input/TextInput";
import { useHttpClient } from '../../Shared/hooks/http-hook';
import AutoComplete from '../../Shared/UIElements/AutoComplete/AutoComplete'

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

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
        try {
            const fetchStates = async () => {
                const receivedStates = await sendRequest('https://cdn-api.co-vin.in/api/v2/admin/location/states');
                console.log(receivedStates);
                setStates(receivedStates.states.map((state) => ({id: state.state_id, name: state.state_name})));
            }
            fetchStates();
        } catch (e) {

        }
    },[sendRequest]);

    const fetchDistricts = async (state_id) => {
        const receivedDistricts = await sendRequest(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`);
        setDistricts(receivedDistricts.districts.map((dis) => ({id: dis.district_id, name: dis.district_name})));
    }

    return(
        <>
        <Formik
            enableReinitialize
            initialValues={
                {
                    name: "",
                    state: "",
                    district: "",
                    pincode: "",
                    ageGroup: 18
                }
            }
            validationSchema={
                Yup.object({
                    name: Yup.string().required('Name is a required field'),
                    pincode: Yup.string().required("pincode is required").trim().length(6),
                    state: Yup.string().required(),
                    district: Yup.string().required()
                })
            }
            onSubmit={ (value, { setSubmitting, resetForm }) => {
                console.log(value);
                resetForm();
                setSelectedState("");
                setSelectedDistrict("");
                setDistricts([{id: null, name: ""}]);
            }}
        >
            {
                (props) => (
                    <Container className={classes.root} maxWidth="md">
                        <Card className={classes.formContainer}>
                        <form onSubmit={props.handleSubmit}>
                            <AutoComplete
                                name="state"
                                options={states}
                                label="State"
                                inputValue={selectedState}
                                disabled={false}
                                onChange={(e, value) => {
                                    console.log(value);
                                    fetchDistricts(value?.id)
                                    setDistrictDisabled(false);
                                    
                                    if (!value) {
                                        setSelectedDistrict("");
                                        setSelectedState("");
                                        setDistrictDisabled(true);
                                        props.setFieldValue("district", "");
                                        props.setFieldValue("state", "")
                                    } else{
                                        setSelectedState(value?.name);
                                        props.setFieldValue("state", value?.name);
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
                                    } else {
                                        setSelectedDistrict("");
                                    }
                                }}
                            />
                            <TextInput name="pincode" label="Pincode" variant="outlined" />
                            <TextInput name="name" label="Name" variant="outlined" />
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
                                className={classes.sybmitBtn}
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