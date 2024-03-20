import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useState } from "react";

function SignupScreen() {
  const [loading, setLoading] = useState(false);

  async function signupHandeler({ email, password }) {
    setLoading(true);
    await createUser(email, password);
    setLoading(false);
  }

  if (loading) {
    return <LoadingOverlay message={'creating user...'} />;
  }

  return <AuthContent onAuthenticate={signupHandeler} />;
}

export default SignupScreen;
