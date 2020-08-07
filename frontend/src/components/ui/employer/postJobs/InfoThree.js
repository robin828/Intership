import React from 'react'
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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



const InfoThree = (props) => {
    const classes = useStyles();



    const countinue = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    const previous = (e) => {
        e.preventDefault();
        props.prevStep();
    }
    return (
    
            <>
            <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
                <AppBar primary={false} style={{hieght: "20px"}} title="Enter User Details" />
                <TextField 
                    helperText="Enter occupation"
                    onChange={(e)=>{props.setWhoCanApply(e.target.value)}}
                    defaultValue={props.whoCanApply}
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />
                <br />
                <TextField 
                    helperText="Enter Bio"
                    onChange={(e)=>{props.setVaccancy(e.target.value)}}
                    defaultValue={props.vaccancy}
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />
                <br />
                <TextField 
                    helperText="Enter city"
                    onChange={e=>{props.setPerks(e.target.value)}}
                    defaultValue={props.perks}
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />
                <br />
                <Button
            type="submit"
            fullWidth
            onClick={countinue}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Countinue
          </Button>
          <Button
            type="submit"
            fullWidth
            onClick={previous}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Back
          </Button>
          </div>
          </Container>
            </>
        
    )
}

export default InfoThree