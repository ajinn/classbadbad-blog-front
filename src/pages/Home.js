import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import UserImg from "../assets/user.png";
import Post from "../components/Post";

const Home = ({ history }) => {
  const classes = useStyles();
  const token = JSON.parse(localStorage.getItem('token'));
  const [username, setUsername] = useState('');
  const [ownerId, setOwnerID] = useState('');
  const [role, setRole] = useState('');

  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:3000/profile", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const { userId, username, role } = response.data;
      if (userId) {
        setOwnerID(userId);
        setUsername(username);
        if (role == 0) {
          setRole("ADMIN");
        } else {
          setRole("USER");
        }
      } else {
        console.log("GetProfile Error");
      } 
    } catch (e) {
      console.log("There are something wrong about get profile :(");
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <div className={classes.navBar}>
        <div style={{ marginRight: 12 }}>{username},</div>
        <Button
          className={classes.logoutButton}
          variant="contained"
          color="primary"
          onClick={() => history.push("/login")}
        >
          Log out
        </Button>
      </div>
      <div className={classes.container}>
        <div className={classes.post}>
          <img 
            className={classes.img}
            src={UserImg}
          />
          <TextField
            className={classes.textField}
            placeholder="Say something, username."
            multiline
            rowsMax={4}
            variant="outlined"
            size="small"
          />
        </div>
        <Button
          className={classes.postButton}
          variant="contained"
          color="primary"
          onClick={() => {
            // history.push("/login")
          }}
        >
          Post
        </Button>
        <Post/>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: "32px 165px",
    height: "100vh",
    backgroundColor: "#F9F9F9",
  },
  navBar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100vw",
    height: 48,
    boxShadow: "inset 0 0 1px #353736",
  },
  logoutButton: {
    height: 32,
    width: 100,
    color: "white",
    boxShadow: 'none',
    marginRight: 16
  },
  postButton: {
    height: 32,
    width: 80,
    color: "white",
    boxShadow: 'none',
    alignSelf: "flex-end",
    marginTop: 8,
    marginBottom: 24
  },
  img: {
    display: "flex",
    alignSelf: 'flex-start',
    height: 48,
    width: 48,
    marginRight: 16
  },
  textField: {
    width: "100vw",
  },
  post: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
});

export default withRouter(Home);
