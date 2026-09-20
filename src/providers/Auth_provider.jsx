import React, { useState } from "react";
import Auth_context from "./../context/Auth_context";

const Auth_provider = ({ children }) => {
      // state for holding user data
      const [user, set_user] = useState(null);
      // state for loading
      const [loading, set_loading] = useState(true);

      // auth info
      const auth_info = { user, loading };

      return <Auth_context value={auth_info}>{children}</Auth_context>;
};

export default Auth_provider;
