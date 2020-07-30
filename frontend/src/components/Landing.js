import React from 'react'
import Lottie from 'react-lottie'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/grid'
import { Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme=>({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%"
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        buttonContainer: {
            marginTop: "1em",
        },
    },
        learnButton: {
            borderRadius: 50,
            borderWidth: 2,
            height: 45,
            width: 145,
            borderColor: theme.palette.common.blue,
            color: theme.palette.common.blue,
            textTransform: "none",
            fontFamily: "Roboto",
            fontSize: "0.9rem",
            fontWeight: "bold",
            "&:hover": {
                backgroundColor: theme.palette.secondary.light
            },   
    }
}))
const Landing = () => {
    const classes = useStyles();
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <>
            <Grid container direction="column">
                <Grid item>
                    <Grid container justify="flex-end" alignItems="center" direction="row">
                        <Grid sm item>
                            <Typography align="center" variant="h2">Bringing West Coast Technology<br />to the Midwest</Typography>
                            <Grid container justify="center">
                                <Grid item className={classes.buttonContainer}>
                                    <Button className={classes.estimateButton} variant="contained">Free Estimste</Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.learnButton} variant="outlined">Learn More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.animation} sm item>
                            <Lottie options={defaultOptions} height={"100%"} width={"100%"} /> 
                        </Grid>                           
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Landing
