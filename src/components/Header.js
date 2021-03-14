import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import {useStyles} from '../App';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import {Avatar, InputBase, TextField} from "@material-ui/core";
import NumberFormat from 'react-number-format';

function NumberFormatCustom(props) {
    const {inputRef, onChange, ...other} = props;

    return (
        <NumberFormat
            {...other}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            isNumericString

        />
    );
}

export default function Header({balance, login, handleChange}) {
    balance = balance.toFixed(2)
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Company name
                    </Typography>
                    <AccountBalanceWalletIcon/>
                    <NumberFormat value={balance} displayType={'text'} format="$##.##"/>
                    {login
                        ? <Avatar alt="User" src="/static/images/avatar/1.jpg"/>
                        : <Button href="#" color="primary" variant="outlined" className={classes.link}>
                            Login
                        </Button>
                    }


                </Toolbar>
            </AppBar>
        </React.Fragment>)
}