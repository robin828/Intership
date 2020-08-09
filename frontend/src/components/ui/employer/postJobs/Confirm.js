import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  

const Confirm = (props) => {
    const classes = useStyles();
    
    const {name, jobType, startDate, duration, stipend, workType, aboutWork, skillsRequired, whoCanApply, vaccancy, perks} = props

    const Submit = async (e) => {
        e.preventDefault();
        console.log(localStorage.getItem('userId'))
        await Axios.post("http://localhost:5000/api/postjobs",{
            name, jobType, startDate, duration, stipend, workType, aboutWork, skillsRequired, whoCanApply, vaccancy, perks, userId:localStorage.getItem('employerId')
        }, {
          headers: {
            'auth_token': localStorage.getItem('token')
          }
        }).then(res=>console.log(res)).catch(err=>console.log(err))
    }
    const previous = (e) => {
        e.preventDefault();
        props.prevStep();
    }
    return (
    
            <>
            <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
                <AppBar primary={false} style={{hieght: "20px"}} title="Confirm User Data" />
                <List>
                    <ListItem>
                    <ListItemText primary="First Name" />
                    <ListItemText secondary={ props.name } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="First Name" />
                    <ListItemText secondary={ props.jobType } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="First Name" />
                    <ListItemText secondary={ props.startDate } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="First Name" />
                    <ListItemText secondary={ props.duration } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="First Name" />
                    <ListItemText secondary={ props.stipend } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="First Name" />
                    <ListItemText secondary={ props.workType } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="First Name" />
                    <ListItemText secondary={ props.aboutWork } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="First Name" />
                    <ListItemText secondary={ props.skillsRequired } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="First Name" />
                    <ListItemText secondary={ props.whoCanApply } />
                    </ListItem><ListItem>
                    <ListItemText primary="First Name" />
                    <ListItemText secondary={ props.vaccancy } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="First Name" />
                    <ListItemText secondary={ props.perks } />
                    </ListItem>
                    
                
                    
                </List>
                <Button
            type="submit"
            fullWidth
            onClick={Submit}
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
                </Container>
            </>
        
    )
}
const styles = {
    button: {
        margin: 15,
    }
}

export default Confirm