import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useEffect} from "react";


export default function SoundQuality(props) {

    const handleChange = (event) => {
        props.setState(event.target.value)
    };

    useEffect(() => {
        console.log(props.state);

    }, [props.setState, props.state])

    return (
        <Box sx={{ maxWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ marginLeft: 4 }}>Quality</InputLabel>
                <Select
                    sx={{ marginLeft: 4 }}
                    value={props.value}
                    label="Normal"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Low</MenuItem>
                    <MenuItem value={2}>Normal</MenuItem>
                    <MenuItem value={3}>High</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}