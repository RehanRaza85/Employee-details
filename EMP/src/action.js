import axios from "./axios-emp";

export const postDataHandler1 = () => {
  return {
    type: "DATA_POSTED",
  };
};

export const postAsycnData = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      axios
        .post("/data.json", data)
        .then((response) => {
          console.log(response);
          alert("Sucessfully Entered");
        })
        .catch((err) => {
          console.log(err);
        });
      dispatch(postDataHandler1());
    }, 3000);
  };
};
