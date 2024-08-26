import * as AuthApi from "../api/AuthRequests";

export const logIn = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    navigate("../home", { replace: true });
  } catch (error) {
    console.log("Error in logIn action:", error); // Debugging log
    dispatch({ type: "AUTH_FAIL", error: error.response?.data || "Something went wrong" });
    throw error;
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    navigate("../home", { replace: true });
  } catch (error) {
    // Capture and dispatch the error
    dispatch({ type: "AUTH_FAIL", error: error.response?.data || "Something went wrong" });
    throw error; // Rethrow error so it can be caught in the component
  }
};


export const logout = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
