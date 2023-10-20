const traveler = {
  name: "Sam",
  countries: [
    {
      name: "Italy",
      year: 2022
    },
    {
      name: "Ireland",
      year: 2021
    },
    {
      name: "USA",
      year: 2021
    }
  ]
};

fetch('https://thejsway-server.herokuapp.com/api/countries', {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(traveler)
}).then(response => response.text()).then(text => {
  console.log(text);
}).catch(err => {
  console.error(err);
});