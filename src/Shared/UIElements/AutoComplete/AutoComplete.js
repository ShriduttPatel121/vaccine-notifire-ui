import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { useField } from 'formik'

const AutoComplete = React.forwardRef((props, ref) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    const { options, name, type, label, onChange, inputValue } = props;
    return (
        <>
            <Autocomplete
                options={options}
                getOptionLabel={(option) => option.name}
                onChange={onChange}
                inputValue={inputValue}
                renderInput={(params) => {
                    return <TextField label={label} type={type || 'text'} {...params} name={name} {...field} error={meta.error && meta.touched} variant="outlined" />
                }}
            />
            {
                (meta.error && meta.touched) ? <span style={{color: 'red'}}>{meta.error}</span> : null
            }
        </>
    );
});

export default AutoComplete;
{/* <Autocomplete
                                options={districts}
                                getOptionLabel={(option) => option.district_name}
                                onChange={(e, value) => {
                                    console.log(value);
                                    props.setFieldValue("district", value?.district_name)
                                }}
                                ref={districtInputRef}
                                renderInput={(params) => (
                                    <Field component={TextField} {...params} label="District" name="district" variant="outlined" />
                                )}
                            /> */}