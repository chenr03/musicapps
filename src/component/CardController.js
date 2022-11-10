import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const label = { inputProps: { 'aria-label': 'Online Now' } };

export default function CardController(props) {
    const {title, description, component: Component} = props;


    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                    {props.description}
                </Typography>
            </CardContent>
            <Component
            {...label}
            onChange={() => props.setState(!props.state)}
            />
            <CardActions>

            </CardActions>

        </Card>
    );
}