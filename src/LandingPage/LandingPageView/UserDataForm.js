import React, { useState, useEffect } from 'react';
import {
    Typography,
    Container,
    Card,
    Button,
    Divider,
    CircularProgress,
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
      width: "70%",
      padding: "0.5rem",
      flexWrap: "wrap",
      height: "100%",
      "@media(max-width : 52rem)": {
        width: "80%",
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
                    //minAge: 18
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
            }}
        >
            {
                (props) => (
                    <Container className={classes.root} maxWidth="md">
                        <Card className={classes.formContainer}>
                        <form onSubmit={props.handleSubmit}>
                            {/* <Autocomplete
                                options={states}
                                getOptionLabel={(option) => option.name}
                                style={{ width: 300 }}
                                onChange={(e, value) => {
                                    console.log(value);
                                    props.setFieldValue("state", value?.name || "");
                                    if (value) {
                                        fetchDistricts(value.id);
                                    } else {
                                        console.log('in else');
                                        props.setFieldValue("district", "")
                                        districtInputRef.current.value = null;
                                        console.log(districtInputRef.current);
                                        setDistricts([]);
                                        setSelectedDistrict(null);
                                    }
                                }}
                                renderInput={(params) => (
                                    <Field inputProps component={TextField} {...params} label="State" name="state" variant="outlined" />
                                )}
                            />
                            <Autocomplete
                                options={districts}
                                getOptionLabel={(option) => option.name}
                                onChange={(e, value) => {
                                    console.log(value);
                                    props.setFieldValue("district", value?.name)
                                }}
                                
                                renderInput={(params) => (
                                    <Field component={TextField} innerRef={districtInputRef} {...params} label="District" name="district" variant="outlined" />
                                )}
                            /> */}
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
                            <Button
                                type="submit"
                                size="large"
                                variant="contained"
                                disabled={!props.isValid || props.isSubmitting}
                                color="primary"
                                className={classes.sybmitBtn}
                            >
                                Submit
                            </Button>
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