import React, { Component } from "react";
import "./List.css";
import axios from "./axios-emp";

class list extends Component {
  state = {
    data: [],
    keys: [],
    result: "",
    value: "",
    datafetch: "NO",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  // function to search the data
  getDataSearched = () => {
    let ids = this.state.value;
    let p = 0;
    this.state.data.map((data) => {
      if (data.id === ids) {
        p = 1;
        alert("Data Found");
        alert(
          "Name: " +
            data.name +
            " Designation:" +
            data.desg +
            " Date of Joinig: " +
            data.doj
        );
      }
    });

    if (p === 1) {
      this.setState({ result: "Data Found" });
    } else {
      this.setState({ result: "Data Not Found" });
      alert("Data Not Found");
    }
  };

  getDataHandler = () => {
    axios
      .get("/data.json")
      .then((response) => {
        this.setState({ data: Object.values(response.data) });
        this.setState({ keys: Object.keys(response.data) });
        //console.log(Object.values(response.data));

        this.setState({ datafetch: "YES" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  dataDelete = (event) => {
    alert("The Data Deletion Complete for " + event.target.value);
    const d = event.target.value;
    axios
      .delete("/data.json", { data: d })
      .then((response) => {
        console.log(response);
        alert("Data Deleted");
      })
      .catch((err) => {
        console.log(err);
        alert("Error Occurred");
      });
  };

  // getDataDelete =(event) =>{
  //     const d=event.target.value;
  //     console.log(d);
  // axios.delete("/data.json", {data: d})
  // .then(response=>{
  //     console.log(response);
  //     alert("Data Deleted");
  // }).catch(err=>{
  //     console.log(err);
  //     alert("Error Occurred");
  // });
  // }

  render() {
    // console.log(this.state.data);
    // const datas = this.state.data.map((data) => {
    //   return (
    //     <Emp id={data.id} name={data.name} desg={data.desg} doj={data.doj} />
    //   );
    // });

    const datas = this.state.data.map((data) => {
      return (
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.desg}</td>
          <td>{data.doj}</td>
          <td>
            <button value={data.id} onClick={this.dataDelete}>
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="de1">
        <h2>List Employee</h2>
        <button onClick={this.getDataHandler}>Fetch All Employees</button>

        <b />
        <table>
          <div id="table-header">
            <td>
              {" "}
              <b>First Name </b>{" "}
            </td>{" "}
            <td>
              {" "}
              <b> Last Name </b>{" "}
            </td>{" "}
            <td>
              {" "}
              <b> Email Address </b>{" "}
            </td>{" "}
            <td>
              {" "}
              <b> Date of Birth</b>{" "}
            </td>
            {datas}
          </div>
        </table>

        <b />
        <b />
      </div>
    );
  }
}

export default list;
