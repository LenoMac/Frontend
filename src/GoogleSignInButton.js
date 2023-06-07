import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLoginButton } from 'react-google-button';

const GoogleSignInButton = () => {
  const responseGoogle = (response) => {
    // Обработка успешного входа через Google
    console.log('Успешный вход через Google');
    console.log('ID токен:', response.tokenId);

    // Здесь вы можете отправить токен на сервер для проверки и создания сессии пользователя
  };

  return (
    <GoogleLogin
      clientId="YOUR_CLIENT_ID" // Замените на свой Client ID
      buttonText="Войти через Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      render={(renderProps) => (
        <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled} />
      )}
    />
  );
};

export default GoogleSignInButton;
