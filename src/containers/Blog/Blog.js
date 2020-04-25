import React, { Component } from "react";
// import axios from "axios";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent/asyncComponent";
//import NewPost from "./NewPost/NewPost";
const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true,
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a>
                  <NavLink to="/posts" exact>
                    Posts
                  </NavLink>
                </a>
              </li>
              <li>
                <a>
                  <NavLink
                    to={{
                      pathname: "/new-post",
                      hash: "#submit",
                      search: "?quick-submit=true",
                    }}
                  >
                    New Post
                  </NavLink>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found!</h1>} />{" "}
          {/* Route for 404 don't need to specify "path" */}
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
