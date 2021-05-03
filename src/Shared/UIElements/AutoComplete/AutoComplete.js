import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { useField } from 'formik'

const AutoComplete = React.forwardRef((props, ref) => {
    const [field, meta] = useField(props);
    const { options, name, type, label, onChange, disabled } = props;

    return (
        <>
            <div className="Input">
            <Autocomplete
                options={options}
                getOptionLabel={(option) => option.name || ""}
                onChange={onChange}
                //inputValue={inputValue}
                //value={val}
                disabled={disabled}
                renderInput={(params) => {
                    return <TextField label={label} type={type || 'text'} {...params} {...field} name={name} inputProps={{...params.inputProps,autoComplete: "new-password"}} error={meta.error && meta.touched} variant="outlined" autoComplete="off"/>
                }}
            />
            </div>
            {
                (meta.error && meta.touched) ? <span style={{color: 'red'}}>{meta.error}</span> : null
            }
        </>
    );
});

export default AutoComplete;