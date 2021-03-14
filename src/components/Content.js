import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import {DataGrid} from '@material-ui/data-grid'
import Container from '@material-ui/core/Container';
import {useStyles} from '../App';
import StartButton from "./StartButton";
import Popup from "./Popup";
import Popover from "@material-ui/core/Popover";


const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'firstSlot', headerName: 'First Slot', width: 130},
    {field: 'secondSlot', headerName: 'Second Slot', width: 140},
    {field: 'thirdSlot', headerName: 'Third Slot', width: 130},
    {field: 'time', headerName: 'Time', type: 'number', width: 90,},

];

const rows = [
    {id: 1, firstGame: 'Score', secondGame: 'Score', thirdGame: 'Score', time: 35},
];

function DataTable() {
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid rows={rows} columns={columns} pageSize={5} className={'Score'} name={'score'}/>
        </div>
    );
}

export default function Content({balance,setBalance,handleChange}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                Game results
                <DataTable/>

            </Container>

            <Container maxWidth="sm" component="main">
                <div >

                    <StartButton handleClick={handleClick}/>

                    <Popover className={classes.popover}
                             id={id}
                             open={open}
                             anchorEl={anchorEl}
                             onCancel={handleClose}
                             aria-labelledby="simple-modal-title"
                             aria-describedby="simple-modal-description"
                             anchorOrigin={{
                                 vertical: 'bottom',
                                 horizontal: 'center',
                             }}
                             transformOrigin={{
                                 vertical: 'top',
                                 horizontal: 'center',
                             }}
                    >
                        <Popup handleChange={handleChange} handleClose={handleClose} balance={balance} setBalance={setBalance}/>
                    </Popover>
                </div>
            </Container>
        </React.Fragment>
    );
}