import React from 'react'
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles'
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'green',
      margin: "5px"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


const InfoOne = (props) => {
    const classes = useStyles();
    const countinue = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    return (
    
            <>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <AppBar style={{hieght: "20px"}} title="Enter User Details" />
                <TextField 
                    label="Enter Name"
                    onChange={(e)=>{props.setName(e.target.value)}}
                    value={props.name}
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    autoFocus
                />
                <br />
                <TextField 
                    label="Enter job Type"
                    onChange={(e)=>{props.setJobType(e.target.value)}}
                    value={props.jobType}
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    autoFocus
                />
                <br />
                <TextField 
                    label="Enter startDate"
                    onChange={(e)=>{props.setStartDate(e.target.value)}}
                    value={props.startDate}
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    autoFocus
                />
                <br />
                <TextField 
                    label="Enter duration"
                    onChange={(e)=>{props.setDuration(e.target.value)}}
                    value={props.duration}
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    autoFocus
                />
                <br />
                <Button
            type="submit"
            onClick={countinue}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            countinue
          </Button>
                </div>
                </Container>
            </>

        
    )
}
const styles = {
    button: {
        margin: 15,
    }
}

export default InfoOne
