import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import VolumeUp from '@mui/icons-material/VolumeUp';


export default function VolumeSlider(props) {

    console.log(props)

    const handleChange = (event) => {
        props.setState(event.target.value)
        ;

    };

    useEffect(() => {
        console.log(props.state);

    }, [props.setState, props.state])



    return (
        <Box sx={{ width: 250 }}>
            <Typography>

            </Typography>
            <Grid container spacing={2} alignItems="center" padding={2}>
                <Grid item>
                    <VolumeUp />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={props.value}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}