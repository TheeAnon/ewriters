import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  GOOGLE_AUTH_SUCCESS,
} from "./types";
import axios from "axios";

export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ token: localStorage.getItem("access") });
    await axios
      .post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
      .then((res) => {
        res.data.code !== "token_not_valid"
          ? dispatch({
              type: AUTHENTICATED_SUCCESS,
            })
          : dispatch({
              type: AUTHENTICATED_FAIL,
            });
      })
      .catch((error) => {
        dispatch({
          type: AUTHENTICATED_FAIL,
          error: error,
        });
      });
  } else {
    dispatch({ type: AUTHENTICATED_FAIL });
  }
};

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    await axios
      .get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config)
      .then((response) => {
        dispatch({
          type: USER_LOADED_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: USER_LOADED_FAIL,
          error: error,
        });
      });
  } else {
    console.log("No local storage");
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

export const googleAuth = (state, code) => async (dispatch) => {
  if (state && code && !localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const details = { state: state, code: code };
    const body = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("6");
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${body}`,
        config
      )
      .then((res) => {
        dispatch({
          type: GOOGLE_AUTH_SUCCESS,
          payload: res.data,
        });
        dispatch(load_user());
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: { error: error },
        });
      });
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  await axios
    .post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
      dispatch(load_user());
    })
    .catch((error) => {
      const err =
        error.response.status === 401
          ? "Wrong email or password. If you don't have an account sign up instead."
          : "An error occured. Please try again.";
      dispatch({
        type: LOGIN_FAIL,
        payload: { error: err },
      });
    });
};

export const signup =
  (email, first_name, last_name, phone, password, re_password) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email,
      first_name,
      last_name,
      phone,
      password,
      re_password,
    });

    await axios
      .post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config)
      .then((response) => {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: response.data,
        });
        dispatch(load_user());
      })
      .catch((error) => {
        const err =
          error.response.data.email && error.response.data.email.length > 0
            ? "You already have an account. Login instead."
            : "An error occured. Please try again.";
        dispatch({
          type: SIGNUP_FAIL,
          payload: { error: err },
        });
        console.log(error);
      });
  };

export const verify = (uid, token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ uid, token });

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
      body,
      config
    );

    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
};

export const reset_password = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email });
  try {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,
        body,
        config
      )
      .then(() => {
        dispatch({ type: PASSWORD_RESET_SUCCESS });
      });
  } catch (error) {
    dispatch({ type: PASSWORD_RESET_FAIL });
  }
};

export const reset_password_confirm =
  (uid, token, new_password, re_new_password) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
          body,
          config
        )
        .then(() => {
          dispatch({ type: PASSWORD_RESET_CONFIRM_SUCCESS });
        });
    } catch (error) {
      dispatch({ type: PASSWORD_RESET_CONFIRM_FAIL });
    }
  };

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
