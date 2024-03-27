import AuthContent from "../components/Auth/AuthContent";
import { useState, useContext } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [loading, setLoading] = useState(false);

  const authContex = useContext(AuthContext)
  async function loginHandeler({ email, password }) {
    setLoading(true);
    try {
    const token = await login(email, password);
    authContex.authenticate(token)
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
