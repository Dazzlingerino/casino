import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import StarIcon from "@material-ui/icons/StarBorder";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Popover from '@material-ui/core/Popover';
import React, {useEffect} from "react";
import {useStyles} from "../App";
import Container from '@material-ui/core/Container';


export default function Popup({handleChange, handleClose, balance, setBalance}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [value1, setValue1] = React.useState(0);
    const [value2, setValue2] = React.useState(0);
    const [value3, setValue3] = React.useState(0);

    const setter = () => {

    }
    const handlePlay = () => {
        let generatedValue1 = Math.floor(Math.random() * 10)
        let generatedValue2 = Math.floor(Math.random() * 10)
        let generatedValue3 = Math.floor(Math.random() * 10)

        setValue1(generatedValue1)
        setValue2(generatedValue2)
        setValue3(generatedValue3)

        if ((generatedValue1 === generatedValue2) || (generatedValue2 === generatedValue3)) {
            setBalance(balance + 0.5)
        } else if ((generatedValue1 === generatedValue2) && (generatedValue2 === generatedValue3)) {
            setBalance(balance + 5)
        } else if ((generatedValue1 === generatedValue2) && (generatedValue2 === generatedValue3) && (generatedValue2 === 7)) {
            setBalance(balance + 10)
        } else setBalance(--balance)
    };
    const handleDebug = () => {
        setValue1(7)
        setValue2(7)
        setValue3(7)
    };


    useEffect(() => {
        console.log(value1, value2, value3)
    }, []);

    return (
        <React.Fragment>
            <Grid container direction="row" justify="center" alignItems="flex-end" spacing={3}
                  className={classes.grid}>

                <Grid item xs={3} sm={4}>
                    <Card className={classes.card}>
                        {value1}
                    </Card>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <Card className={classes.card}>
                        {value2}
                    </Card>
                </Grid>
                <Grid item xs={3} sm={4}>
                    <Card className={classes.card}>
                        {value3}
                    </Card>
                </Grid>

                <CardActions>
                    <Button size="small" color="primary" onClick={() => {
                        handlePlay()
                    }}>
                        Play
                    </Button>
                    <Button size="small" color="primary" onClick={() => {
                        handleDebug()
                    }}>
                        Debug
                    </Button>
                    <Button size="small" color="secondary" onClick={() => {
                        handleClose()
                    }}>
                        Close
                    </Button>
                </CardActions>
            </Grid>

        </React.Fragment>
    );
}

