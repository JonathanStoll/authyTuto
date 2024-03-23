import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
function LoginScreen() {
  const [loading, setLoading] = useState(false);

  async function loginHandeler({ email, password }) {
    setLoading(true);
    try {
      await login(email, password);
    } catch (error) {}
    setLoading(false);
  }

  if (loading) {
    return <LoadingOverlay message={"loging IN..."} />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandeler} />;
}

export default LoginScreen;
