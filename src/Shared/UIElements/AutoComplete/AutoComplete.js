import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { useField } from 'formik'

const AutoComplete = React.forwardRef((props, ref) => {
    const [field, meta] = useField(props);
    const { options, name, type, label, onChange, inputValue, disabled } = props;
    return (
        <>
            <Autocomplete
                options={options}
                getOptionLabel={(option) => option.name}
                onChange={onChange}
                inputValue={inputValue}
                disabled={disabled}
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