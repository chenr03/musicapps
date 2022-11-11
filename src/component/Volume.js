import React, {useEffect} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

import VolumeUp from '@mui/icons-material/VolumeUp';




 


export default function VolumeSlider(props) {
    // const [value, setValue] = React.useState(1);

    // const handleSliderChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    console.log(props)

    const handleChange = (event) => {
        props.setState(event.target.value)
        ;

    };

    useEffect(() => {
        console.log(props.state);

    }, [props.setState])



    return (
        <Box sx={{ width: 250 }}>
            <Typography id="input-slider" gutterBottom>

            </Typography>
            <Grid container spacing={2} alignItems="center" padding={2}>
                <Grid item>
                    <VolumeUp />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={props.value}
                        onChange={handleChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}