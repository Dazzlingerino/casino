import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React from "react";
import {useStyles} from "../App";

export const results = []

export default function Popup({value1,value2,value3,handlePlay,handleDebug,handleClose}) {
    const classes = useStyles();

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
