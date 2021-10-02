import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId = '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function GoogleLoginComponent() {
  const onSuccess = res => {
    console.log('Login Success: currentUser:', res.profileObj);
    console.log(`Logged in successfully welcome ${res.profileObj.name}`);
    refreshTokenSetup(res);
  };

  const onFailure = res => {
    console.log('Login failed: res:', res);
    console.log(`Failed to login.`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ width: '100%', fontFamily: 'Gilroy Bold', borderRadius: '10px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default GoogleLoginComponent;
