import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";
function LoginScreen() {
  const [loading, setLoading] = useState(false);

  async function loginHandeler({ email, password }) {
    setLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert('Authentication Error', 'could not log in plz check credentials')
    }
    setLoading(false);
  }

  if (loading) {
    return <LoadingOverlay message={"loging IN..."} />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandeler} />;
}

export default LoginScreen;
