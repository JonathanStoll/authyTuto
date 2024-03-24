import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useState } from "react";
import { Alert } from "react-native";

function SignupScreen() {
  const [loading, setLoading] = useState(false);

  async function signupHandeler({ email, password }) {
    setLoading(true);
    try {
      await createUser(email, password);
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
