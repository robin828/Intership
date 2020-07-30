import React from 'react'
import Lottie from 'react-lottie'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/grid'
import { Button } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles(theme=>({

}))
const Landing = () => {
    const classes = useStyles();
   
    return (
        <>
            <Grid container direction="column">
                <Grid item>
                    <div variant="outline" backgroundColor="red"></div>
                    <Grid container direction="row">
                        <Grid item>
                            <div>Bringing West Coast Technology<br />to the Midwest</div>
                            <Grid container>
                                <Grid item>
                                    <Button variant="contained">Free Estimste</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined">Learn More</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                        <div variant="outline" backgroundColor="green"></div>
                        </Grid>                           
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Landing
