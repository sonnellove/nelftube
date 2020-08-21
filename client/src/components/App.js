import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadVideoPage from "./views/UploadVideoPage/UploadVideoPage"
import DetailVideoPage from "./views/DetailVideoPage/DetailVideoPage"
import SubscriptionPage from './views/SubscriptionPage/SubscriptionPage';
import Timeline from './views/Profile/Timeline';
import Profile from './views/Profile/Timeline/Profile';
import UploadImagePage from './views/Profile/UploadImagePage';
import PostImage from './views/Profile/Timeline/PostImage';
import EditProfile from './views/Profile/Timeline/EditProfile';
import UpdatePost from './views/Profile/Timeline/UpdatePost';
import DeletePost from './views/Profile/Timeline/DeletePost';
import ChangeCover from './views/Profile/Timeline/ChangeCover';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '50px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/video/upload" component={Auth(UploadVideoPage, true)} />
          <Route exact path="/video/:videoId" component={Auth(DetailVideoPage, null)} />
          <Route exact path="/subscription" component={Auth(SubscriptionPage, null)} />
          <Route exact path="/timeline" component={Auth(Timeline, null)} />
          <Route exact path="/timeline/:userId" component={Auth(Profile, null)} />
          <Route exact path="/editProfile" component={Auth(EditProfile, true)} />
          <Route exact path="/updatePost/:postId" component={Auth(UpdatePost, true)} />
          <Route exact path="/deletePost/:postId" component={Auth(DeletePost, true)} />
          <Route exact path="/image/:postId" component={Auth(PostImage, null)} />
          <Route exact path="/changeCover" component={Auth(ChangeCover, true)} />
          <Route exact path="/upload" component={Auth(UploadImagePage, true)} />

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
