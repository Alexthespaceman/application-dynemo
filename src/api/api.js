import axios from "axios";

// const axios = require("axios");

const options = {
  method: "GET",
  url: "https://f1-live-motorsport-data.p.rapidapi.com/session/2757",
  headers: {},
};

axios
  .request(options)
  .then(function (response) {
    console.log(response);
    return response.data;
  })
  .catch(function (error) {
    console.error(error);
  });

// export const getManchesterWeather = () => {
//   return axios
//     .get("https://goweather.herokuapp.com/weather/manchester")
//     .then(({ data }) => {
//       return data;
//     });
// };

/* WEATHER FOR LONDON HAD STOPPED WORKING ON THE API, SO I SWAPPED IT FOR MANCHESTER IN THE MEAN TIME, FOR WHEN LONDON IS BACK UP AND OPERATING TO SHOW OFF THE CAPABILITIES OF THE GLOBAL WEATHER SCREEN*/

// export const getLondonData = () => {
//   return axios
//     .get(`https://goweather.herokuapp.com/weather/london`)
//     .then(({ data }) => {
//       return data;
//     });
// };

// export const getCityWeather = (city) => {
//   return axios
//     .get(`https://goweather.herokuapp.com/weather/${city}`)
//     .then(({ data }) => {
//       return data;
//     });
// };
