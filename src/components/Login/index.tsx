import React from "react";
import { SignInWithGoogle } from "../../firebase/googleAuth";
import Button from "../Common/Button";
import googleIcon from "../../assets/images/google-icon.svg";
import { googleBtn, loginBtn, SIGN_IN_WITH_GOOGLE } from "../../constants";

const Index = () => {
  const handleGoogleAuth = async () => {
    await SignInWithGoogle();
  };

  return (
    <div className="login-wrapper" onClick={handleGoogleAuth}>
      <Button
        className={googleBtn}
        value={
          <img className="google-img" src={googleIcon} alt="google-icon"></img>
        }
      ></Button>
      <Button className={loginBtn} value={SIGN_IN_WITH_GOOGLE}></Button>
    </div>
  );
};

export default Index;
