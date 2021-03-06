import React, { Component } from "react";
import "./Add.css";
import * as actionCreators from "./action";
import { connect } from "react-redux";

class add extends Component {
  postDataHandler = () => {
    const data = {
      id: this.props.idd,
      name: this.props.nmm,
      desg: this.props.des,
      doj: this.props.dte,
    };
    console.log(data);
    this.props.postdata(data);
  };
  render() {
    return (
      <div className="de1">
        <h2>Add Employee</h2>
        <table id="table-header">
          <tr>
            <td>
              <label>Enter First Name</label>
            </td>
            <td>
              <input
                type="text"
                value={this.props.idd}
                onChange={(event) => this.props.addid(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Enter Last Name</label>
            </td>
            <td>
              <input
                type="text"
                value={this.props.nmm}
                onChange={(event) => this.props.addname(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Email Adress</label>
            </td>
            <td>
              <input
                type="text"
                value={this.props.des}
                onChange={(event) => this.props.adddesg(event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Date of Birth</label>
            </td>
            <td>
              <input
                type="date"
                value={this.props.dte}
                onChange={(event) => this.props.adddoj(event.target.value)}
              ></input>
            </td>
          </tr>
        </table>
        <button onClick={this.postDataHandler}>Enter</button>
        <b /> <b />
        {/* <b>{this.state.result}</b> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    idd: state.redadd.id,
    nmm: state.redadd.name,
    des: state.redadd.desg,
    dte: state.redadd.doj,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addid: (x) => dispatch({ type: "ADD_ID", val: x }),
    addname: (x) => dispatch({ type: "ADD_NAME", val: x }),
    adddesg: (x) => dispatch({ type: "ADD_DESG", val: x }),
    adddoj: (x) => dispatch({ type: "ADD_DOJ", val: x }),
    postdata: (a) => dispatch(actionCreators.postAsycnData(a)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(add);
