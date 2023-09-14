import { useEffect } from "react";
import { checkAuthenticated, load_user, googleAuth } from "../actions/auth";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Layout = (props) => {
  let location = useLocation;

  useEffect(() => {
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

    if (state && code) {
      props.googleAuth(state, code);
    } else {
      props.checkAuthenticated();
      props.load_user();
    }
  }, [location, props]);

  return <div>{props.children}</div>;
};

export default connect(null, { checkAuthenticated, load_user, googleAuth })(
  Layout
);
