import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom'
import Axios from 'axios';
import { Input } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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


export default function EmployerProfile() {
  const classes = useStyles();
  const [founder, setFounder] = useState("");
  const [coFounder, setCoFounder] = useState("");
  const [link, setLink] = useState("");
  const [hr, setHr] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");

  const profile = async () => {
      await Axios.post({
          founder, coFounder, link, hr, contactEmail, contactNumber, address, companyName
      })
  }

  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <form className={classes.form} onSubmit={profile}>
            <div>
                <label>Logo </label>
                <input type="file" />
            </div>
        <TextField
            variant="outlined"
            margin="normal"
            onChange={(e)=>setCompanyName(e.target.value)}
            required
            fullWidth
            name="Name"
            label="Company Name"
            type="Name"
            id="Name"
            autoComplete="Name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e)=>setLink(e.target.value)}
            required
            fullWidth
            name="link"
            label="Company Link"
            type="link"
            id="link"
            autoComplete="link"
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e)=>setFounder(e.target.value)}
            required
            fullWidth
            id="Founder"
            label="Company Founder"
            name="Founder"
            autoComplete="Founder"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e)=>setCoFounder(e.target.value)}
            required
            fullWidth
            name="coFounder"
            label="Company Co-Founder"
            type="coFounder"
            id="coFounder"
            autoComplete="coFounder"
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e)=>setHr(e.target.value)}
            required
            fullWidth
            name="hr"
            label="Company HR"
            type="hr"
            id="hr"
            autoComplete="hr"
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e)=>setContactEmail(e.target.value)}
            required
            fullWidth
            name="email"
            label="Company Email"
            type="email"
            id="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e)=>setContactNumber(e.target.value)}
            required
            fullWidth
            name="number"
            label="Contact Number"
            type="number"
            id="number"
            autoComplete="number"
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e)=>setAddress(e.target.value)}
            required
            fullWidth
            name="address"
            label="Company Address"
            type="address"
            id="address"
            autoComplete="address"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Profile
          </Button>
        </form>
      </div>
    </Container>
  );

}