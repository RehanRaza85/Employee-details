import axios from "../../axios-emp";

export const getDataHandler1 = (x) => {
  return {
    type: "DATA_GET",
    val: x,
  };
};

export const getAsycnData = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      axios
        .get("/data.json")
        .then((response) => {
          const x = Object.values(response.data);
          dispatch(getDataHandler1(x));
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  };
};
