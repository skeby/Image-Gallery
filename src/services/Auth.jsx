import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth = ({ children }) => {
  const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
  const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth;
