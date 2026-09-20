import React, { useEffect, useState } from "react";
import Auth_context from "./../context/Auth_context";
import {
      createUserWithEmailAndPassword,
      onAuthStateChanged,
} from "firebase/auth";
import auth from "./../config/firebase.config";

const Auth_provider = ({ children }) => {
      // state for holding user data
      const [user, set_user] = useState(null);
      // state for loading
      const [loading, set_loading] = useState(true);

      // create user with email and password
      const create_user = (email, password) => {
            set_loading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      };

      // auth observer
      useEffect(() => {
            const unmount = onAuthStateChanged(auth, (current_user) => {
                  set_user(current_user);
                  set_loading(false);
            });
            return () => {
                  return unmount();
            };
      }, []);

      // auth info
      const auth_info = { user, loading, create_user };

      return <Auth_context value={auth_info}>{children}</Auth_context>;
};

export default Auth_provider;
