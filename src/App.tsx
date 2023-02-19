import React, { useEffect } from "react";
import Messages from "./components/Messages/Messages";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import Login from "./components/Login";

import Button from "./components/Common/Button";

import ChatContext from "./context/ChatContext";

import { firebaseAuth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser, selectLoggedInUser } from "./features/reducer";
import { signOut, SIGN_OUT } from "./constants";
const App = () => {
  //hooks
  const isloggedIn = useSelector(selectLoggedInUser);

  const dispatch = useDispatch();

  useEffect(() => {
    firebaseAuth.getAuth().onAuthStateChanged(function (user: any) {
       
      if (user?.accessToken) {
        dispatch(authenticateUser({isloggedIn:true,user:user.uid}));
        // User is signed in.
      } else {
        // No user is signed in.
        dispatch(authenticateUser(false));
      }
    });

  
  }, []);

  const handleSignOut = () => {
    const auth = firebaseAuth.getAuth();
    firebaseAuth
      .signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(authenticateUser(false));
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      {isloggedIn && (
        <Button
          className={signOut}
          value={SIGN_OUT}
          onClick={handleSignOut}
        ></Button>
      )}
      <ChatContext>
        <Wrapper>
          {!isloggedIn ? (
            <Login></Login>
          ) : (
            <>
              <Screen></Screen>
              <Messages></Messages>
            </>
          )}
        </Wrapper>
      </ChatContext>
    </>
  );
};

export default App;
