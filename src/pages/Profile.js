import React, { useEffect } from "react";
import { useHistory } from "react-router";

const Profile = (props) => {
  const login = props.login;
  const history = useHistory();

  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login,history]);

  return (
    <>
      <h1>Profile</h1>
    </>
  );
};

export default Profile;
