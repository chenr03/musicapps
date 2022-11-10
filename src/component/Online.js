import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Online Now' } };

export default function Online(props) {

    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Online Now
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                    Is this application connected to the internet?
                </Typography>
            </CardContent>
            <CardActions>
                <Switch {...label} onChange={() => props.setIsOnline(!props.isOnline)} />
            </CardActions>

        </Card>
    );
}