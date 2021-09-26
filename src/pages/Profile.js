import React, { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch , Link } from "react-router-dom";

import EditProfile from "../components/EditProfile";
import ViewProfile from "../components/ViewProfile";

const Profile = (props) => {
  const login = props.login;
  const history = useHistory();

  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login, history]);

  const { path, url } = useRouteMatch();

  return (
    <>
      <h1>Profile</h1>

      <ul className="nav">
        <li>
          <Link to={`${url}/viewprofile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </>
  );
};

export default Profile;
