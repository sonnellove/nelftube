/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
const Upload = require('../../../../assets/images/upload.png');

function RightMenu(props) {
  const user = useSelector(state => state.user)
  if (user.userData) {

  }
  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="/login">Signin</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/register">Signup</Link>
        </Menu.Item>
      </Menu>
    )
  } else if(user.userData && user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="create">
          <Link to="/video/upload"><img src={Upload} alt="Upload" /></Link>
        </Menu.Item>
        <Menu.Item key="timeline">
          <Link to="/timeline">Timeline</Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to={`/timeline/${user.userData._id}`}>Profile</Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }else{
    return (
    <p>....</p>
  )

  }
}

export default withRouter(RightMenu);

