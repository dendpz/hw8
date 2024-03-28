
// Below sample data taken from end of chapter
const traveler = {
  name: "Sam",
  countries: [
    {
      name: "Italy",
      year: 2022
    },
    {
      model: "Ireland",
      color: 2021
    },
    {
      model: "USA",
      color: 2021
    }
  ]
};

// POST method - I followed the "Sending JSON data" example from Chapter 23
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(traveler)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });