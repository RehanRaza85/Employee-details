import React, { Component } from "react";
import "./App.css";
import SideBar from "./sidebar";
import Add from "./Add";
import List from "./List";

import { connect } from "react-redux";

class App extends Component {
  changeSide = (x) => {
    if (x === 2) {
      // this.setState({showpg:2});
      this.props.showAdd();
    } else if (x === 3) {
      // this.setState({showpg:3});
      this.props.showList();
    }
  };
  render() {
    let add = null;

    let list = null;

    if (this.props.ctr === 2) {
      add = <Add />;
    }
    if (this.props.ctr === 3) {
      list = <List />;
    }

    return (
      <div className="App">
        <SideBar click={(opt) => this.changeSide(opt)} />
        <div className="header">
          <h1>Employee Details</h1>
        </div>
        <div className="main-component">
          {add}
          {list}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.redapp.showpg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAdd: () => dispatch({ type: "SHOW_ADD" }),
    showList: () => dispatch({ type: "SHOW_LIST" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
