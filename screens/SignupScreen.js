import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [loading, setLoading] = useState(false);

const authContex = useContext(AuthContext)

  async function signupHandeler({ email, password }) {
    setLoading(true);
    try {
     const token = await createUser(email, password);
      authContex.authenticate(token)
    } catch (error) {
      Alert.alert('creating user faild', 'try again!!')
    }
    setLoading(false);
  }

  if (loading) {
    return <LoadingOverlay message={"creating user..."} />;
  }

  return <AuthContent onAuthenticate={signupHandeler} />;
}

export default SignupScreen;
