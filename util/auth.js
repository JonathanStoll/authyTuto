import axios from "axios";
const API_KEY = "AIzaSyDS9KxqTIP1gjK-dxjy6Zv4QxxpYjWDgSQ";

export async function createUser(email, password) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
    console.log("User created successfully:", response.data);
    return response.data; // Return the response data if needed
  } catch (error) {
    console.error("Error creating user:", error.response.data.error.message);
    throw new Error(error.response.data.error.message);
  }
}
