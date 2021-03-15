import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from '../App';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import {Avatar} from "@material-ui/core";
import NumberFormat from 'react-number-format';
import Login from "./Login";
import Logout from "./Logout";

export default function Header({balance, login, setLogin}) {
    balance = balance.toFixed(2)
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Slots
                    </Typography>
                    <AccountBalanceWalletIcon/>
                    <NumberFormat value={balance} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
                    {login
                        ? (<>
                            <Avatar className={classes.avatar} alt="User" src="/static/images/avatar/1.jpg"/>
                            <Logout setLogin={setLogin}/>
                        </>)
                        : <Login setLogin={setLogin}/>
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>)
}