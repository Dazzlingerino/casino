import React, {useState} from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import {makeStyles} from "@material-ui/core/styles";
import useLocalStorage from "./components/LocalStorage";


export const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appWrapper: {},

    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,

    },
    margin: {
        margin: theme.spacing(1),
    },
    toolbar: {
        flexWrap: 'wrap',
        padding:10,
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    popover: {
        display: 'flex',
        margin: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        display: 'flex',
        padding: 10,
        margin: 20,
        minHeight: '25vh',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 26,
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '10vh',
    },
    content:{
        height: '110vh'
    },
    grid: {
        minHeight: '40vh',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    footer: {

        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

const App = () => {
    const classes = useStyles();
    let [balance, setBalance] = useLocalStorage('balance', 99.99);
    const [login, setLogin] = React.useState(false);

    return (
        <div className={classes.appWrapper}>
            <div className={classes.header}>
                <Header balance={balance} login={login} setLogin={setLogin} />
            </div>
            <div className={classes.content}>
                <Content balance={balance} setBalance={setBalance} />
            </div>
            <div className={classes.footer}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
