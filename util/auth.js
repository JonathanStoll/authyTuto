import axios from "axios";
const API_KEY = "AIzaSyDS9KxqTIP1gjK-dxjy6Zv4QxxpYjWDgSQ";
async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
