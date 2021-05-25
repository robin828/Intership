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
            
        </>
    )
}

export default Landing
