const authReducer = (
  state = { authData: null, loading: false, error: null, updateLoading: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: null };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: null };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: action.error }; // Store the error message
    case "UPDATING_START":
      return { ...state, updateLoading: true, error: null };
    case "UPDATING_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        updateLoading: false,
        error: null,
      };
    case "UPDATING_FAIL":
      return { ...state, updateLoading: false, error: action.error }; // Store the error message
    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        authData: null,
        loading: false,
        error: null,
        updateLoading: false,
      };
    case "FOLLOW_USER":
      return {
        ...state,
        authData: {
          ...state.authData,
          user: {
            ...state.authData.user,
            following: [...state.authData.user.following, action.data],
          },
        },
      };
    case "UNFOLLOW_USER":
      return {
        ...state,
        authData: {
          ...state.authData,
          user: {
            ...state.authData.user,
            following: state.authData.user.following.filter(
              (personId) => personId !== action.data
            ),
          },
        },
      };
    default:
      return state;
  }
};

export default authReducer;
