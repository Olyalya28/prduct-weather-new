function displayTemperarure(response) {
  console.log(response.data);
}

let apiKey = "64c8b0951401b62532bda560ec6ec228";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperarure);
