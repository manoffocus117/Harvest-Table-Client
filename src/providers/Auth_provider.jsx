import React, { useEffect, useState } from "react";
import Auth_context from "./../context/Auth_context";
import {
      onAuthStateChanged,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      updateProfile,
      GoogleAuthProvider,
      signInWithPopup,
} from "firebase/auth";
import auth from "./../config/firebase.config";
import useAxiosPublic from "./../hooks/useAxiosPublic";

const Auth_provider = ({ children }) => {
      const [user, set_user] = useState(null);
      const [loading, set_loading] = useState(true);

      const google_provider = new GoogleAuthProvider();

      const axios_public = useAxiosPublic();

      // create user
      const create_user = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password);
      };

      // sign in
      const sign_in = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
      };

      // Google sign in
      const sign_in_with_google = () => {
            return signInWithPopup(auth, google_provider);
      };

      // sign out
      const sign_out = () => {
            return signOut(auth);
      };

      // update profile
      const update_user_profile = (name, photo_url) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo_url,
            });
      };

      // auth observer
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(
                  auth,
                  async (current_user) => {
                        set_user(current_user);

                        try {
                              if (current_user) {
                                    const user_info = {
                                          email: current_user.email,
                                    };

                                    const res = await axios_public.post(
                                          "/auth/get-token",
                                          user_info,
                                    );

                                    if (res.data.token) {
                                          localStorage.setItem(
                                                "access-token",
                                                res.data.token,
                                          );
                                    }
                              } else {
                                    localStorage.removeItem("access-token");
                              }
                        } catch (error) {
                              console.error("Failed to get JWT:", error);

                              localStorage.removeItem("access-token");
                        } finally {
                              set_loading(false);
                        }
                  },
            );

            return () => unsubscribe();
      }, []);

      const auth_info = {
            user,
            loading,
            create_user,
            sign_in,
            sign_in_with_google,
            sign_out,
            update_user_profile,
      };

      return <Auth_context value={auth_info}>{children}</Auth_context>;
};

export default Auth_provider;
