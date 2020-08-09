import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import { skills } from '../SkillsAndSelect';
import Select from 'react-select';


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
    skill:{
      width: "100%",
      height:"1.1876em"
    }
  }));


const FormPersonalDetails = (props) => {
    const classes = useStyles();
    const [skill, setSkill] = useState([]);
    
    const countinue = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    const previous = (e) => {
        e.preventDefault();
        props.prevStep();
    }
    const handleChangedSkill = (value) => {
      //console.log(value)
      const skillArray = [];
      value.map((skill)=>{
        skillArray.push(skill.value)
        ;
      })
      props.setSkillsRequired(skillArray);
      
    } 
    console.log(props.skillsRequired)
    
    
    return (
        
            <>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <AppBar primary={false} style={{hieght: "20px"}} title="Enter User Details" />
                <TextField 
                    helperText="Enter stipend"
                    onChange={(e)=>{props.setStipend(e.target.value)}}
                    defaultValue={props.stipend}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                />
                <br />
                <TextField 
                    helperText="Enter workType"
                    onChange={(e)=>{props.setWorkType(e.target.value)}}
                    defaultValue={props.workType}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                />
                <br />
                <TextField 
                    helperText="Enter aboutWork"
                    onChange={(e)=>{props.setAboutWork(e.target.value)}}
                    defaultValue={props.aboutWork}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                />
                <br />
                <Select
                  defaultValue={[skills[0]]}
                  isMulti
                  name="skill"
                  options={skills}
                  defaultValue="Skills"
                  className="basic-multi-select"
                  classNamePrefix="select"
                  style={{marginBottom: "1.876em"}}
                    className={classes.skill}
                    onChange={handleChangedSkill}
                />
                
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
                
                <Button
            type="submit"
            onClick={previous}
            fullWidth
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


export default FormPersonalDetails
