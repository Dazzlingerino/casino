import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {DataGrid} from '@material-ui/data-grid'
import Container from '@material-ui/core/Container';
import {useStyles} from '../App';
import StartButton from "./StartButton";
import Popup, {results} from "./Popup";
import Popover from "@material-ui/core/Popover";



const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'firstSlot', headerName: 'First Slot', width: 130},
    {field: 'secondSlot', headerName: 'Second Slot', width: 140},
    {field: 'thirdSlot', headerName: 'Third Slot', width: 120},
    {field: 'time', headerName: 'Time', type: 'number', width: 90,},
    {
        valueGetter: (params) =>
            `${params.getValue('firstSlot') || ''} ${params.getValue('secondSlot') || ''}`
    }

];

export default function Content({balance, setBalance}) {
    const classes = useStyles();

    const [rows, setRows] = React.useState([])
    const [row, setRow] = React.useState({id:null, firstSlot: 0, secondSlot: 0, thirdSlot: 0, time: 0})
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value1, setValue1] = React.useState(0);
    const [value2, setValue2] = React.useState(0);
    const [value3, setValue3] = React.useState(0);


    let tempDate = new Date();
    const currDate = tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();
    let results = []
    const handlePlay = () => {
        let generatedValue1 = Math.floor(Math.random() * 10)
        let generatedValue2 = Math.floor(Math.random() * 10)
        let generatedValue3 = Math.floor(Math.random() * 10)

        setValue1(generatedValue1)
        setValue2(generatedValue2)
        setValue3(generatedValue3)

        if ((generatedValue1 === generatedValue2) && (generatedValue2 === generatedValue3) && (generatedValue2 === 7)) {
            setBalance(balance + 10)
        } else if ((generatedValue1 === generatedValue2) && (generatedValue2 === generatedValue3)) {
            setBalance(balance + 5)
        } else if ((generatedValue1 === generatedValue2) || (generatedValue2 === generatedValue3)) {
            setBalance(balance + 0.5)
        } else setBalance(--balance)
        results.push('1')
        rows.push({id:results.length, firstSlot: generatedValue1, secondSlot: generatedValue2, thirdSlot: generatedValue3, time: currDate})
        console.log(rows[results.length])
        setRow()
    };

    const handleDebug = () => {
        setValue1(7)
        setValue2(7)
        setValue3(7)
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    debugger
    return (
                   <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    Game results
                    <div style={{height: 300, width: '100%'}}>
                        <DataGrid rows={[row]} columns={columns} pageSize={4}/>
                    </div>
                </Container>
                <Container maxWidth="lg" component="main">
                    <div>
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
                            <Popup value1={value1} value2={value2} value3={value3} setRows={setRows}  handlePlay={handlePlay}  handleClose={handleClose}
                                   handleDebug={handleDebug}/>
                        </Popover>
                    </div>
                </Container>
            </React.Fragment>

            );
            }