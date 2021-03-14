import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {useStyles} from '../App';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">My sticky footer can be found here.</Typography>
                    <Copyright/>
                </Container>
            </footer>
        </div>
    );
}